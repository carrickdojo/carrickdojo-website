
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
      // Depending on Next.js version, body parsing might be automatic.
      // If not, you may need a body parser, or enable Next.js built-in with config.
      const { to, subject, message } = req.body;

      // Suppose your send365Email signature is:
      // send365Email(from, to, subject, html, text)
      await send365Email(
        process.env.email,   // from
        to,                  // to
        subject,             // subject
        `<p>${message}</p>`, // html
        message              // text
      );
      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    // Handle non-POST requests
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