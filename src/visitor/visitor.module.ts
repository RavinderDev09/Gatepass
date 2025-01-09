import { Module } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorResolver } from './visitor.resolver';
import { Visitor,  } from './entities/visitor.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { VisitorSchema } from 'src/visitor-entry/entities/visitor-entry.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: Visitor.name, schema: VisitorSchema }]),
  ],
  providers: [VisitorResolver, VisitorService],
})
export class VisitorModule {}
