import { IPost } from './interfaces/IPost';
import { DOCKER } from './presentationals/Tags';
import { ABOUT_DOCKER } from "./presentationals/Series";

export const DockerMySQL: IPost = {
    title: 'Docker 로 워드프레스, mysql 실행하기',
    path: 'DockerMySQL',
    listContents: `데이터베이스와 워드프레스 웹 서버 컨테이너를 연동해 워드프레스 기반 블로그 서비스를 만들어 보도록하자`,
    datetime: '2021년 07월 10일 12시 04분',
    tags: [DOCKER],
    seriesId: ABOUT_DOCKER,
    contents: `
## 컨테이너 애플리케이션 구축하기

대부분의 서비스는 단일 프로그램으로 동작하지 않는다.

여러 에이전트나 데이터베이스 등과 연결되어 완전한 서비스로써 동작하는 것이 일반적이다.

이런 서비스를 컨테이너화 (**Containerize**) 할 때, 여러 개의 어플리케이션을 한 컨테이너에 설치할 수도 있으나, 컨테이너에 애플리케이션 하나만 동작시킬 경우에 컨테이너간의 독립성을 보장하고 동시에 어플리케이션의 버전 관리, 소스코드 모듈화 등이 더욱 쉬워진다.

그래서 이번에 데이터베이스와 워드프레스 웹 서버 컨테이너를 연동해 워드프레스 기반 블로그 서비스를 만들어 보도록하자.

다음명령어를 입력해 각 컨테이너를 생성한다

\`\`\`
$ docker run -d --platform linux/amd64 --name wordpressdb -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=wordpress mysql

$ docker run -d -e WORDPRESS_DB_HOST=mysql -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=password --name wordpress --link wordpressdb:mysql -p 80 wordpress
\`\`\`

_**👉--platform linux/amd64** 는 MacOS M1 에서 docker mysql 문제가 있어서 추가된 명령어로, 해당되지 않으면 생략해도 된다._

첫 번째 명령어는 mysql 이미지를 사용해 **데이터베이스 컨테이너**를, 두 번째 명령어는 워드프레스 이미지를 이용해 **워드프레스 웹 서버 컨테이너**를 생성한다.

워드프레스 웹 서버 컨테이너의 -p 옵션에서 80을 입력했으므로, **호스트의 포트 중 하나**와 컨테이너의 80번 포트가 연결된다.

docker ps 명령어로 호스트의 어느 포트와 연결됐는지 확인해보자.

![R1280x0-40](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/a34bf8f9-b3a1-4837-8633-3ec3a7bba389)

**59898** 포트에 연결된 것을 확인할 수 있다, 또한 이미지에서 보는 바와 같이 docker port 명령어를 통해 바인딩된 포트만 확인이 가능하다.

---

위 예제에서 나온 새로운 명령어들을 확인해보자

- **-d** : -i -t 가 컨테이너 내부로 진입하도록 attach 간으한 상태로 설정한다면 -d은 Detached 모드로 컨테이너를 실행한다. Detached 모드는 컨테이너를 백그라운드에서 동작하는 애플리케이션으로써 실행하도록 설정한다.
- **-e** : 컨테이너 내부의 환경변수를 설정한다.
- **--link**: A 컨테이너에서 B 컨테이너로 접근하는 방법 중 가장 간단한 것은 NAT 로 할당받은 내부 IP를 쓰는 것이다. B 컨테이너의 IP가 172.17.0.3 이라면 A 컨테이너는 이 IP 를 써서 B 컨테이너에 접근할 수 있다. 그러나 도커 엔진은 컨테이너에게 내부 IP 를 순차적으로 할당한다. 이는 컨테이너를 시작할 때마다 재할당하는 것이므로 매번 변경되는 컨테이너의 IP로 접근하기란 어렵다. —link 옵션은 내부 IP를 알 필요 없이 항상 컨테이너에 별명으로 접근하도록 설정해준다. 다만, link 옵션은 현재 deprecated 된 옵션이며 추후 삭제 가능성이 있는데, 도커 브리지 네트워크를 사용하면 동일한 기능을 더욱 손쉽게 사용가능하다, 해당 기능에 대해서는 추후에 알아보도록 하겠다.
`,
};
