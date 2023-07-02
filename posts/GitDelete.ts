import { IPost } from './interfaces/IPost';
import { GIT } from './presentationals/Tags';

export const GitDelete: IPost = {
    title: 'Git 에 잘못올린 .idea 파일 등 지우기',
    path: 'GitDelete',
    listContents: `개발을 하다보면 Git에 레포지토리/프로젝트를 올릴 때 실수로 .idea 파일 등 및 올라가면 안되는 파일을 올리는 경우가 더러 있다.`,
    datetime: '2021년 08월 06일 23시 21분',
    tags: [GIT],
    contents: `
개발을 하다보면 Git에 레포지토리/프로젝트를 올릴 때 실수로 .idea 파일 등 및 올라가면 안되는 파일을 올리는 경우가 ~나는~ 더러 있다.

그럴때마다 지우고싶은 욕구가 뿜뿜하는데, 이를 그냥 지울 수 있는 방법을 소개해보자 한다.

### 1. .gitignore 에 추가하기

파일을 잘못 올린 경우 일단 .gitignore 에 해당되는 파일을 추가 후 커밋을 해준다.

물론, 이래도 파일은 그대로 있다.

.gitignore 는 add/commit/push 전에 적용되는 내용이기에 이미 올려진 내용은 포함되지 않는다.

추가 한 후에 다음 스텝이 필요하다

### 2. 레포지토리 (원격저장소) 파일 지우기 & push

이 스텝이 핵심이다. 아래 명령어로 해당 파일을 지워준다

\`\`\`
$ git rm --cached {file}
\`\`\`

위 명령어를 입력하면 해당되는 원격저장소 파일이 지워진다.

기존에 존재하는 파일이라면 로컬에서도 지워줘야 하는데, 직접 지워도 되고, 위 명령어에서 --cached 를 빼서 실행해도 된다.

그 다음에 push 를 해주면 된다.

예제와 같은 .idea 폴더와 그 하위 를 모두 지워주려면 아래 명령어와 같이 -r 옵션을 주면 된다.

\`\`\`
$ git rm --cached -r .idea/
\`\`\``
};
