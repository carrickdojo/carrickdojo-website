import { MailtrapClient } from "mailtrap"

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = process.env.token;
const SENDER_EMAIL = "webmaster@carrickdojo.com";
const RECIPIENT_EMAIL = "test@blob.ie";

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

// client
//   .send({
//     from: sender,
//     to: [{ email: RECIPIENT_EMAIL }],
//     subject: "Hello from Mailtrap!",
//     text: "Welcome to Mailtrap Sending!",
//   })
//   .then(console.log)
//   .catch(console.error);



  export default async function mail(req, res) {
    try {
      await client
      .send({
        from: sender,
        to: [{ email: RECIPIENT_EMAIL }],
        subject: "Hello from Mailtrap!",
        text: "Welcome to Mailtrap Sending!",
      })
      .then(console.log)
      .catch(console.error);
    } catch (err) {
      res.status(500).json({ message: "Email send failed", error: err.message });
    }
  }