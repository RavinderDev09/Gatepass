import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VisitorService } from './visitor.service';
import { Visitor } from './entities/visitor.entity';
import { CreateVisitorInput } from './dto/create-visitor.input';
import { UpdateVisitorInput } from './dto/update-visitor.input';

@Resolver(() => Visitor)
export class VisitorResolver {
  constructor(private readonly visitorService: VisitorService) {}

  @Mutation(() => Visitor)
  createVisitor(@Args('createVisitorInput') createVisitorInput: CreateVisitorInput) {
    return this.visitorService.create(createVisitorInput);
  }

  @Query(() => [Visitor])
  findAll() {
    return this.visitorService.findAll();
  }

  @Query(() => Visitor, { name: 'visitor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.visitorService.findOne(id);
  }

  @Mutation(() => Visitor)
  updateVisitor(@Args('updateVisitorInput') updateVisitorInput: UpdateVisitorInput) {
    return this.visitorService.update(updateVisitorInput.id, updateVisitorInput);
  }

  @Mutation(() => Visitor)
  removeVisitor(@Args('id', { type: () => Int }) id: number) {
    return this.visitorService.remove(id);
  }
}
