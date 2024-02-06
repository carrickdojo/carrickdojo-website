const nodemailer = require("nodemailer")

exports.handler = async (event) => {
  const transporter = nodemailer.createTransport({
    host: "mail.carrickdojo.com",
    port: 465,
    secure: true,
    auth: {
      user: "hello@carrickdojo.com",
      pass: process.env.SMTPPass,
    },
  })

  const message =
    "Hello " +
    event.name +
    ". We are delighted you are interested in becoming a mentor with us and will be in touch soon. Info Recieved: " +
    event.info +
    " Availability: " +
    event.avail +
    "Phone: " +
    event.phone +
    "Email: " +
    event.email

  const messageHtml =
    "Hello " +
    event.name +
    ". <br .>We are delighted you are interested in becoming a mentor with us and will be in touch soon.<br /><hr /><br /> <div style='background-color: lime; display: flex; padding: 2rem;'><b>Info Recieved:</b> " +
    event.info +
    " <br /><b>Availability: </b>" +
    event.avail +
    "<br /><b>Phone: </b>" +
    event.phone +
    "<br /><b>Email: </b>" +
    event.email +
    "</div>"

  const mailOptions = {
    from: '"CarrickDojo" <hello@carrickdojo.com>', // sender address
    to: [event.email, "hello@carrickdojo.com"], // list of receivers
    subject: "CarrickDojo Mentor Signup", // Subject line
    text: message, // plain text body
    html: messageHtml, // html body
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully",
        info,
      }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Email sending failed",
        error,
      }),
    }
  }
}
