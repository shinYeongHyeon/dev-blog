import { IPost } from './interfaces/IPost';
import { ETC } from './presentationals/Tags';

export const AndOperator: IPost = {
    title: '그리고 (&&) 연산자에 대하여',
    path: 'AndOperator',
    contents: `
## 그리고 연산자 (이하 &&)

&& 는 조건을 덧붙일 때 보통 사용한다.

그러나 추가적으로 사용될 수 있고, 코드를 짧게 유지할 수 있는 부분이 있어서 알아보고자 한다.

배고프다면 밥을 먹어야 한다.

위의 글을 간단하게 코딩을 해보자 !

#### 1\\. 가장 보편적인 방법

\`\`\`
if (areYouHungry()) {
    eatSomething();
}
\`\`\`

가장 간단하게 구현할 수 있는 방법은 위와 같을 것이다. 

if 조건문을 활용해 조건이 충족됐는지 확인 후, 그에 따른 실행을 하는.

#### 2\\. 삼항연산자를 활용한 방법

\`\`\`
areYouHungry() ? eatSomething() : undefined;
\`\`\`

함수를 이용하는 경우에 나는 잘 활용하지 않는 방법이지만 위와 같이 삼항연산자를 사용할 수도 있다.

#### 3\\. && 를 활용한 방법

포스팅을 하는 **이유**이다.

\`\`\`
areYouHungry() && eatSomething();
\`\`\`

위 코드가 익숙하지 않을 수 있는데, 1, 2와 같다고 보면된다. 앞에 조건이 만족한다면 eatSomething() 이 실행이 된다 !

~끗!~`,
    listContents: `&& 는 조건을 덧붙일 때 보통 사용한다.
그러나 추가적으로 사용될 수 있고, 코드를 짧게 유지할 수 있는 부분이 있어서 알아보고자 한다.`,
    datetime: '2021년 02월 08일 00시 55분',
    tags: [ETC],
};
