import { IPost } from './interfaces/IPost';
import { GIT } from './presentationals/Tags';

export const GitInvalidActiveDeveloper: IPost = {
    title: 'xcrun: error: invalid active developer path 에러해결',
    path: 'GitInvalidActiveDeveloper',
    contents: `
Mac 을 사용하면서 업데이트를 하다보면 왕왕 **git** 명령어가 먹통이 될 때가 있다. 아래의 오류와 함께 ...

\`\`\`
// 스크롤 편의성

xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

// 스크롤 편의성
\`\`\`

매번 할 때마다 검색하기 귀찮아서 포스팅 해보려 한다.

\`\`\`
xcode-select --install
\`\`\`

위 명령어만 입력하게 되면 설치/업데이트를 진행하게 되고, 내 기준 5분정도 시간이 소요됐던 것 같다.

![R1280x0-4](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/904cb41c-631e-4ada-b7dc-fcce3cfe5bfe)

설치가 완료되고 나면 위 사진 처럼 잘 된다
`,
    listContents: `Mac 을 사용하면서 업데이트를 하다보면 왕왕 git 명령어가 먹통이 될 때가 있다.
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun`,
    datetime: '2021년 02월 07일 15시 43분',
    tags: [GIT],
};
