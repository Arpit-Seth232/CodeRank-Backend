import { Post, Body, Controller } from '@nestjs/common';
import { ApiAuthService } from './api-auth.service';
import { EmailDto } from './dto/email.dto';
import { OtpDto } from './dto/otp.dto';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class ApiAuthController {
  constructor(private readonly authApiService: ApiAuthService) {}

  @Post('send-otp')
  sendOtp(@Body() emailDto: EmailDto) {
    return this.authApiService.sendOtp(emailDto);
  }

  @Post('verify-otp')
  verifyOtp(@Body() otpDto: OtpDto) {
    return this.authApiService.verifyOtp(otpDto);
  }

  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authApiService.signup(signupDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authApiService.login(loginDto);
  }
}
