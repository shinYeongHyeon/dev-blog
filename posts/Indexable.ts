import { IPost } from './IPost';

export const Indexable: IPost = {
    title: 'Indexable',
    path: 'Indexable',
    contents: `  
코드의 실행시점에서만 알 수 있는 Type/Key 들이 있는데, 이를 정의를 하고 싶다,  
~꼼꼼해지려면~

뭐 예를 들어 오브젝트를 받긴 할건데 이 것의 값들이 동적으로 변해야하는 상황 (예를 들면 여러 API 를 통합하는 것이 될 수 있다)  
그럴 때 사용할 수 있는 것이 **Indexable** 이다.  
코드부터 보고 시작하자.

\`\`\`typescript
interface Indexable {
  [key: string]: any;
}
\`\`\`

Index Signature **[]** 로 감싸주면 된다.
\`\`\`typescript
const indexable: Indexable = {
  test1: 1,
  test2: 2,
  test3: 3,
};

Object.keys(indexable).forEach((k) => console.log(indexable[k])); // 1, 2, 3
\`\`\`

해당 문법이 javascript 에서는 그냥 되는거 아니였나 ?  
하지만, typescript 에서는 type 이 괄호 동적 접근을 하려고 하면 오류를 뱉어낸다.  
그렇기 때문에 typescript 에서 동적으로 key 를 받아내려면 위와 같이 사용해야 한다.`,
    listContents: `typescript 사용하면서 가변적인 key 가 필요할 경우가 있다.`,
    datetime: '2021년 01월 30일 14시 40분',
    tags: ['Typescript'],
};
