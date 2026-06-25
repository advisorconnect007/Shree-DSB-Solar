// DSB Solar — Google Sheet + Email Notification
// Yeh code Apps Script mein paste karo aur NEW deployment karo

var NOTIFY_EMAIL = "advisorconnect007@gmail.com"; // aapka email

function doPost(e) {
  try {
    var sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getActiveSheet();

    // Headers — pehli baar
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Date & Time", "Name", "Phone",
        "Email", "Service", "Message"
      ]);
      sheet.getRange(1, 1, 1, 6)
        .setFontWeight("bold")
        .setBackground("#0F172A")
        .setFontColor("#FBBF24");
      sheet.setFrozenRows(1);
    }

    var data = JSON.parse(e.postData.contents);

    var timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata"
    });

    // Sheet mein save karo
    sheet.appendRow([
      timestamp,
      data.name    || "",
      data.phone   || "",
      data.email   || "",
      data.service || "",
      data.message || ""
    ]);

    sheet.autoResizeColumns(1, 6);

    // Email notification bhejo
    var subject = "🌞 New Lead: " + (data.name || "Unknown") + " — DSB Solar";

    var body =
      "Namaskar!\n\n" +
      "DSB Solar website se ek naya inquiry aaya hai:\n\n" +
      "──────────────────────────\n" +
      "👤  Name    : " + (data.name    || "—") + "\n" +
      "📱  Phone   : " + (data.phone   || "—") + "\n" +
      "📧  Email   : " + (data.email   || "—") + "\n" +
      "🔧  Service : " + (data.service || "—") + "\n" +
      "💬  Message : " + (data.message || "—") + "\n" +
      "──────────────────────────\n" +
      "🕐  Time    : " + timestamp + "\n\n" +
      "Jaldi se call karein aur lead convert karein!\n\n" +
      "— DSB Solar Website";

    MailApp.sendEmail({
      to:      NOTIFY_EMAIL,
      subject: subject,
      body:    body
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test — Apps Script se manually run karke dekho
function testEmail() {
  var fakeEvent = {
    postData: {
      contents: JSON.stringify({
        name:    "Test Customer",
        phone:   "9876543210",
        email:   "customer@gmail.com",
        service: "Residential Solar",
        message: "Mujhe 5kW system chahiye mere ghar ke liye."
      })
    }
  };
  doPost(fakeEvent);
  Logger.log("Test complete — check your email!");
}
