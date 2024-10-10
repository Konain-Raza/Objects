const { google } = require("googleapis");
import { auth, SPREADSHEET_ID } from "../../auth";

export async function POST(req) {
  try {
    const {data} = await req.json();
    console.log( data)
    const sheets = google.sheets({ version: "v4", auth });
    const range = "Sheet2";

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range,
      valueInputOption: "RAW",
      resource: {
        values: [data],
      },
    });

    return new Response(
      JSON.stringify({
        message: "🎉 Data inserted successfully! ",
        details: `Your data has been added to range: ${
          response.data.updates ? response.data.updates.updatedRange : "N/A"
        } 📄`,
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
        message: "⚠️ Oops! Something went wrong 😢",
        error: `Error: ${error.message} 💻. Please try again!`,
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
