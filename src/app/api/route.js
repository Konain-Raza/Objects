const { google } = require("googleapis");

export async function GET(req) {
  return new Response(
    JSON.stringify({ message: "Hello from the Next.js API!" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
