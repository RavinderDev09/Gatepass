import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VisitorService } from './visitor.service';

@Resolver('Visitor')
export class VisitorResolver {
  constructor(private readonly visitorService: VisitorService) {}

  @Mutation('createVisitor')
  create(@Args('createVisitorInput') createVisitorInput: any) {
    return this.visitorService.create(createVisitorInput);
  }

  @Query('visitors')
  findAll() {
    return this.visitorService.findAll();
  }

  @Query('visitor')
  findOne(@Args('id') id: number) {
    return this.visitorService.findOne(id);
  }

  @Mutation('updateVisitor')
  update(@Args('updateVisitorInput') updateVisitorInput: any) {
    return this.visitorService.update(updateVisitorInput.id, updateVisitorInput);
  }

  @Mutation('removeVisitor')
  remove(@Args('id') id: number) {
    return this.visitorService.remove(id);
  }
}
