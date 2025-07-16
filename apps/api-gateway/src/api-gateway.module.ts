import { Module } from '@nestjs/common';
import { ApiAuthModule } from './auth/api-auth.module';

@Module({
  imports: [ApiAuthModule],
})
export class ApiGatewayModule {}
