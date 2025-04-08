
const nodemailer = require("nodemailer");

async function send365Email(from, to, subject, html, text) {
  try { 
      const transportOptions = 
      {
        host: 'smtp-legacy.office365.com',
        secure: false,
        port: '587',
        secure: false,
        auth: {
        user: process.env.email,
        pass: process.env.password,
        },
        debug: true,
        logger:true,
        }
      

  
      const mailTransport = nodemailer.createTransport(transportOptions);
  
      await mailTransport.sendMail({
          from,
          to,
          replyTo: from,
          subject,
          html,
          text
      });
  } catch (err) { 
      console.error(`send365Email: An error occurred:`, err);
  }
}




export default async function contact(req, res) {
  if (req.method === "POST") {
    try {
      const { from, subject, message } = req.body;

      // Combine the user-provided "from" address and "hello@carrickdojo.com"
      // into a single array or comma-separated list (NodeMailer supports both).
      const recipients = [from, "hello@carrickdojo.com"];

      // Note:
      // - The actual SMTP "from" is process.env.email (your Office365 account).
      // - "replyTo" is set to the user’s email so you can hit "Reply" in your inbox.
      await send365Email(
        process.env.email,              // SMTP "from"
        recipients.join(","),           // "to" - multiple recipients
        subject,
        `<p>${message}</p>`,           // HTML body
        message                         // text body
      );

      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}






// export default async function contact(req, res) {
//   try {
//     await send365Email(
//       process.env.email,
//       "test@blob.ie",
//       "Subject",
//       "<i>Hello World</i>",
//       "Hello World"
//     );
//     res.status(200).json({ message: "It works" });
//   } catch (err) {
//     res.status(500).json({ message: "Email send failed", error: err.message });
//   }
// }