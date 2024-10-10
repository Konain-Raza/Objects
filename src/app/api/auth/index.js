const { google } = require("googleapis");


const SPREADSHEET_ID = "1W3DOaAnV3gLL5FFoXxfeahhLge_nisIyU3zYBYt6OWg";

const auth = new google.auth.GoogleAuth({
  credentials: keys,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

module.exports = {
  auth,
  SPREADSHEET_ID,
};
