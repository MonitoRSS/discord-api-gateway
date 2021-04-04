import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

describe('AppController (e2e)', () => {
  let app: NestFastifyApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  describe('mutation createMessage', () => {
    it('it returns 200 on success', async () => {
      const message = {
        content: '1',
      };
      const query = `
      mutation($createMessageVar: CreateMessageInput!) {
        createMessage(createMessageInput: $createMessageVar) {
          content
        }
      }
    `;
      const variables = {
        createMessageVar: message,
      };
      const res = await app.inject({
        method: 'POST',
        url: '/graphql',
        payload: {
          operationName: null,
          query,
          variables,
        },
      });
      expect(res.statusCode).toEqual(200);
    });
  });
});
