import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MicroserviceAuthService } from './microservice-auth.service';
import { EmailDto } from 'apps/api-gateway/src/auth/dto/email.dto';
import { SignupDto } from 'apps/api-gateway/src/auth/dto/signup.dto';

@Controller()
export class MicroserviceAuthController {
  constructor(
    private readonly microserviceAuthService: MicroserviceAuthService,
  ) {}
  @MessagePattern({ cmd: 'send_otp' })
  sendOtp(payload: { emailDto: EmailDto }) {
    return this.microserviceAuthService.sendOtp(payload.emailDto);
  }

  @MessagePattern({ cmd: 'verify_otp' })
  verifyOtp(payload: { email: string; otp: string }) {
    return this.microserviceAuthService.verifyOtp(payload.email, payload.otp);
  }

  @MessagePattern({ cmd: 'signup' })
  signup(payload: { signupDto: SignupDto }) {
    return this.microserviceAuthService.signup(payload.signupDto);
  }

  @MessagePattern({ cmd: 'login' })
  login(payload: { email: string; password: string }) {
    return this.microserviceAuthService.login(payload.email, payload.password);
  }
}
