import { Module } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorResolver } from './visitor.resolver';
import { Visitor, VisitorSchema,  } from './entities/visitor.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: Visitor.name, schema: VisitorSchema }]),
  ],
  providers: [VisitorResolver, VisitorService],
})
export class VisitorModule {}
