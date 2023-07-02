import { IPost } from './interfaces/IPost';
import { GIT } from './presentationals/Tags';

export const GitRemotePassword20210813: IPost = {
    title: 'Git오류 -> remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.',
    path: 'GitRemotePassword20210813',
    listContents: `remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead. 이 오류는 도대체 또 뭐야..`,
    datetime: '2021년 08월 14일 22시 47분',
    tags: [GIT],
    contents: `
오늘 GitHub 푸쉬를 하려고 하는데, 아래와 같이 오류가 뜬다

MacOS 기준으로 해결방법에 대해 알아보자

> remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.  
> remote: Please see [https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/) [](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)for more information.  

위 오류 해결 방법에 대해서 알아보자.

일다 내용은 비밀번호 대신 Personal Access Token 을 쓰라는 것이다.

일단 Personal Access Token 을 만들자.

## 1. Personal Access Token 생성

Github 사이트에서 계정 클릭 후 Developer Settings 를 찾는다.

Developer Settings > Personal access tokens 에서 새로운 토큰을 생성하고 권한은, 모르겠으면 전부 다 하면 된다.

## 2. 변경하기

커맨드 스페이스를 누르고, 키체인접근에 접근하자

![R1280x0-61](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/04c5d216-3978-4e7b-bc65-9692d89dd743)

여기서 github 을 검색후 더블 클릭 해준다.

![R1280x0-62](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/45274838-af75-4866-bae4-8b56624b8afc)
![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/6bb15804-0229-4cfd-a316-f5fa54ff0ca9)

그 다음 보이는 곳에서 암호보기를 클릭 후 기존 암호 입력한다음에, 발급받은 토큰으로 변경해주면 끝 !
`,
};
