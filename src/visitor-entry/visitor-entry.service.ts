import { Injectable } from '@nestjs/common';
import { CreateVisitorEntryInput, Purpose } from './dto/create-visitor-entry.input';
import { UpdateVisitorEntryInput } from './dto/update-visitor-entry.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VisitorEntry } from './entities/visitor-entry.entity';
import { log } from 'console';

@Injectable()
export class VisitorEntryService {

  @InjectModel(VisitorEntry.name) private visitorEntryModel: Model<VisitorEntry>

  async create(data: CreateVisitorEntryInput) {
    log(data)
    const result = await this.visitorEntryModel.create({
      ...data,
      inDateTime: data.inDateTime || new Date(), 
            outDateTime: new Date(),
          purpose: data.purpose|| Purpose.Other,});
    console.log('result', result );
    return result 
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
