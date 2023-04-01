import { IPost } from './IPost';
import { GIT } from './presentationals/Tags';

export const RepositoryLanguage: IPost = {
    title: '저장소 Language 변경하기',
    path: 'RepositoryLanguage',
    contents: `
저장소를 만들고 커밋을 하고 하다보면, 오른쪽 사진과 같이 Javascript, HTML, CSS 이런 것들이 대표 언어가 되버리는 경우가 있다 (아래 이미지처럼)

![R1280x0-2](https://user-images.githubusercontent.com/74130738/229285860-43b19b08-152b-4b49-ae09-2ecbbaa84333.png)

난 분명 Svelte 로 작성한 것이라구 ㅠㅠ, 난 이런거에 되게 예민한 편이라서 어떻게든 바꾸고 싶다.


이를 해결하기 위해서는 _.gitattributes_ 를 활용해야 한다. Attribute로 Merge는 어떻게 할지, 텍스트가 아닌 파일은 어떻게 Diff 할지, checkin/checkout 할 때 어떻게 필터링할지 등 여러가지를 정해줄 수 있다. 이런 것들이 있기는 하지만, 이번에 배워보기에는 너무 양이 방대해서 넘어가도록 하고 글을 작성한 이유만 일단 해결해보자.

굉장히 간단한데, _linguist-detectable_ 만 활용하면 된다. 나는 Svelte Tutorial 을 ts 로 전환하여 사용하기는 하지만, ts 에 대한 분포도도 현재까지는 필요하지 않기에 일단 ts 까지 모두 분석에서 빼려고 한다.

\`\`\`
// .gitattributes
*.css linguist-detectable=false
*.html linguist-detectable=false
*.js linguist-detectable=false
*.ts linguist-detectable=false
\`\`\`

이렇게 해주면 css, html, js, ts 모두 분석에서 빠진다. 이렇게 프로젝트 루트 최상단에 두고 커밋을 하면 ..!!  
Tada!! 아래와 같이 된다.

![R1280x0-2](https://user-images.githubusercontent.com/74130738/229285858-6fc55d91-1295-4a30-b6ec-304157c4cffb.png)

~난 이런거에 몹시 행복한편..~
`,
    listContents: 'Github 저장소의 불필요한 사용언어를 바꿔보자 ! css OUT!',
    datetime: '2021년 01월 31일 21시 38분',
    tags: [GIT],
};
