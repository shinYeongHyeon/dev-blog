import { IPost } from './interfaces/IPost';
import { GOLANG } from './presentationals/Tags';

export const GoLangVersionUp: IPost = {
    title: 'Golang Version Update/Upgrade',
    path: 'GoLangVersionUp',
    listContents: `오늘은 Golang Version을 최신화 하는 법에 대해서 알아보고자 한다.`,
    datetime: '2021년 12월 05일 10시 04분',
    tags: [GOLANG],
    contents: `
오늘은 Golang Version을 최신화 하는 법에 대해서 알아보고자 한다.

나는 Homebrew 를 통해 Go 를 설치하였다.

일단 현재 Go Version 을 확인해보자.

\`\`\`
$ go version
go version go1.16 darwin/arm64
\`\`\`

현재 깔려 있는 것은 1.16 Version 이다.

그렇다면 최신 버전은 몇일까 ?

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/64f92b28-5197-489e-b165-e8ee74c198c9)

brew info 명령어를 통해 확인하니, 1.17.3 이란다. 하자!

일단 brew 를 최신버전으로 update 해주고, upgrade go 를 해주면 된다.

\`\`\`
$ brew update
// 시간이 많이 소요될 수 있음
$ brew upgrade go
\`\`\`

최종 확인!

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/eb34a246-1dc9-4917-87a1-c7c3c8b7fac1)
`
};
