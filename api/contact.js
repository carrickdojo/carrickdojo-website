
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
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    // Extract fields from POST body
    const { from, subject, message } = req.body;

    // Combine the user's address with your internal address
    const recipients = [from, "hello@carrickdojo.com"];

    // Send the email. The first argument is the actual sending address (Office365),
    // the second is the recipients array (or comma-separated list).
    await send365Email(
      process.env.email,       // SMTP "from" (your Office365 account)
      recipients.join(","),    // "to" - multiple recipients
      subject,
      `<p>${message}</p>`,     // HTML body
      message                  // text body
    );

    // Redirect to a Thank You page (HTML file or Next.js page).
    res.writeHead(303, { Location: "/thank-you.html" });
    res.end();
  } catch (error) {
    console.error("Error sending email:", error);

    // On error, redirect to an Error page
    res.writeHead(303, { Location: "/error.html" });
    res.end();
  }
}