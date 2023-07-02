import { IPost } from './interfaces/IPost';
import { DATABASE, JAVASCRIPT, POSTGRE } from './presentationals/Tags';

export const PostgreSQLDuplicateKey: IPost = {
    title: 'pq: duplicate key value violates unique constraint `~_pkey`',
    path: 'PostgreSQLDuplicateKey',
    contents: `
PostgreSQL 데이터베이스를 자주 활용하는 편이 아니다보니, 여러 기본적인 에러들에 자꾸 빠진다,  
\`duplicate key value violates unique constraint '~\\_pkey'\` 뭐 딱보니까 Primary Key 가 문제가 되는 거 같은데, Auto Increment 를 설정안해놓았나 싶었다.

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/53a3ca17-2fcd-4f10-9c10-4a8ae9c370d0)

그런데 Postico 로 확인 해보니, Sequence 로 설정해두면 자동으로 A.I. 설정이 될텐데 왜 그러지 싶어 확인해보니, PostgreSQL 에서는 Sequence Object 로 순번을 관리하는데, 이것을 프로그램으로 넣었다가, 데이터베이스로 직접 넣었다던가 하면 실제 테이블의 값과 Sequecne Object 의 값이 다르게 되어 이런문제가 생긴다고 한다. 이렇게 될 경우 초기의 테스트/개발 시엔 그냥 깔-끔하게 테이블 내용 다 삭제하는게 편하고 그렇게 하지 못하는 경우에는

\`\`\`
SELECT setval('table_id_seq', (SELECT MAX(id) FROM yourtable));
\`\`\`

위와 같이 yourtable 에 문제되는 테이블을 적어주면 된다고 한다!`,
    listContents: 'duplicate key value violates unique constraint ~_pkey. 뭐 딱보니까 Primary Key 가 문제가 되는 거 같은데, Auto Increment 를 설정안해놓았나 싶었다.',
    datetime: '2021년 02월 21일 20시 47분',
    tags: [POSTGRE, DATABASE],
};
