import { IsString } from 'class-validator';

export class OtpDto {
  @IsString({ message: 'Email must be a string' })
  email: string;

  @IsString({ message: 'OTP must be a string' })
  otp: string;
}
