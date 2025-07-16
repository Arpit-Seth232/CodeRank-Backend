import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class OtpService {
  constructor(private configService: ConfigService) {}

  private generateOtp(length: number): string {
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
  }

  async sendOtpEmail(email: string): Promise<string> {
    const otp = this.generateOtp(6);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: this.configService.get<string>('EMAIL_CODERANK'),
        pass: this.configService.get<string>('PASSWORD_CODERANK'),
      },
    });

    const info = await transporter.sendMail({
      from: `"CodeRank Team" <${this.configService.get<string>('EMAIL_CODERANK')}>`,
      to: email,
      subject: 'Verify your email',
      text: `Your verification code is: ${otp}`,
      html: `<b>Your verification code is: ${otp}</b>`,
    });

    console.log('OTP email sent. Message ID:', info.messageId);
    return otp;
  }
}
