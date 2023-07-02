import { IPost } from './interfaces/IPost';
import { SVELTE_TOUR } from './presentationals/Series';
import { JAVASCRIPT, SVELTE } from './presentationals/Tags';

export const TildeOperator: IPost = {
    title: 'tilde (~) 연산자, double tilde (~~)',
    path: 'TildeOperator',
    contents: `
오늘은 틸드 연산자 (~), Double tilde 에 대해서 알아보고자 한다.

### 1. ~

**~** 는 Bitwise NOT 연산자로 비트연산자이다. NOT 이기 때문에 모든 0 과1 을 뒤집는다.

이에 대해 설명해지면 이야기가 길어지니 중략하고 결과만 얘기하면,

~를 붙이면 **-(n+1)** 이 되게 된다.

![R1280x0-16](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/a5000b0b-58dd-4195-8f98-4386fccf7c08)

이를 제일 잘 활용하는 방법은 -1 에 ~ 를 붙여 0을 만드는 것인데, **indexOf** 에 가장 잘 활용이 된다.

indexOf 는 글자가 포함됐냐를 찾는 함수로 다들 알고있을텐데, 없는 경우에는 -1 를 반환한다.

그래서 여기에 ~ 를 붙이면 0. 즉, **false** 가 되기 때문에 활용이 좋다

\`\`\`
if (!~"Foo".indexOf("find")) {
  // find 가 없는 경우에 BlahBlah
}
\`\`\`

### 2\\. ~~

**~~** 는 **Math.floor()** 과 비슷하지만, 음수에서 조금 다르다. 백문이 불여일견 예제로 보자

\`\`\`
const num1 = 123.1;
const num2 = -1.1;

console.log(Math.floor(num1));
console.log(~~num1);

console.log(Math.floor(num2));
console.log(~~num2);
\`\`\`

위 코드의 실행결과를 첨부하고 이번 포스팅을 마친다.

![R1280x0-17](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/3c10f4fd-8fa8-4add-a871-24668dc4259b)
`,
    listContents: `오늘은 틸드 연산자 (~), Double tilde 에 대해서 알아보고자 한다.`,
    datetime: '2021년 06월 19일 19시 52분',
    tags: [JAVASCRIPT],
};
