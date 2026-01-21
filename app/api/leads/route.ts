import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, service, location } = body;

        // Validation
        if (!name || !phone) {
            return NextResponse.json(
                { error: "Name and Phone are required" },
                { status: 400 }
            );
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            },
            scopes: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets",
            ],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
        if (!spreadsheetId) {
            throw new Error("GOOGLE_SHEETS_ID is not defined");
        }

        // Date timestamp
        const date = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

        // First, check if the header row exists
        const headerCheck = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: "A1:E1",
        });

        const headers = ["Date", "Name", "Phone", "Service", "Location"];

        if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
            // Need to add headers first
            await sheets.spreadsheets.values.append({
                spreadsheetId,
                range: "A1:E1",
                valueInputOption: "USER_ENTERED",
                requestBody: {
                    values: [headers],
                },
            });
        }

        // Add the new row
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "A:E", // Append to column A to E
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [date, name, phone, service, location]
                ]
            }
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Sheet Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
