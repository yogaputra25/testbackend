import { Module } from '@nestjs/common';
import { CheklistService } from 'src/cheklist/cheklist.service';
import { CheklistItem } from './entity/cheklistitem.entity';
import { JwtStrategy } from 'src/strategies/jwt-strategy';
import { RefreshJwtStrategy } from 'src/strategies/refreshToken.strategy';
import { CheklistitemService } from './cheklistitem.service';
import { CheklistitemController } from './cheklistitem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CheklistItem])],
  providers: [CheklistitemService, JwtStrategy, RefreshJwtStrategy],
  controllers: [CheklistitemController],
})
export class CheklistitemModule {}
