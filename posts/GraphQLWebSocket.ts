import { IPost } from './interfaces/IPost';
import { GRAPHQL, NESTJS } from './presentationals/Tags';

export const GraphQLWebSocket: IPost = {
    title: 'Websocket, GraphQL - PubSub',
    path: 'GraphQLWebSocket',
    contents: `
Graphql 은 기본적으로 Http 통신이지만, WebSocket 도 가능한 방법이 있다.  
**PubSub** 을 이용하면 되는데, 이 것을 NestJS에서 글로벌 하게 사용 하는 법을 알아보자.  

기본적인 사용법은 문서를 따라하면 쉽게 가능하다.  
PubSub는 글로벌하게 사용하는 것이 거의 필수적인데, WebSocket 이다 보니 여러개를 띄우면 안되기 때문이다. (listening -> publish)  
\`\`\`typescript
import { PubSub } from 'graphql-subscriptions';
import { Global, Module } from '@nestjs/common';
import { PUB_SUB } from './common.constants';

const pubSub = new PubSub();

@Global()
@Module({
  providers: [
    {
      provide: PUB_SUB,
      useValue: pubSub,
    },
  ],
  exports: [PUB_SUB],
}) export class CommonModule {}
\`\`\`

먼저 Global 용 Module 을 만들어주고, providers 와 exports 로 pubSub 를 export 해준다.

\`\`\`typescript
@Resolver(() => Example)
export class ExampleResolver {
  constructor(
    @Inject(PUB_SUB)
    private readonly pubSub: PubSub,
  ) {}
  
  @Mutation(() => Boolean)
  mutationReady() {
    this.pubSub.publish('connect1', { ready: 'Your func is ready.' });
    return true;
  }

  @Subscription(() => String)
  ready() {
    return this.pubSub.asyncIterator('connect1')
  }
}
\`\`\`
그 뒤에 사용처에서 **Inject Decorator** 를 활용해서 import 해주고, 사용하면 끝!`,
    listContents: `NestJS 에서 GraphQL을 그리고 Websocket으로 사용해보자`,
    datetime: '2021년 01월 31일 01시 08분',
    tags: [NESTJS, GRAPHQL],
};
