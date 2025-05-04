import nodemailer from 'nodemailer';
import FreezeEnv from './EnvConfig';


export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: 'ghazna.dev@gmail.com',
        pass: FreezeEnv.PASSWORD_SMTP
    }
});



export const sendMail = async (mailOptions) => {

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return {
                success: false,
                message: error.message
            }
        } else {
            console.log('Email sent:', info.response);
            return {
                success: true,
            }
        }
    });

}



// let mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'recipient@example.com',
//     subject: 'Test Email',
//     text: 'Hello! Your SMTP setup is working.'
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });