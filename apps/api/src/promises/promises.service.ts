import { Injectable } from '@nestjs/common';
import { CreatePromiseDto } from './dto/create-promise.dto';
import { UpdatePromiseDto } from './dto/update-promise.dto';

@Injectable()
export class PromisesService {
  create(createPromiseDto: CreatePromiseDto) {
    return 'This action adds a new promise';
  }

  findAll() {
    return `This action returns all promises`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promise`;
  }

  update(id: number, updatePromiseDto: UpdatePromiseDto) {
    return `This action updates a #${id} promise`;
  }

  remove(id: number) {
    return `This action removes a #${id} promise`;
  }
}
