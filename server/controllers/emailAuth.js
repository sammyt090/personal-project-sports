require("dotenv").config();
const nodemailer = require("nodemailer");
const {SERVER_EMAIL, SERVER_PASSWORD, FROM_EMAIL} = process.env;

const sendEmail = (req, res) => {
    const {username, first_name} = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: SERVER_EMAIL,
          pass: SERVER_PASSWORD
        }
      });

    let htmlCode = `<!DOCTYPE html>
    <!-- PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> -->
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>SportsConnect</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body style="margin: 0; padding: 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
            <tr>
                <td style="padding: 10px 0 30px 0;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                        <tr>
                            <td align="center" bgcolor="#ffffff" style="padding: 0px 0 0px 0; color: #cccccc; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                                <a href="http://localhost:3000/#/" style="color: #ffffff;">
                                <img src='https://wakefield.apsva.us/wp-content/uploads/sites/37/2019/07/sport-1.jpg'
                                 alt="Plants in pots" width="600" height="200" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td style="color: #617872; font-family: Arial, sans-serif; font-size: 24px;">
                                            <b>Welcome to SportsConnect, ${first_name}!</b>
                                        </td>
                                    </tr>
                                    <tr>
                                            <td style="padding: 20px 0 30px 0; color: #364440; font-family: Arial, sans-serif; font-size: 20px; line-height: 22px;">
                                               
                                            </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td width="260" valign="top">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td>
                                                                    <a href="http://localhost:3000/#/" style="color: #ffffff;">
                                                                    
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 25px 0 0 0; color: #364440; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                                Thank you for joining! We hope you have an awesome experience using our website!
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style="font-size: 0; line-height: 0;" width="20">
                                                        &nbsp;
                                                    </td>
                                                    <td width="260" valign="top">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td> 
                                                                    <a href="http://localhost:3000/#/" style="color: #ffffff;">
                                                                    
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                                    
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                       
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `
    const registerEmail = {
        from: FROM_EMAIL,
        to: username,
        subject: 'Welcome to SportsConnect',
        text: "hello world",
        html: htmlCode
    }
        transporter.sendMail(registerEmail,(err, data) => {
            if (err){
                console.log(err)
                res.status(409).send("Error occured sending email")
            } else {
                console.log('Email sent successfully!')
                console.log(data)
                res.status(200).send("Email sent!")
            }
        })
}
module.exports = {sendEmail}