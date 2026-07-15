import { IPost } from './interfaces/IPost';
import { GOLANG } from './presentationals/Tags';

export const GoLangDocker: IPost = {
    title: 'GoLang + Docker 개발환경 만들기 (Hot Reload, Apple Silicon)',
    path: 'GoLangDocker',
    contents: `
> 최초 작성: 2021년 03월 14일 · 최종 갱신: 2026년 07월 15일
> M1 Preview 시절 내용을 현행화하고, 유지보수가 중단된 reflex 대신 air 기준으로 갱신했다. (구버전 방법은 글 하단에 보존)

Go 개발환경을 Docker 로 구성하고, 코드 저장 시 자동으로 재실행되는 **Hot Reload** 까지 붙여보자.

참고로 이 글을 처음 쓴 2021년에는 Apple Silicon(M1) 용 Docker 가 Preview 버전이었지만,
지금은 [Docker Desktop](https://www.docker.com/products/docker-desktop/) 이 Apple Silicon 을 정식 지원한 지 오래라 그냥 설치하면 된다.

### Step 1. Dockerfile 생성

Hot Reload 를 위해 [air](https://github.com/air-verse/air) 를 이용한다.
(예전에 쓰던 reflex 는 유지보수가 중단되어, 지금은 air 가 사실상 표준이다)

\`\`\`
# Dockerfile

FROM golang:1.24-alpine

WORKDIR /app

RUN go install github.com/air-verse/air@latest

COPY go.mod ./
RUN go mod download

COPY . .

EXPOSE 9999
CMD ["air"]
\`\`\`

여기서 삽질 잠깐했는데, alpine 버전으로 하지 않아서 apk 명령어를 못찾던 일.. 기초지만 늦게 배웁니다.
alpine 은 경량 linux 환경을 위한 것. (air 설치는 go install 로 하기 때문에 이제 git/apk 설치도 필요 없다)

### Step 2. air 설정 파일

프로젝트 루트에 **.air.toml** 을 만들어준다. 로컬에 air 가 설치되어 있다면 \`air init\` 으로 생성해도 된다.

\`\`\`
# .air.toml
[build]
cmd = "go build -o ./tmp/main ."
bin = "tmp/main"
include_ext = ["go", "mod"]
\`\`\`

### Step 3. 빌드 후 실행

\`\`\`
$ docker build --tag golang-docker-tutorial:test .
$ docker run -p 9999:9999 -v $(pwd):/app golang-docker-tutorial:test
\`\`\`

볼륨 마운트(-v) 덕분에 로컬에서 코드를 수정하면 컨테이너 안의 air 가 감지해서 자동으로 다시 빌드/실행해준다.

---

### 구버전 방법 (2021년 작성 당시, reflex 기준)

기록용으로 남겨둔다. 당시에는 reflex 로 Hot Reload 를 구성했고, \`go get\` 으로 바이너리를 설치하던 시절이었다.
(Go 1.17 부터 바이너리 설치는 \`go install\` 로 바뀌었다)

\`\`\`
# Dockerfile

FROM golang:1.16-alpine

WORKDIR /app
COPY . .

RUN apk update && \\
    apk add git && \\
    go get github.com/cespare/reflex

EXPOSE 9999
CMD ["reflex", "-c", "reflex.conf"]
\`\`\`

\`\`\`
# reflex.conf
-r '(\\.go$|go\\.mod)' -s go run main.go
\`\`\`

좋은 포스팅이었던 [원글](https://blog.puppyloper.com/menus/Golang/articles/Golang과%20docker를%20이용한%20개발환경%20만들기%20(feat.%20hot%20reload))을 링크하며 마무리`,
    listContents: `Docker로 Go(Golang) 개발환경 구축하기. air를 이용한 Hot Reload 설정, Dockerfile 작성, Apple Silicon(M1) 지원 현황까지 최신 기준으로 정리했다.`,
    datetime: '2021년 03월 14일 15시 11분',
    updatedDatetime: '2026년 07월 15일 15시 00분',
    tags: [GOLANG],
    keywords: ['golang', 'docker', 'go docker 개발환경', 'hot reload', 'air', 'reflex', 'Dockerfile', 'apple silicon', 'M1'],
};
