const { google } = require("googleapis");
import { auth, SPREADSHEET_ID } from "../../auth";

export async function GET() {
  const sheets = google.sheets({ version: "v4", auth });
  const range = "Sheet2";

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range,
    });
    const rows = response.data.values;

    return new Response(
      JSON.stringify({
        message: "📊 Data fetched successfully! 🎉",
        data: rows,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "❌ Failed to retrieve data. Please try again later. 😕",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
