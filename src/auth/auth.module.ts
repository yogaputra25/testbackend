import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { BcryptService } from 'src/bcrypt/bcrypt.service';

import { LocalStrategy } from 'src/strategies/local-strategy';
import { JwtStrategy } from 'src/strategies/jwt-strategy';
import { RefreshJwtStrategy } from 'src/strategies/refreshToken.strategy';
import { User } from 'src/user/entity/user.entity';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      // secret: 'your-secret-key',
      secret: 'rrrr44554',

      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    BcryptService,
    LocalStrategy,
    JwtStrategy,
    RefreshJwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
