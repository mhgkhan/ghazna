import nodemailer from 'nodemailer';
import FreezeEnv from './EnvConfig';


export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: FreezeEnv.EMAIL_SMTP,
        pass: FreezeEnv.PASSWORD_SMTP
    }
});



export const sendMail = async (mailOptions) => {

    let obj = {}
    try {

        const sending = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully", sending);
    } catch (error) {
        console.log("Error in sending email", error);
        return obj;
    }
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