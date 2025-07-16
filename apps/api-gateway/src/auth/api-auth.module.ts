import { Module } from '@nestjs/common';
import { ApiAuthController } from './api-auth.controller';
import { ApiAuthService } from './api-auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [ApiAuthController],
  providers: [ApiAuthService],
})
export class ApiAuthModule {}
