import { Module } from '@nestjs/common';
import { VisitorEntryService } from './visitor-entry.service';
import { VisitorEntryResolver } from './visitor-entry.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { VisitorEntry } from './entities/visitor-entry.entity';
import { VisitorEntrySchema } from 'src/visitor/entities/visitor.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: VisitorEntry.name, schema: VisitorEntrySchema }]),
  ],
  providers: [VisitorEntryResolver, VisitorEntryService],
})
export class VisitorEntryModule {}
