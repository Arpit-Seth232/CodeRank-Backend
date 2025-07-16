import { IsPhoneNumber, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsString({ message: 'Full name must be a string' })
  fullName: string;

  @IsString({ message: 'Phone number must be a string' })
  @MinLength(12, {
    message: 'Phone number must be at least 12 characters long',
  })
  @IsPhoneNumber(undefined, {
    message: 'Invalid phone number format',
  })
  phone: string;

  @IsString({ message: 'College name must be a string' })
  collegeName: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
