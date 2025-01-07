import { Module } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorResolver } from './visitor.resolver';

@Module({
  providers: [VisitorResolver, VisitorService],
})
export class VisitorModule {}
