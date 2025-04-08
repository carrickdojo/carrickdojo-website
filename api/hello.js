
const nodemailer = require("nodemailer");


async function send365Email(from, to, subject, html, text) {
    try { 
        const transportOptions = 
        {
          host: 'smtp.office365.com',
          secure: false,
          port: '587',
          tls: {
          ciphers: "SSLv3",
          rejectUnauthorized: false,
          },
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


export default async function hello(req, res) {
  try {
    await send365Email(
      process.env.email,
      "test@blob.ie",
      "Subject",
      "<i>Hello World</i>",
      "Hello World"
    );
    res.status(200).json({ message: "It works" });
  } catch (err) {
    res.status(500).json({ message: "Email send failed", error: err.message });
  }
}