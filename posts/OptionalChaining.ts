import { IPost } from './interfaces/IPost';
import { JAVASCRIPT } from './presentationals/Tags';

export const OptionalChaining: IPost = {
    title: 'Optional Chaining',
    path: 'OptionalChaining',
    contents: `
한 Object 가 많은 Depth 를 가지고 있고, 특정한 데이터를 가져오려면 많은 Depth 를 지나서 가져온다고 가정하자.  
그렇다면, 보통 해당 Depth 들이 존재하는지 체크를 보통 한다.  
그러나 이게 여간 귀찮은 일이 아니다.  

예를 들어 아래와 같은 Object 가 있다고 보자.
\`\`\`typescript
const test = {
  depth1: {
      depth2: {
          depth3: "test"
      }
  }
};
\`\`\`

test 의 depth1 의 depth2 의 depth3 에 접근하려면, 일단 test 있는지, 있다면 그 안에 depth1 이 있는지 ….  
계속 해나가야 한다...

근데 이것을 한번에 아름답게 해결해줄 수 있는 것이 ES2020의 **Optional Chaining** 이다.
있는지 확인하고 싶은 것을 dot(.) 으로 연결하기 전에 **?** 만 붙여주면 끝.
거두절미하고 아래 스크린 샷을 보면 이해 될 것이다.  

![R1280x0-2](https://user-images.githubusercontent.com/74130738/170829274-c2b94d5d-c914-4026-a0ce-3e18ab58b200.png)

단, 데이터가 없는 경우 undefined 로 리턴이 오니 참고할 것!  
###### ~아름다워~  
  
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)`,
    listContents: `깊은 Depth를 가진 객체에 접근할 때마다 존재 여부를 일일이 체크하는 번거로움을 ES2020의 Optional Chaining(?.) 문법으로 간결하게 해결하는 방법을 알아본다.`,
    datetime: '2021년 01월 30일 20시 12분',
    tags: [JAVASCRIPT],
    keywords: ['javascript', '자바스크립트', 'optional chaining', '옵셔널 체이닝', 'ES2020', '객체 접근', 'undefined'],
};
