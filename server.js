const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact/send', (req, res) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',

    auth: {
      user: process.env.REACT_APP_USER,
      pass: process.env.REACT_APP_PASS,
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
    if (err) {
      transporter.close();
      console.log('ERROR', err);
  
    } else {
      transporter.close();
      console.log('Email Sent', respond);

    }
  });

  res.status(202).send(res.data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
