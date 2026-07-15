import { IPost } from './interfaces/IPost';
import { GOLANG } from './presentationals/Tags';

export const GoLangFullTest: IPost = {
    title: 'GoLang 테스트 전체 돌리기',
    path: 'GoLangFullTest',
    listContents: `go test 명령어는 현재 디렉토리의 테스트만 실행하고 하위 디렉토리는 확인하지 않는다. go test ./... 명령어로 GoLang 프로젝트 전체 테스트를 한 번에 돌리는 방법을 알아본다.`,
    datetime: '2021년 07월 22일 01시 18분',
    tags: [GOLANG],
    keywords: ['go', 'golang', 'go test', '전체 테스트', '테스트 실행', '하위 디렉토리', 'golang 테스트'],
    contents: `
GoLang 에서 테스트를 돌리기 위해서는 **go test** 를 쓰면 된다.  
그런데, 해당 명령어는 디렉토리 안에 있는 것만 확인한다.  
하위 디렉토리는 확인을 하지 않는다.
프로젝트 안에 테스트파일이 있어도 되지가 않는다.

그렇다면 전체로 테스트를 돌리기 위해서는 어떻게 해야 할까 ?

\`\`\`
go test ./...
\`\`\`

위 명령어만 실행해주면 간단하게 전체 테스트가 가능해진다.`
};
