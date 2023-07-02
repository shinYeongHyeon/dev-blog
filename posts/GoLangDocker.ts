import { IPost } from './interfaces/IPost';
import { GOLANG } from './presentationals/Tags';

export const GoLangDocker: IPost = {
    title: 'GoLang + Docker (w/ MacBook M1)',
    path: 'GoLangDocker',
    contents: `
M1 에서 Docker 가 되지 않았는데, Preview 버전이 나왔다는 소식을 듣고 헐레벌떡 Go 와 Docker 를 테스트 해보기로 !

기존에 포스팅돼있던 글을 참고해서 HotReload 기능 까지...

### Step 1. Preview Download 하기

기존에 도커 설치하던 것과 동일하다. 간간히 버그가 있다고는 하니 언능 정식버전이 나오길 물 떠놓고 기도하자

[Preview Download](https://docs.docker.com/docker-for-mac/apple-m1/)

### Step2. Dockerfile 생성

HotReload 를 하기 위해서 reflex 를 이용한다.

여기서 삽질 잠깐했는데, alpine 버전으로 하지 않아서, apk 명령어를 못찾던 일.. 기초지만 늦게 배웁니다. alpine 은 linux 환경을 위한 것

\`\`\`
#Dockerfile

FROM golang:1.16-alpine

WORKDIR /app
COPY . .

RUN apk update && \\
    apk add git && \\
    go get github.com/cespare/reflex

EXPOSE 9999
CMD ["reflex", "-c", "reflex.conf"]
\`\`\`

### Step3. reflex.conf

Reflex 명령어 실행을 위해 config 파일 생성

\`\`\`
# reflex.conf
-r '(\\.go$|go\\.mod)' -s go run main.go
\`\`\`

### Step4. 빌드 후 실행

\`\`\`
$ docker build --tag golang-docker-tutorial:test .
$ docker run -p 9999:9999 -v $(pwd):/app golang-docker-tutorial:test
\`\`\`

좋은 포스팅이었던 [원글](https://blog.puppyloper.com/menus/Golang/articles/Golang과%20docker를%20이용한%20개발환경%20만들기%20(feat.%20hot%20reload))을 링크하며 마무리`,
    listContents: `M1 에서 Docker 가 되지 않았는데, Preview 버전이 나왔다는 소식을 듣고 헐레벌떡 Go 와 Docker 를 테스트 해보기로 !.`,
    datetime: '2021년 03월 14일 15시 11분',
    tags: [GOLANG],
};
