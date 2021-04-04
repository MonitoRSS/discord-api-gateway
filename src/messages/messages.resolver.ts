import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageInput } from './dto/create-message.input';

@Resolver(() => Message)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Mutation(() => Message)
  createMessage(
    @Args('createMessageInput') createMessageInput: CreateMessageInput,
  ) {
    return this.messagesService.create(createMessageInput);
  }

  @Query(() => [Message], { name: 'messages' })
  findAll() {
    return [];
  }
}
