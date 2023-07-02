import { IPost } from './interfaces/IPost';
import { REACT } from './presentationals/Tags';

export const ReactTesting: IPost = {
    title: 'React Page Render Test With Mock',
    path: 'ReactTesting',
    listContents: `이전 포스팅에서 Mock에 대해서 알아보았다. React 에서 활용하는 법에 대해서 알아보자`,
    datetime: '2021년 09월 05일 15시 23분',
    tags: [REACT],
    contents: `
## 컴포넌트/페이지 Testing

프론트엔드쪽 작업을 할때에 접하게 되는 것 중에 [@testing-library](https://testing-library.com) 라는 것이 있다.

오늘은 프론트엔드 테스팅을 할 때 페이지 렌더 테스트 하는 방법에 대해서 알아보려고 한다.

필자는 React (w/ Typescript) 로 진행하였다.

---

## 테스팅환경 개요

_**<App />**_ 컴포넌트를 테스트할 예정이고,

해당 컴포넌트가 하는 일은 로그인 상태에 따라서 렌더링할 라우터를 결정한다.

간단한 코드 샘플을 보자

\`\`\`
export const App = () => {
  return isLoggedInVar ? <LoggedInRouter /> : <LoggedOutRouter />
}
\`\`\`

위와 같이 렌더링을 하는데, 내가 테스트 할 것은 _**isLoggedInVar**_ 에 따라서 분류가 잘 되나 만하고 싶다.

저 라우터들 안에서 지지고 볶고 하는 것은 의미가 없다.

그러려면 저 라우터들을 Mock 해야 한다.

[Mock 이 무엇인지 궁금하다면](https://shinyeonghyeon.co.kr/posts/MockTest)

## Mock

우리가 Mock 해야할 것 중 하나만 해보고자 한다, **_LoggedOutRouter_** 를 진행해보자.

그렇다면, import 하는 LoggedOutRouter 를 우리가 원하는 형태로 변경해야 한다.

특정 디렉토리에 있는 것을 우리가 원하는 간단한 형태로 해야 단위 테스트가 편하다.

아래 코드처럼 진행하면 된다 !

\`\`\`
import React from "react";
import { render } from "@testing-library/react";
import App from "../app";

jest.mock("../../routers/logged-out-router", () => {
  return {
    LoggedOutRouter: () => <span>logged-out</span>
  }
});

describe("<App />", () => {
  it("renders OK", () => {
    render(<App />);
    
    /* 이후 테스트 생략 */
  });
});
\`\`\`

이러면 _**<App />**_ 을 render 할 때, 그 안의 동작들로 인해 오류가 날 일도 없고, App Render 테스트 자체에 집중할 수 있게 된다.
`,
};

