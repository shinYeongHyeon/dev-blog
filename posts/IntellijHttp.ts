import { IPost } from './interfaces/IPost';
import { ETC } from './presentationals/Tags';

export const IntellijHttp: IPost = {
    title: '[IntelliJ 제품군] API호출하는 Postman, Insomnia 를 대체하는 방법',
    path: 'IntellijHttp',
    listContents: `백엔드 개발을 하건, 프론트 개발을 하건 API 호출을 개발과는 뗄 수가 없다.`,
    datetime: '2021년 08월 04일 19시 48분',
    tags: [ETC],
    contents: `
백엔드 개발을 하건, 프론트 개발을 하건 API 호출을 개발과는 뗄 수가 없다.

그러다보면 자연스레 API 를 호출해볼 수 있는 툴을 찾거나 하는데 주로 거론 되는 것이 _Postman과 Insomnia_ 다.

그런데 툴을 따로 사용하다보면, 귀찮을 때가 있고 특히 회사에서 사용하는 경우는 이것을 위해 비용까지 지불하거나 공유가 어려운점이 있다.

그런데 IntelliJ 제품군에서 API 테스트가 사용이 가능하고, 코드로 관리까지 된다면 어떨까 ?

> IntelliJ 에서 API 개발에 사용할 수 있는 **.http** 에 대해서 알아보자  
>   

## 1. .http 파일 생성
새로운 파일을 생성을 하려하면 아래에 **HTTP Request** 라는 형태의 파일이 존재한다.

없다면 확장자를 **.http** 로 생성하면 된다.

## 2. 가장 기본적인 GET 호출

파일의 형태는 아래와 같다.

\`\`\`
### ROOT
GET http://localhost:4000
\`\`\`

\\### 을 기재해주고 그 다음에 설명이던 제목을 써준다. _\\### 으로 API 를 구분한다_

그리고 밑에 어떤 **HTTP Method (GET, POST ...)** 를 활용하지 적어주고 주소를 그 뒤에 적어준다.

그러고 나서 (Mac기준) **Option + Enter** 를 누르면 실행이 된다 !

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/53343526-8eae-431e-a482-caf4d8f4990d)

실행을 하고 나면, 짜잔..

아래와 같이 실행결과가 나온다 !

![R1280x0-52](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/aab6b930-29af-400d-8ccf-8e841cad17f8)

## 3. POST 호출

Body 를 포함하는 POST 호출 예제를 보자.

\`\`\`
### POST Blocks
POST http://localhost:4000/blocks

{
    "message": "Data for my block"
}
\`\`\`

같은 파일내에 위와 같이 작성해준다.

Body에 넣을 데이터는 공백 한줄을 준다음에 넣어주면 된다.

너무 쉽다. 똑같이 결과를 보자

![R1280x0-53](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/17dd09d7-dd26-4dc4-bfc9-3d491a406c98)

잘 된다..

---

그렇다면 무엇이 장점인가 ?내가 생각하는 장점은 아래와 같다.

> 1. 코드와 API 테스트를 같이 관리할 수 있다.  
> 2. 전체적인 관리가 가능해진다  
> 3. API 를 실제로 사용해볼 수 있으므로, 설계엔 문제가 없는지 잘못된 점은 없는지 확인이 가능하다.
`,
};
