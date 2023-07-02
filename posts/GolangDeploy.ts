import { IPost } from './interfaces/IPost';
import { GOLANG } from './presentationals/Tags';

export const GolangDeploy: IPost = {
    title: 'Golang 패키지 배포기',
    path: 'GolangDeploy',
    contents: `
Golang 을 하면서 크롤러를 만들게 되었고, 하다보니 캘린더 관련해서 여러가지 function들이 필요해서 패키지를 직접 만들어 배포해보기로 하였다. 가장 간단하고 빠르게 하는 법으로 해보기로 하였고, 그 후에 추가적으로 테스트를 붙이고 해보았다.

[패키지 사이트](https://pkg.go.dev/github.com/shinYeongHyeon/go-times)

[깃허브](https://github.com/shinYeongHyeon/go-times)

먼저 모듈로 작동해야 하기 때문에 main function 은 만들지 않았다. 해당 파일에 필요한 함수들을 만들고 정식으로 배포하기 위해 go 의 규칙들을 지켜나가면서 만들었다. 예제 소스를 하나 보도록 하자.

![Image](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/15161944-a904-478e-aabd-b0f55efb4bc9)

일단 만들고 있는 것은 math 와 time 에만 의존하기 때문에 딱히 의존성 관리 파일이 필수는 아니지만 미리 만들어 두기로 했다.

go mod 로 진행하였고, 이에 대해서는 나중에 자세히 포스팅하자.

GetDateofFirstMondayOfMonth 는 월의 첫번째 월요일의 "일" 을 구하는 함수이다. 굉장히 간단한 함수이다. 이런 것들이 있는 패키지를 만들고 있다.

만든 후 go build 와 go install 을 실행한뒤, 깃허브에 배포하면 사실 상 끝.

굉장히 간단하게 패키지를 만들었고, 이것을 사용할때는

\`go get -u github.com/shinYeongHyeon/go-times\` 로 받아서 사용하면 된다.

다른 언어에서는 패키지나 모듈을 배포해본적이 없어 이게 상대적으로 편리한건지 잘 모르겠으나, 일단 난 지금 편리했다.
`,
    listContents: `Golang 을 하면서 크롤러를 만들게 되었고, 하다보니 캘린더 관련해서 여러가지 function들이 필요해서 패키지를 직접 만들어 배포해보기로 하였다.`,
    datetime: '2021년 02월 06일 17시 03분',
    tags: [GOLANG],
};
