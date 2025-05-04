import nodemailer from 'nodemailer';
import FreezeEnv from './EnvConfig';


export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
  secure: true,
    auth: {
        user: 'ghazna.dev@gmail.com',
        pass: FreezeEnv.PASSWORD_SMTP
    }
});



export const sendMail = async (mailOptions) => {

    try {
        let obj = {
            success: false,
            message: ""
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email:', error);
                obj.message = error.message
                obj.success = false
            } else {
                console.log('Email sent:', info.response);
                obj.message = info.response
                obj.success = true
            }
        });
        return obj;
    } catch (error) {
        console.log("Error in sending email", error);
        let obj = {
            success: false,
            message: error.message
        }
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