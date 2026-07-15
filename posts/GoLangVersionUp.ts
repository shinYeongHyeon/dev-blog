import { IPost } from './interfaces/IPost';
import { GOLANG } from './presentationals/Tags';

export const GoLangVersionUp: IPost = {
    title: 'Go(Golang) 버전 업데이트/업그레이드 방법 — Homebrew, 특정 버전, 자동 관리',
    path: 'GoLangVersionUp',
    listContents: `Homebrew로 Go(Golang) 버전을 최신으로 업데이트하는 방법. brew upgrade go부터 특정 버전 설치, Go 1.21+의 툴체인 자동 관리(GOTOOLCHAIN)까지 정리했다.`,
    datetime: '2021년 12월 05일 10시 04분',
    updatedDatetime: '2026년 07월 15일 15시 00분',
    tags: [GOLANG],
    keywords: ['go', 'golang', 'go 버전 업데이트', 'go 버전 업그레이드', 'brew upgrade go', 'homebrew', 'GOTOOLCHAIN', 'go 버전 관리'],
    contents: `
> 최초 작성: 2021년 12월 05일 · 최종 갱신: 2026년 07월 15일
> 특정 버전 설치와 Go 1.21부터 도입된 툴체인 자동 관리를 추가했다.

오늘은 Golang Version을 최신화 하는 법에 대해서 알아보고자 한다.

나는 Homebrew 를 통해 Go 를 설치하였다.

일단 현재 Go Version 을 확인해보자.

\`\`\`
$ go version
go version go1.16 darwin/arm64
\`\`\`

현재 깔려 있는 것은 1.16 Version 이다. (작성 당시 기준. 최신 버전은 [go.dev/dl](https://go.dev/dl/) 에서 확인할 수 있다)

그렇다면 brew 가 알고 있는 최신 버전은 몇일까?

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/64f92b28-5197-489e-b165-e8ee74c198c9)

\`brew info go\` 명령어를 통해 확인할 수 있다.

## 1. Homebrew 로 최신 버전 업그레이드

brew 를 최신버전으로 update 해주고, upgrade go 를 해주면 된다.

\`\`\`
$ brew update    # 시간이 많이 소요될 수 있음
$ brew upgrade go
\`\`\`

최종 확인!

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/eb34a246-1dc9-4917-87a1-c7c3c8b7fac1)

## 2. 특정 버전이 필요하다면

프로젝트 때문에 특정 메이저 버전에 머물러야 한다면, 버전이 박힌 formula 를 설치하면 된다.

\`\`\`
$ brew install go@1.24
\`\`\`

여러 버전을 병행해서 써야 한다면 Go 공식 방법도 있다.
아래처럼 하면 \`go1.24.4\` 라는 별도 명령어로 해당 버전을 쓸 수 있다.

\`\`\`
$ go install golang.org/dl/go1.24.4@latest
$ go1.24.4 download
$ go1.24.4 version
\`\`\`

## 3. Go 1.21+ 라면: 사실 자동으로 관리된다

Go 1.21 부터는 **툴체인 자동 관리(GOTOOLCHAIN)** 가 도입됐다.
프로젝트의 **go.mod** 에 적힌 \`go\` / \`toolchain\` 버전이 로컬에 설치된 것보다 높으면,
빌드 시점에 필요한 툴체인을 알아서 내려받아 사용한다.

\`\`\`
// go.mod
go 1.24

toolchain go1.24.4
\`\`\`

그래서 Go 1.21 이후로는 "버전이 낮아서 빌드가 안 되는" 상황 자체가 드물어졌다.
다만 로컬 기본 버전을 최신으로 유지하고 싶다면 위의 brew upgrade 를 주기적으로 해주면 된다.
`
};
