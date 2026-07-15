import { IPost } from './interfaces/IPost';
import { GIT } from './presentationals/Tags';

export const GitInvalidActiveDeveloper: IPost = {
    title: 'xcrun: error: invalid active developer path, missing xcrun 에러 해결 (macOS 업데이트 후 git 안될 때)',
    path: 'GitInvalidActiveDeveloper',
    contents: `
> 최초 작성: 2021년 02월 07일 · 최종 갱신: 2026년 07월 15일
> xcode-select --install 만으로 해결되지 않는 경우의 추가 해결법을 정리했다.

Mac 을 사용하면서 macOS 업데이트를 하고 나면 왕왕 **git** 명령어가 먹통이 될 때가 있다. 아래의 오류와 함께.

\`\`\`
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
\`\`\`

macOS 를 업데이트하면 **Command Line Tools 연결이 끊어지면서** 발생하는 오류다.
git 뿐 아니라 make, clang 등 개발 명령어 전반이 같이 먹통이 된다.
매번 할 때마다 검색하기 귀찮아서 포스팅 해보려 한다.

## 1. Command Line Tools 재설치

\`\`\`
xcode-select --install
\`\`\`

위 명령어만 입력하게 되면 설치/업데이트를 진행하게 되고, 내 기준 5분정도 시간이 소요됐던 것 같다.

![R1280x0-4](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/904cb41c-631e-4ada-b7dc-fcce3cfe5bfe)

설치가 완료되고 나면 위 사진 처럼 잘 된다. 대부분은 여기서 끝난다.

## 2. 그래도 안 된다면: 경로 초기화

"already installed" 라고 나오는데도 같은 에러가 계속 뜬다면, 경로만 꼬인 상태다. 초기화해주자.

\`\`\`
sudo xcode-select -r
\`\`\`

Xcode 를 설치해서 쓰고 있다면 아래처럼 Xcode 쪽 경로를 직접 지정해줘도 된다.

\`\`\`
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
\`\`\`

## 3. 최후의 수단: 지우고 재설치

위 방법으로도 안 되면 기존 Command Line Tools 를 지우고 새로 설치한다.

\`\`\`
sudo rm -rf /Library/Developer/CommandLineTools
xcode-select --install
\`\`\`

여기까지 하면 해결되지 않는 경우는 거의 없다.
`,
    listContents: `macOS 업데이트 후 git 실행 시 발생하는 xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools) 오류 해결법. xcode-select --install부터 경로 초기화, 완전 재설치까지 단계별로 정리했다.`,
    datetime: '2021년 02월 07일 15시 43분',
    updatedDatetime: '2026년 07월 15일 15시 00분',
    tags: [GIT],
    keywords: ['xcrun', 'invalid active developer path', 'missing xcrun', 'xcode-select', 'Command Line Tools', 'macOS 업데이트 git 오류', 'git', 'mac'],
};
