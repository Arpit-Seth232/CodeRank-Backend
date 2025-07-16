import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OtpDto } from './dto/otp.dto';
import { SignupDto } from './dto/signup.dto';
import { EmailDto } from './dto/email.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class ApiAuthService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  sendOtp(emailOtp: EmailDto) {
    const { email } = emailOtp;
    if (!email) {
      throw new BadRequestException('Email is required for sending OTP');
    }
    return this.authClient.send({ cmd: 'send_otp' }, { data: { email } });
  }

  verifyOtp(otpDto: OtpDto) {
    const { email, otp } = otpDto;
    if (!email || !otp) {
      throw new BadRequestException(
        'Email and OTP are required for verification',
      );
    }
    return this.authClient.send(
      { cmd: 'verify_otp' },
      { data: { email, otp } },
    );
  }

  signup(signupDto: SignupDto) {
    const { fullName, phone, collegeName, password } = signupDto;
    if (!fullName || !phone || !collegeName || !password) {
      throw new BadRequestException(
        'Full name, phone, college name, and password are required for signup',
      );
    }
    return this.authClient.send(
      { cmd: 'signup' },
      { data: { fullName, phone, collegeName, password } },
    );
  }

  login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    if (!email || !password) {
      throw new BadRequestException(
        'Email and password are required for login',
      );
    }
    return this.authClient.send(
      { cmd: 'login' },
      { data: { email, password } },
    );
  }
}
