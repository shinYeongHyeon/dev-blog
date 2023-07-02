import { IPost } from './interfaces/IPost';
import { DATABASE, JAVASCRIPT, POSTGRE } from './presentationals/Tags';

export const PostgreSQLOldPostmasterError: IPost = {
    title: 'Postgres The data directory contains an old postmaster.pid file error',
    path: 'PostgreSQLOldPostmasterError',
    contents: `
Postgres 를 사용을 하고 있는데, 업데이트가 되면서 인지 실행이 되지 않는 오류가 발생했다.

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/1f1d906d-cb99-4d6f-ad8b-6da28349bae2)

오래된 postmaster.pid 가 이미 실행중이다, 죽여달라인데, 좀 알아서 해주면 안되나.. 하면서 서치를 해보았고, 자주 있는 일이 아니기 때문에 프로세스를 외울수가 없을 것 같아 적어두기로 한다.

**13버전 기준 (Mac)**

\`\`\`
// 스크롤 & 복사편의성

$ cd ~/Library/Application\\ Support/Postgres/var-13

// 스크롤 & 복사편의성
\`\`\`

만약 버전이 다르다면 맨 뒤의 var-13 을 맞게 변경하면 될 것 같다.

해당 디렉토리로 간 뒤에

\`\`\`
// 스크롤 & 복사편의성

$ rm -f postmaster.pid

// 스크롤 & 복사편의성
\`\`\`

위 명령어를 입력 후 다시 서버를 시작해주면 정상적으로 시작이 된다 !

[참고 아티클](https://medium.com/@rimsovankiry/the-data-directory-contains-an-unreadable-postmaster-pid-file-on-postgresql-12-mac-os-54775a641160)`,
    listContents: '오래된 postmaster.pid 가 이미 실행중이다, 죽여달라...는 에러에 대해서 알아보자',
    datetime: '2021년 02월 18일 23시 01분',
    tags: [POSTGRE, DATABASE],
};
