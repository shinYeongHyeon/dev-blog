import { IPost } from './interfaces/IPost';
import { DOCKER } from './presentationals/Tags';
import { ABOUT_DOCKER } from "./presentationals/Series";

export const DockerVolume: IPost = {
    title: '도커 컨테이너와 데이터 공유하기, Docker Volume',
    path: 'DockerVolume',
    listContents: `도커 이미지로 컨테이너를 생성하면 이미지는 읽기 전용이 되며, 컨테이너의 변경 사항만 별도로 저장해서 각 컨테이너의 정보를 보존한다.
이러면 데이터가 보관되지 않는 다는 단점이 있는데, 이를 해결하기 위한 것을 알아보자`,
    datetime: '2021년 07월 13일 12시 51분',
    tags: [DOCKER],
    seriesId: ABOUT_DOCKER,
    contents: `
도커 이미지로 컨테이너를 생성하면 이미지는 읽기 전용이 되며, 컨테이너의 변경 사항만 별도로 저장해서 각 컨테이너의 정보를 보존한다.

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/15f52efb-7854-42fb-954f-28b5dbadda71)

**그러나**, 이러한 점에는 치명적인 단점이 있다. 컨테이너를 삭제하면 변경된 정보도 삭제된다는 것이다, mysql 의 예제로 보면 데이터가 보존되지 않는 다는 점이다.

이를 방지하기 위해 컨테이너의 데이터를 영속적(Persistent) 데이터 활용할 수 있는 방법이 몇가지가 있다.

그 중 가장 활용하기 쉬운 방법이 **볼륨(Volume)** 을 활용하는 것이다.

---

볼륨을 활용하는 방법도 여러가지가 있다.

## 1. 도커 볼륨 공유

아래 명령어를 입력해 postgre 데이터 베이스를 생성하고, 테이블을 생성해준다.

\`\`\`
$ docker run -d -e POSTGRES_PASSWORD=password -p 5432:5432 --name db_test -v postgres13-data:/var/lib/postgresql/data postgres // 데이터 베이스 생성

$ docker rm -f \`docker ps -a -q\` // 실행/중지 중지 중인 도커컨테이너가 모두 지워지니 주의 바람
\`\`\`

데이터 베이스를 생성하고 컨테이너를 아예 지워보았다. 나는 test 와 den\\_test 라는 데이터베이스를 만들었고, 맨 윗줄의 똑같은 명령어를 입력해 다시 컨테이너를 생성해보았다.

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/eb473084-16fd-467d-bee0-f919a522788e)
![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/219125ea-7255-4492-9be5-427711bd3a89)

결과는 위의 화면과 같이 데이터가 유지되는 것을 볼 수 있다. 또한 도커 Volume에 생성된것을 볼 수 있다.

## 2. 볼륨 컨테이너

두 번째 방법은 -v 옵션으로 볼륨을 사용하는 컨테이너를 다른 컨테이너와 공유하는 것이다.

컨테이너를 생성할 때 **\\--volumes-from** 옵션을 설정하면 -v 또는 **\\--volume** 옵션을 적용한 컨테이너의 볼륨 디렉토리를 공유할 수 있다. 그러나 이는 직접 볼륨을 공유하는 것이 아닌 -v 옵션을 적용한 컨테이너를 통해 공유하는 것이다.

## 3. 호스트 볼륨 공유

1과 달리 도커의 볼륨이 아닌 호스트의 볼륨을 공유하는 것이다. 도커 볼륨과 다른 것은 -v 이후에 디렉토리를 지정할 때 **/** 로 시작하면 된다.
`,
};
