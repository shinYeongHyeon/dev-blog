import { IPost } from './interfaces/IPost';
import { GIT } from './presentationals/Tags';

export const GitHookError: IPost = {
    title: 'githook 실행 오류 (not set as executable)',
    path: 'GitHookError',
    listContents: `githook 을 처음에 설정하다보면 다음과 같은 메시지를 볼 경우가 있다. it's not set as executable.`,
    datetime: '2022년 05월 20일 19시 59분',
    tags: [GIT],
    contents: `
## **gitHook 실행 오류**

githook 을 처음에 설정하다보면 아래와 같은 메시지를 볼 경우가 있다.

\`\`\`
hint: The '.git/hooks/pre-commit' hook was ignored because it's not set as executable.  
hint: You can disable this warning with \`git config advice.ignoredHook false\`.
\`\`\`

실행할 수 없다는 것인데, 이는 권한부여를 해주면 된다.

아래 명령을 입력해주자.

\`\`\`
chmod ug+x .git/hooks/\\*
\`\`\`
`,
};
