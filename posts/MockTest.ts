import { IPost } from './interfaces/IPost';
import { ETC } from './presentationals/Tags';

export const MockTest: IPost = {
    title: 'Testing - Mock ??',
    path: 'MockTest',
    listContents: `요새 테스트, 더 나아가 TDD 는 개발자의 필수 덕목처럼 여겨지고 있고,
그에 따른 강의가 나오거나 채용조건에 필수로 분류하는 곳이 많아지고 있다`,
    datetime: '2021년 09월 05일 15시 17분',
    tags: [ETC],
    contents: `
## 테스트

요새 테스트, 더 나아가 TDD 는 개발자의 필수 덕목처럼 여겨지고 있고,

그에 따른 강의가 나오거나 채용조건에 필수로 분류하는 곳이 많아지고 있다.

테스트를 왜 해야하는지에 대해서는 나중에 다뤄보도록 하고

오늘은 테스트를 진행하다가 보면 만나게 될 **Mock** 에 대해서 알아보자.

---

## Mock

구글 번역기에 돌려보면 "모조품" 이라고 해석이 된다. 테스트에서도 동일하다

실제 객체를 만들기엔 테스트하려는 것의 본질을 해치거나

커플링이 너무 많이 돼 구현이 어려운 경우,

데이터베이스 연동이 필요 한 경우,

가짜를 만들어 사용해야 하는데 이것을 **Mock**이라 합니다.

## 간단한 예제

\`\`\`
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true
\`\`\`

_**jest.fn()**_ 을 통해서 mock 을 만들어 보고 찍으면 아무것도 나오지 않는다.

mock, 즉 가짜에 아무것도 역할을 주지 않았기 때문이다.

그런데 _**mockReturnValueOnce**_ / _**mockReturnValue**_ 를 이용해서

"(몇번) 무엇을 반환할것이다" 라고 역할을 지정해주니

그에 맞게 동작하는 것을 확인할 수 있다.
`,
};
