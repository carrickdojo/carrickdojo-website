// // Create a transporter object
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use Gmail as the email service
//   auth: {
//     user: process.env.email, // Your Gmail email address
//     pass: process.env.password // Your Gmail password
//   }
// });

// // Define the email options
// const mailOptions = {
//   from: process.env.email, // Sender's email address
//   to: 'test@blob.ie', // Recipient's email address
//   subject: 'Hello from Nodemailer', // Subject line
//   text: 'This is a test email sent using Nodemailer!' // Plain text body
// };

// // Send the email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

const nodemailer = require("nodemailer");


async function send365Email(from, to, subject, html, text) {
    try { 
        const transportOptions = {
            host: 'smtp.office365.com',
            port: '587',
            auth: { user: process.env.email, pass: process.env.password },
            secureConnection: true,
            tls: { ciphers: 'SSLv3' }
        };
    
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




export default function hello(req, res) {
  send365Email(process.env.email, "test@blob.ie", "Subject", "<i>Hello World</i>", "Hello World");
  res.statusCode = 200;
  res.json({ message: 'It works' });
}