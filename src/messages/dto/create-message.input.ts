import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMessageInput {
  @Field({ nullable: true, description: 'Text content of the message' })
  content?: string;
}
