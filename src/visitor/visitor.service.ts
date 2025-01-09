import { Injectable } from '@nestjs/common';
import { CreateVisitorInput } from './dto/create-visitor.input';
import { UpdateVisitorInput } from './dto/update-visitor.input';
import { Visitor, VisitorDocument } from './entities/visitor.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class VisitorService {
  
  constructor(
    @InjectModel(Visitor.name) private readonly visitorModel: Model<VisitorDocument>,
  ) {}

  async create(input: Partial<Visitor>): Promise<Visitor> {
    const newVisitor = new this.visitorModel(input);
    return newVisitor.save();
  }

  async findAll(): Promise<Visitor[]> {
    return this.visitorModel.find().exec();
  }



  findOne(id: number) {
    return `This action returns a #${id} visitor`;
  }

  update(id: number, updateVisitorInput: UpdateVisitorInput) {
    return `This action updates a #${id} visitor`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitor`;
  }
}


