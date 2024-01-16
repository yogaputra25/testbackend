import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CheklistitemService } from './cheklistitem.service';
import { JwtGuard } from 'src/guards/jwt-auth.guard';
import { CreateItem } from './dto/createitem';

@Controller()
export class CheklistitemController {
  constructor(private chekItemService: CheklistitemService) {}

  @UseGuards(JwtGuard)
  @Post('/:id/item')
  async createCheklist(@Body() data: CreateItem, @Param('id') id: any) {
    console.log(data);
    return this.chekItemService.createCheklist(data, id);
  }
  @UseGuards(JwtGuard)
  @Get('/item')
  async alldata() {
    return this.chekItemService.allData();
  }
  @Get('/checklist/:id/item')
  async findOne(@Param('id') id: any) {
    return this.chekItemService.findOne(id);
  }
  @Get('/checklist/:id/item/:item')
  async finditem(@Param('id') id: any, @Param('item') item: any) {
    return this.chekItemService.finditem(id, item);
  }
  @Put('/checklist/:id/item/:item')
  async update(
    @Param('id') id: any,
    @Param('item') item: any,
    @Body() data: any,
  ) {
    return this.chekItemService.update(id, item, data);
  }
  @Delete('/checklist/:id/item/:item')
  async delete(
    @Param('id') id: any,
    @Param('item') item: any,
    @Body() data: any,
  ) {
    return this.chekItemService.delete(id, item, data);
  }
}
