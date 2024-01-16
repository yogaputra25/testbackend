import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cheklist } from 'src/cheklist/entity/cheklist.entity';
import { CheklistItem } from './entity/cheklistitem.entity';
import { Repository } from 'typeorm';
import { CreateItem } from './dto/createitem';

@Injectable()
export class CheklistitemService {
  constructor(
    @InjectRepository(CheklistItem)
    private cheklistRepo: Repository<CheklistItem>,
  ) {}

  async createCheklist(data: CreateItem, param: any) {
    const product = new CheklistItem();
    product.itemName = data.itemName;
    product.cheklist = param;
    console.log(product);
    return await this.cheklistRepo.save(product);
  }
  async allData() {
    return await this.cheklistRepo.find({ relations: { cheklist: true } });
  }
  async findOne(data) {
    console.log(data);
    return await this.cheklistRepo.find({
      relations: { cheklist: true },
      where: { cheklist: { id: data } },
    });
  }

  async finditem(cheklist, item) {
    return await this.cheklistRepo.find({
      relations: { cheklist: true },
      where: {
        id: item,
        cheklist: { id: cheklist },
      },
    });
  }
  async update(cheklist, item, data) {
    this.cheklistRepo.update(item, data);
    const check = await this.cheklistRepo.find({
      relations: { cheklist: true },
      where: {
        id: item,
        cheklist: { id: cheklist },
      },
    });
    return check;
  }

  async delete(cheklist, item, data) {
    this.cheklistRepo.delete(item);
    const check = await this.cheklistRepo.find({
      relations: { cheklist: true },
      where: {
        id: item,
        cheklist: { id: cheklist },
      },
    });
    return check;
  }
}
