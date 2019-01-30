const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
require('./config/prod')
// const smtpTransport = require('nodemailer-smtp-transport');


dotenv.config();
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


console.log(process.env.REACT_APP_USER)
app.post('/contact/send', (req, res) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: smtp.gmail.com,

    auth: {
      user: process.env.REACT_APP_USER,
      pass: process.env.REACT_APP_PASS,
      // clientId: process.env.CLIENT_ID,
      // clientSecret: process.env.CLIENT_SECRET,
      // refreshToken: process.env.REFRESH_TOKEN,
    },

    tls: {
      rejectUnauthorized: false,
    },
    
  
  });

  const mailOptions = {
    from: `${req.body.email}`,
    to: 'portfoliocontacts@gmail.com',
    subject: `${req.body.name}`,
    text: `${req.body.message}`,
  };


  transporter.sendMail(mailOptions, (err, respond) => {
    console.log(respond)
    if (err) {
      // transporter.close();
      console.log('ERROR', err);
      
      // return res.json({
      //   status: "error",
      //   msg: "Email sending failed"
      // });
    } else {
      // transporter.close();
      console.log('Email Sent', respond);
      // return res.json({
      //   status: 'ok',
      //   msg: "Email sent"
      // })
    }
  });

  res.status(202).send(res.data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
