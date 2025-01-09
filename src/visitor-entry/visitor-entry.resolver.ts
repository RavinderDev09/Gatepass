import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VisitorEntryService } from './visitor-entry.service';
import { VisitorEntry } from './entities/visitor-entry.entity';
import { CreateVisitorEntryInput } from './dto/create-visitor-entry.input';
import { UpdateVisitorEntryInput } from './dto/update-visitor-entry.input';

@Resolver(() => VisitorEntry)
export class VisitorEntryResolver {
  constructor(private readonly visitorEntryService: VisitorEntryService) {}

  @Mutation(() => VisitorEntry)
  createVisitorEntry(@Args('createVisitorEntryInput') createVisitorEntryInput: CreateVisitorEntryInput) {
    return this.visitorEntryService.create(createVisitorEntryInput);
  }

  @Query(() => [VisitorEntry], { name: 'visitorEntry' })
  findAll() {
    return this.visitorEntryService.findAll();
  }

  @Query(() => VisitorEntry, { name: 'visitorEntry' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.visitorEntryService.findOne(id);
  }

  @Mutation(() => VisitorEntry)
  updateVisitorEntry(@Args('updateVisitorEntryInput') updateVisitorEntryInput: UpdateVisitorEntryInput) {
    return this.visitorEntryService.update(updateVisitorEntryInput.id, updateVisitorEntryInput);
  }

  @Mutation(() => VisitorEntry)
  removeVisitorEntry(@Args('id', { type: () => Int }) id: number) {
    return this.visitorEntryService.remove(id);
  }
}
