import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cheklist } from './entity/cheklist.entity';
import { CheklistService } from './cheklist.service';
import { RefreshJwtStrategy } from 'src/strategies/refreshToken.strategy';
import { JwtStrategy } from 'src/strategies/jwt-strategy';
import { CheklistController } from './cheklist.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cheklist])],
  providers: [CheklistService, JwtStrategy, RefreshJwtStrategy],
  controllers: [CheklistController],
})
export class CheklistModule {}
