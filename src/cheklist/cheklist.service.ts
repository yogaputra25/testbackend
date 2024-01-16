import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cheklist } from './entity/cheklist.entity';
import { Repository } from 'typeorm';
import { CheklistDto } from './dto/cheklist.dto';

@Injectable()
export class CheklistService {
  constructor(
    @InjectRepository(Cheklist)
    private cheklistRepository: Repository<Cheklist>,
  ) {}
  async createCheklist(data: CheklistDto) {
    return await this.cheklistRepository.save(data);
  }
  async allData() {
    return await this.cheklistRepository.find();
  }

  async deleteData(data: any) {
    return await this.cheklistRepository.delete(data);
  }
}
