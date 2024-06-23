import * as nodemailer from 'nodemailer';
const ORIGIN = 'http://localhost:3000';
export class Email {
  email: string;
  token: string;
  constructor({ email, token }) {
    this.email = email;
    this.token = token;
  }
  async sendEmail() {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: 'buiduclongit@gmail.com',
        pass: 'krkc mgle yvrf xtrb',
      },
    });

    return await transporter.sendMail({
      from: 'buiduclongit@gmail.com', // sender address
      to: this.email, // list of receivers
      subject: 'Email Confirmation ✅', // Subject line
      html: `
            <h3>G-Weather Forecast ✅</h3>
            <p>Welcome!</p>
            <p>We have received the email confirmation request for subscription <a href="${ORIGIN}/confirm/${this.token}">Click Here</a> to confirm the email</p>
            <p>OR <a href="${ORIGIN}/unsubscribe/${this.token}">Unsubscribe</a>.</p>`, // html body
    });
  }
}
