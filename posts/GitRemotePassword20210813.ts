import { IPost } from './interfaces/IPost';
import { GIT } from './presentationals/Tags';

export const GitRemotePassword20210813: IPost = {
    title: 'Git 오류 해결: remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.',
    path: 'GitRemotePassword20210813',
    listContents: `GitHub push 시 발생하는 "Support for password authentication was removed" 오류 해결법. GitHub CLI, Personal Access Token(PAT), SSH 세 가지 방법을 최신 기준으로 정리했다.`,
    datetime: '2021년 08월 14일 22시 47분',
    updatedDatetime: '2026년 07월 15일 15시 00분',
    tags: [GIT],
    keywords: ['git', 'github', 'password authentication was removed', 'personal access token', 'PAT', 'fine-grained token', 'gh auth login', 'SSH', '깃허브 인증 오류'],
    contents: `
> 최초 작성: 2021년 08월 14일 · 최종 갱신: 2026년 07월 15일
> GitHub CLI / Fine-grained PAT / SSH 방식을 추가하고 최신 화면 기준으로 갱신했다.

GitHub 에 푸쉬를 하려고 하는데, 아래와 같이 오류가 뜬다.

> remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
> remote: Please see [https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/) for more information.

2021년 8월 13일부터 GitHub 이 계정 비밀번호를 이용한 Git 인증을 완전히 막았기 때문에 발생하는 오류다.
비밀번호 대신 아래 세 가지 방법 중 하나로 인증하면 해결된다.

1. **GitHub CLI** — 가장 간단, 추천
2. **Personal Access Token (PAT)** — 비밀번호 자리에 토큰 사용
3. **SSH 키** — 한 번 설정하면 토큰 만료 걱정 없음

## 1. GitHub CLI 로 해결 (추천)

가장 간단한 방법이다. GitHub CLI 를 설치하고 로그인 한 번이면 끝난다.

\`\`\`
brew install gh   # macOS (Windows: winget install GitHub.cli)
gh auth login
\`\`\`

\`gh auth login\` 실행 후 **GitHub.com → HTTPS → Login with a web browser** 를 선택하고,
터미널에 표시되는 코드를 브라우저에 입력하면 인증이 완료된다.
이후 git push/pull 은 별도 설정 없이 그대로 동작한다.

## 2. Personal Access Token (PAT) 발급

브라우저 로그인이 어려운 환경(서버, CI 등)이라면 토큰을 직접 발급한다.

1. GitHub 우측 상단 프로필 → **Settings → Developer settings → Personal access tokens → Fine-grained tokens** 에서 **Generate new token** 클릭
2. 토큰 이름과 만료 기간을 정하고, **Repository access** 는 필요한 저장소만 선택
3. **Permissions → Repository permissions → Contents: Read and write** 만 부여하면 push 가능하다
4. push 시 비밀번호 자리에 발급받은 토큰을 입력하면 끝

> 구버전(classic token)에서는 "권한을 모르겠으면 전부 체크"하는 식으로 안내했지만,
> 지금은 필요한 저장소·권한만 부여하는 fine-grained token 이 권장 방식이다.

### 이미 저장된 비밀번호 갱신하기 (macOS 키체인)

예전에 비밀번호를 저장해둔 경우, 저장된 값을 토큰으로 바꿔줘야 한다.
커맨드 + 스페이스를 누르고 **키체인 접근** 에 들어가자.

![R1280x0-61](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/04c5d216-3978-4e7b-bc65-9692d89dd743)

github 을 검색 후 더블 클릭 해준다.

![R1280x0-62](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/45274838-af75-4866-bae4-8b56624b8afc)
![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/6bb15804-0229-4cfd-a316-f5fa54ff0ca9)

**암호 보기** 클릭 후 기존 암호를 발급받은 토큰으로 변경해주면 된다.

Windows 는 **자격 증명 관리자(Credential Manager)** 에서 \`git:https://github.com\` 항목을,
Linux 는 \`~/.git-credentials\` 파일을 같은 방식으로 갱신하면 된다.

## 3. SSH 키로 전환

토큰 만료 관리가 귀찮다면 SSH 로 전환하는 것도 좋다.

\`\`\`
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
\`\`\`

출력된 공개키를 GitHub **Settings → SSH and GPG keys → New SSH key** 에 등록하고,
저장소 remote 를 SSH 주소로 바꿔주면 된다.

\`\`\`
git remote set-url origin git@github.com:{계정명}/{저장소명}.git
\`\`\`
`,
};
