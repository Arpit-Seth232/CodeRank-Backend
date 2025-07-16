import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { schema } from '../../../schema/index';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { OtpService } from './utils.service';

@Injectable()
export class MicroserviceAuthService {
  constructor(
    @Inject('DRIZZLE_CLIENT')
    private readonly db: NodePgDatabase<typeof schema>,
    private readonly otpService: OtpService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async sendOtp(data: { email: string }) {
    try {
      const { email } = data;
      await this.otpService.sendOtpEmail(email);
      return { isSuccess: true, message: 'OTP sent successfully' };
    } catch (err: unknown) {
      console.error('Error sending OTP:', (err as Error)?.message);
      throw new InternalServerErrorException('Failed to send OTP');
    }
  }
}
