import { IPost } from './interfaces/IPost';
import { GIT } from './presentationals/Tags';

export const GitHookError: IPost = {
    title: 'githook 실행 오류 해결: hook was ignored because it\'s not set as executable',
    path: 'GitHookError',
    listContents: `git hook 설정 시 발생하는 "The '.git/hooks/pre-commit' hook was ignored because it's not set as executable" 오류 해결법. chmod 실행 권한 부여, husky 사용 시 처리, 팀 공유 시 권한 커밋까지 정리했다.`,
    datetime: '2022년 05월 20일 19시 59분',
    tags: [GIT],
    keywords: ['git hook', 'githook', 'not set as executable', 'hook was ignored', 'pre-commit', 'chmod', 'husky', 'core.hooksPath'],
    contents: `
> 최초 작성: 2022년 05월 20일 · 최종 갱신: 2026년 07월 15일
> 잘못 표기되어 있던 chmod 명령을 바로잡고, husky 사용 시·팀 공유 시 처리법을 추가했다.

githook 을 처음에 설정하다보면 아래와 같은 메시지를 볼 경우가 있다.

\`\`\`
hint: The '.git/hooks/pre-commit' hook was ignored because it's not set as executable.
hint: You can disable this warning with \`git config advice.ignoredHook false\`.
\`\`\`

훅 파일에 **실행 권한이 없어서** git 이 훅을 무시하고 넘어갔다는 뜻이다.
hint 에 나오는 \`advice.ignoredHook false\` 는 경고 메시지만 끄는 것이라 훅은 여전히 동작하지 않는다.
실행 권한을 부여해서 해결하자.

## 1. 실행 권한 부여

메시지에 나온 훅 파일에 실행 권한을 주면 된다.

\`\`\`
chmod +x .git/hooks/pre-commit
\`\`\`

훅이 여러 개라면 한 번에 처리하자.

\`\`\`
chmod +x .git/hooks/*
\`\`\`

## 2. husky 를 쓰고 있다면

husky 는 \`.git/hooks\` 대신 \`.husky\` 디렉토리를 훅 경로(core.hooksPath)로 사용한다.
같은 메시지가 \`.husky/pre-commit\` 경로로 떴다면 그쪽에 권한을 주면 된다.

\`\`\`
chmod +x .husky/*
\`\`\`

## 3. 팀원 모두에게 같은 오류가 난다면

훅 스크립트를 저장소에 커밋해서 공유하는 경우, 파일의 실행 권한도 git 에 기록해줘야
다른 팀원이 clone 받았을 때 같은 오류를 겪지 않는다.

\`\`\`
git update-index --chmod=+x .husky/pre-commit
\`\`\`

> 구버전 글에서는 \`chmod ug+x .git/hooks/\\*\` 로 안내했는데, \`\\*\` 는 글롭이 되지 않아
> 그대로 실행하면 동작하지 않는다. 위처럼 \`*\` 를 써야 한다.
`,
};
