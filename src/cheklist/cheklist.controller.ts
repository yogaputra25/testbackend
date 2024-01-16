import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CheklistService } from './cheklist.service';
import { CheklistDto } from './dto/cheklist.dto';
import { JwtGuard } from 'src/guards/jwt-auth.guard';

@Controller('cheklist')
export class CheklistController {
  constructor(private cheklistService: CheklistService) {}

  @UseGuards(JwtGuard)
  @Post()
  async createCheklist(@Body() data: CheklistDto) {
    return this.cheklistService.createCheklist(data);
  }
  @UseGuards(JwtGuard)
  @Get()
  async alldata() {
    return this.cheklistService.allData();
  }
  @UseGuards(JwtGuard)
  @Delete('/:id')
  async deletedata(@Param() id: any) {
    return this.cheklistService.deleteData(id);
  }
}
