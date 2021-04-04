import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    MessagesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
