const nodemailer = require("nodemailer");
const dotenv = require('dotenv')

dotenv.config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
});

transporter.verify().then(() => {
  console.log("Ready for sending emails");
});

module.exports = transporter;
