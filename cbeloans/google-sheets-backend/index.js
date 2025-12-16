const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();
app.use(cors());
app.use(express.json());

// Google Auth Setup
const auth = new google.auth.GoogleAuth({
  keyFile: "Credentials.json.json", 
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Replace with your Google Sheet ID
const SPREADSHEET_ID = "1-ZclA7JJW6WsxIa0botLgyrlAcpxF5VRafTFjKyxsVY"; // ⚠️ CHANGE THIS TO YOUR ACTUAL SHEET ID

// READ Google Sheet
app.get("/read", async (req, res) => {
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1",
    });

    res.json(response.data.values || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "Backend is running", timestamp: new Date() });
});

// WRITE to Google Sheet - Contact Form
app.post("/contact", async (req, res) => {
  try {
    const { name, mobileNumber, productType, loanAmount, city, employmentType } = req.body;

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    // Create timestamp for submission
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Try to append to Sheet1 first, which should exist by default
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[timestamp, name, mobileNumber, productType, loanAmount, city, employmentType]],
        },
      });
    } catch (appendError) {
      // If Sheet1 doesn't exist, try with just the spreadsheet ID
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "A:G", // Use column range instead of sheet name
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[timestamp, name, mobileNumber, productType, loanAmount, city, employmentType]],
        },
      });
    }

    res.json({ success: true, message: "Contact form submitted successfully" });
  } catch (err) {
    console.error('Error saving to Google Sheets:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// WRITE to Google Sheet (legacy endpoint)
app.post("/write", async (req, res) => {
  try {
    const { name, email } = req.body;

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[name, email]],
      },
    });

    res.json({ message: "Row added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
