import { IPost } from './interfaces/IPost';
import { DOCKER } from './presentationals/Tags';
import { ABOUT_DOCKER } from "./presentationals/Series";

export const DockerNetworkFeature: IPost = {
    title: '도커 네트워크 기능',
    path: 'DockerNetworkFeature',
    listContents: `컨테이너 생성시 기본적으로 브리지를 통해 외부와 통신할 수 있는 호나경을 사용할 수 있지만 사용자의 선택에 따라 여러 네트워크 드라이버를 쓸 수도 있다.`,
    datetime: '2021년 07월 14일 21시 17분',
    tags: [DOCKER],
    seriesId: ABOUT_DOCKER,
    contents: `
## 도커 네트워크 기능

컨테이너 생성시 기본적으로 브리지를 통해 외부와 통신할 수 있는 호나경을 사용할 수 있지만 사용자의 선택에 따라 여러 네트워크 드라이버를 쓸 수도 있다.

**도커가 제공하는 대표적인 네트워크 드라이버**

- 브리지
- 호스트
- 논 (none)
- 컨테이너
- 오버레이

여기서는 브리지, 호스트, 논, 컨테이너에 대해 알아보도록 하자.

![R1280x0-45](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/3c5b337d-2385-4f20-ae35-f897906ccd73)

브리지, 호스트, 논이 있는것을 볼 수 있다.

**docker network inspect** 명령어를 이용하여 네트워크의 자세한 정보를알 수 있다.

\`docker network inspect {network\\_name}\`

bridge 를 한번 살펴보자

![R1280x0-46](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/03bcd49d-10a3-4ee6-b3ff-183f98a0f2bd)

Config 항목의 Subnet과 Gateway가 172.17.0.0/16 과 172.17.0.1 로 설정된 것을 볼 수 있다. 이 전에 설명했던 컨테이너에 IP가 순차적으로 할당된 것이 설명이 된다.

아무런 설정이 하지 않고 컨테이너를 생성하면 해당 컨테이너는 브릿지를 사용하게 된다.

### **1. 브리지 네트워크**

다음 명령어를 입력해 새로운 브리지 네트워크를 생성해보자

\`\`\`
$ docker network create --driver bridge mybridge
\`\`\`

![R1280x0-47](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/2eef313c-942a-47bd-a3cf-2cd784482ab8)

실행결과까지 같이 보면 새로운 브리지 타입인 **mybridge** 가 생성된 것을 볼 수 있다.

docker run 혹은 create 명령어에 **\\--net** 옵션의 값을 설정하면 컨테이너가 해당 네트워크를 사용하도록 설정할 수 있다.

\`\`\`
$ docker run -it --name mynetwork_container --net mybridge ubuntu
\`\`\`

실행 완료 후 ifconfig 로 확인해보면, 내 경우에는 172.19.0.2 로 설정이 되어 있다. 해당 내부IP는 mybridge 를 inspect 해보면 서브넷이 172.19.0.0/16 이 된 것을 볼 수 있다.

이렇게 생성된 사용자 정의 네트워크는 docker network **disconnect**, **connect** 명령어를 통해 컨테이너에 유동적으로 붙이고 떼고를 할 수 있다.

아래의 명령어는 mynetwork\\_container 컨테이너에 mybridge 라는 이름의 브리지 네트워크를 끊은 뒤 다시 연결하는 예제이다

\`\`\`
$ docker network disconnect mybridge mynetwork_container
$ docker network connect mybridge mynetwork_container
\`\`\`

위 명령어 들은 논 네트워크, 호스트 네트워크 등과 같은 특별한 네트워크 모드에서는 사용할 수 없다.

네트워크의 서브넷, 게이트웨이, IP 할당 범위 등을 임의로 설정하려면 네트워크를 생성할 때 아래와 같이 **\\--subnet, --ip-range, --gateway** 옵션을 추가하여야 한다. 단, --subnet과 --ip-range 는 같은 대역이어야 한다.

\`\`\`
$ docker network create --driver=bridge --subnet=172.72.0.0/16 --ip-range=172.72.0.0/24 --gateway=172.720.0.1 my_custom_network
\`\`\`

### **2. 호스트 네트워크**

네트워크를 호스트로 설정하면 호스트의 네트워크 환경을 그대로 쓸 수 있다.

위의 브리지 드라이버 네트워크와 달리 호스트 드라이버의 네트워크는 별도로 생성할 필요 없이 기존의 host라는 이름의 네트워크를 사용한다.

\`\`\`
$ docker run -it --name network_host --net host ubuntu
\`\`\`

![R1280x0-48](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/fecc9af3-f1b8-4e28-9e78-8258041fc91a)

이미지를 보면 호스트 머신에서 설정한 호스트 이름도 컨테이너가 물려받기 때문에 컨테이너의 호스트 이름도 무작위 16진수가 아닌 도커 엔진이 설치된 호스트 머신의 호스트 이름으로 설정된다.

컨테이너의 네트워크를 호스트 모드로 설정하면 컨테이너 내부의 애플리케이션을 별도의 포트 포워딩 없이 바로 서비스 할 수 있다.

이는 마치 실제 호스트에서 애플리케이션을 외부에 노출하는 것과 같다.

예를 들어, 호스트 모드를 쓰는 컨테이너에서 아파치 웹서버를 구동한다면 호스트의 IP와 컨테이너의 아파치 웹 서버 포트인 80으로 바로 접근할 수 있다.

### **3. 논 네트워크**

none은 말 그대로 아무런 네트워크를 쓰지 않는 다는 것을 뜻한다.

### **4. 컨테이너 네트워크**

\\--net 옵션으로 container 를 입력하면 다른 컨테이너의 네임스페이스 환경을 공유 할 수 있다.

공유되는 속성은 내부 IP, 네트워크 인터페이스의 맥(MAC) 주소 등이다.

\\--net 옵션의 값으로 **container:\\[다른컨테이너의ID\\]** 와 같이 입력한다.
`,
};
