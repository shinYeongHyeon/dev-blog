import { IPost } from './interfaces/IPost';
import { GIT } from './presentationals/Tags';

export const GitFork: IPost = {
    title: 'Git Fork 해서 작업해보기',
    path: 'GitFork',
    listContents: `오픈소스에 기여하기 위해서라던지, Github Organization에 들어가서 개발을 진행하다보면
해당 작업물을 내 저장소로 가져와서 작업을 한 후에 원 저장소에 내 코드가 추가되고 싶다 라는 생각이 들 때가 있을 것이다.`,
    datetime: '2021년 08월 10일 22시 02분',
    tags: [GIT],
    contents: `
**오픈소스**에 기여하기 위해서라던지, **Github Organization**에 들어가서 개발을 진행하다보면

해당 작업물을 내 저장소로 가져와서 작업을 한 후에 원 저장소에 내 코드가 추가되고 싶다 라는 생각이 들 때가 있을 것이다.

이 글은 그런 Need를 해결하기 위해서 작성하게 되었다.

회사에서 개발파트를 리딩하다보면 스터디를 진행하거나, 사이드 프로젝트를 진행해야 할 때가 생기는데,

이럴때 쉽게 알려주기 위해서도 있다.

이 글에서 쓰는 **용어** 를 정리하면 아래와 같다.

> **원저장소** : 오픈 소스 혹은 Github Organization 에 있는 내가 기여하고 싶어하는 저장소  
> **내저장소** : 원저장소를 Fork 한 내 저장소

---

## 1. 원저장소에서 내저장소로 Fork 하기

> **Fork** 란?  
>   
> 저장소를 복제한다는 개념이다. 단어에서 알 수 있듯이 포크로 콕 찝어서 내 저장소로 옮기는 것을 통상적으로 의미한다.

일단 **Fork** 하고 싶은 원저장소에 가면 아래와 같은 이미지를 볼 수 있다.

![R1280x0-54](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/d96d45d4-f94b-4797-b0df-a36fe1394e7e)

빨간줄이 그어진 곳이 Fork 를 할 수 있는 기능이다.

그 옆에 숫자 **1** 은 해당저장소가 1번 이미 Fork 가 됐다는 것이다.

해당 버튼을 누르면 아래와 같은 이미지가 뜨는데, 원하는 곳에 Fork 하면 된다.

보통 본인의 깃헙이 될 것이다, 나도 내 저장소로 Fork 해보겠다.

![R1280x0-55](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/bcc27a25-71df-4963-9c45-a7c0a8e77c3c)
![R1280x0-56](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/dcca9544-2a8c-4e12-92bb-0aa765ccff5f)

그러면 내저장소_(shinYeongHyeon/intern-clone-21-api)_ 로 옮겨진 것을 확인할 수 있다.

## 2. 내 저장소 Clone 하기

그럼 이제 여기서 **Clone** 을 진행한다.

**Code** 를 누르고 HTTPS 링크를 복사 후 클론을 한다.

![R1280x0-57](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/ab00ba5f-e0ce-4a37-91ad-e491816a4ca2)

클론하고 해당 폴더에 들어가서 **git remote -v** 를 통해 연결된 것을 확인해보면

내저장소에만 연결된 것을 확인할 수 있다.

## 3. 원저장소 변경사항 내 코드에 반영하기

근데 만약, 원저장소가 변경이 됐다면? 다시 Fork 를 해야 되나?

그러면 너무 불편하잖아,,

원저장소의 변경사항을 받아오면 된다 ! 그럴러면 먼저 **remote** 연결을 해야하는데,

원저장소에 가서 HTTPS 주소를 가져온뒤 아래와 같이 실행한다

\`\`\`
    git remote add upstream https://github.com/teamo2dev/intern-clone-21-api.git
\`\`\`

설명하면, "remote 에 add 를 할건데, 그 이름은 upstream 으로 할거고, 주소는 https://~~ 이렇게야." 이다.

그러고 나서 다시 remote 정보를 보면 아래와 비슷한 형태로 보일 거다.

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/a481a467-dfea-4ab3-a2ca-4c6a8cc2ecde)

그리고 나서 변경사항을 새로 받으려면 **git fetch upstream** 을 하면 된다.

## 4. 내 코드를 원저장소로 반영하려면 ?

그러면 이제 작업을 진행할 거다, 해당 작업물은 원저장소에도 권한이 있지 않는 이상 push 권한이 없다.

그래서 내 저장소에 push 를 한 후에 원저장소에 **Pull Request** 를 날리는 식으로 진행을 한다.

**PR 을 날리려면 일단 브랜치는 따는 건 필수**

내 저장소에 Push 하는 건 생략하고 그 후부터 설명하도록 하자

![R1280x0-59](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/ab2896e8-d134-49f8-8f48-f5dedc8204f8)

내 저장소에 들어가면 위와 같이 **Compare & pull request** 버튼이 보일 것이다.

새로운게 푸쉬가 됐으니, 원저장소에 풀리퀘스트를 날려라~ 하고 도와주는 것이다.

누르면 아래와 같이 나오게 된다.

![R1280x0-60](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/52dad5ae-0dac-45e5-a028-b462171a7166)

그래서 **Create pull request** 버튼을 누르면 원저장소에 PR 이 날라가게 되고,

승인되고 머지되고 나면 내가 원저장소 코드에 기여하게 된것 !

그 후로도 추가 작업을 진행하려면 3번과 4번을 반복해주면 된다.
`,
};
