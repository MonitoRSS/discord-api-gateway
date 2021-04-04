import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Message {
  @Field({ nullable: true, description: 'Example field (placeholder)' })
  content?: string;
}
