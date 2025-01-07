import { Injectable } from '@nestjs/common';

@Injectable()
export class VisitorService {
  create(createVisitorInput: any) {
    return 'This action adds a new visitor';
  }

  findAll() {
    return `This action returns all visitor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitor`;
  }

  update(id: number, updateVisitorInput: any) {
    return `This action updates a #${id} visitor`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitor`;
  }
}
