import { Injectable } from '@nestjs/common';
import { CreateVisitorEntryInput } from './dto/create-visitor-entry.input';
import { UpdateVisitorEntryInput } from './dto/update-visitor-entry.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VisitorEntry } from './entities/visitor-entry.entity';

@Injectable()
export class VisitorEntryService {

  @InjectModel(VisitorEntry.name) private visitorEntryModel: Model<VisitorEntry>

  create(createVisitorEntryInput: CreateVisitorEntryInput) {
    return this.visitorEntryModel.create(createVisitorEntryInput);
  }

  findAll() {
    return this.visitorEntryModel.find().exec()
  }

  findOne(id: number) {
    return this.visitorEntryModel.findOne({ _id: id }).exec()
  }

  update(id: number, updateVisitorEntryInput: UpdateVisitorEntryInput) {
    return this.visitorEntryModel.findOneAndUpdate({ _id: id }, updateVisitorEntryInput,{new:true}).exec()
  }

  remove(id: number) {
    return this.visitorEntryModel.findOneAndDelete({ _id: id }).exec()
  }
}
