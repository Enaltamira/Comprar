const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Configure nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Your email
        pass: 'your-email-password' // Your email password
    }
});

// Route to handle email orders
app.post('/order', (req, res) => {
    const { name, email, orderDetails } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com', // Your email
        to: email,
        subject: 'Order Confirmation',
        text: `Hello ${name},\n\nThank you for your order!\nDetails: ${orderDetails}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Order confirmation email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});