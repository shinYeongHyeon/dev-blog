import { IPost } from './interfaces/IPost';
import { ETC, REACT } from './presentationals/Tags';

export const Cypress: IPost = {
    title: 'Cypress 사용해서 E2E Test 하기',
    path: 'Cypress',
    listContents: `오늘은 Cypress 를 이용하여 E2E 테스트를 해보고자 한다`,
    datetime: '2021년 09월 22일 23시 25분',
    tags: [REACT, ETC],
    contents: `
오늘은 Cypress 를 이용하여 E2E 테스트를 해보고자 한다

## 1. [cypress](https://www.cypress.io)

Cypress 란, 간단히 설명해서 프론트엔드에서 E2E 테스트를 할수 있게 도와주는 것이다.

[이 영상처럼](https://play-tv.kakao.com/embed/player/cliplink/422524901?service=daum_tistory)

일단 내가 해본 환경은 React + typescript 환경이다.

## 2. cypress 설치 및 환경설정

\`\`\`
npm install cypress
\`\`\`

그러고 나면 cypress 폴더가 생길텐데 그 아래에 나는 typescript 로 진행을 하니, **tsconfig.json** 를 생성해준다.

\`\`\`
{
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "../node_modules",
    "types": [
      "cypress"
    ],
    "outDir": "#"
  },
  "include": [
    "./**/*.*"
  ]
}
\`\`\`

그 다음 cypress 를 실행한다.

\`\`\`
npx cypress open
\`\`\`

그러면 example 테스트들이 보일테고, 그것들을 실행시킬수 있다.

## 3. 테스트 작성

루트에 방문한 후에, 타이틀이 제대로 뜨는지, 즉 루트에 잘 들어가지는 확인하는 것이다.

그 전에 root directory 에 **cypress.json** 을 수정하자, 없다면 생성하자

\`\`\`
{
    "baseUrl": "http://localhost"
}
\`\`\`

루트 디렉토리를 지정해주면 된다.

\`\`\`
describe("Log In", () => {
  it("Should see the login page", () => {
    cy.visit("/")
      .title()
      .should("eq", "It's my title");
  });
});
\`\`\`

쉽게 읽힐 것이다.

**cy** 를 통해 **visit**, 방문을 한다 루트에.

그리고 타이틀은 **should**, **eq** -> 무엇일 것이다. "It's my title"

이런식으로 테스트가 완성이 되고, 저장을 하면 아까 open 해둔 창이 자동으로 리프레쉬 될 것이다.
`,
};

