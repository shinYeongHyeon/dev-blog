import { IPost } from './interfaces/IPost';
import { DOCKER } from './presentationals/Tags';
import { ABOUT_DOCKER } from "./presentationals/Series";

export const DockerContainerPublic: IPost = {
    title: '도커 컨테이너를 외부에 노출/제공 하기!',
    path: 'DockerContainerPublic',
    listContents: `컨테이너 공개해버리기`,
    datetime: '2021년 07월 04일 20시 20분',
    tags: [DOCKER],
    seriesId: ABOUT_DOCKER,
    contents: `
## 컨테이너를 외부에 노출하기

컨테이너는 가상 머신과 마찬가지로 가상의 IP 주소를 할당 받는다.

기본적으로 도커는 컨테이너에 172.17.0.x 의 IP 를 순차적으로 할당한다.

도커를 실행한 후, **ifconfig** 를 사용하면 확인할 수 있다.

> 도커 초기 이미지에는 최소화된 패키지의 우분투를 실행하면 설치가 되어 있지 않은 경우가 있어서, 설치를 해주어야 한다.  
>   
> apt-get update  
> apt-get install net-tools

![R1280x0-33](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/9f29f9ef-dffa-4522-8f18-bc2d0dc9a2f3)

왼쪽 이미지를 보자

도커의 NAT IP 인 172.17.0.2 를 할당받은 eth0 인터페이스와 로컬 호스트인 lo 인터페이스가 있는데, 아무런 설정을 하지 않았다면 이 컨테이너는 외부에서 접근할 수 없으며 도커가 설치된 호스트에서만 접근할 수 있다.

외부에 컨테이너의 애플리케이션을 노출하기 위해서는 eth0의 IP 와 포트를 호스트의 IP와 포트에 바인딩 하여야 함.

컨테이너 외부에서 다음 명령어를 입력해 다른 컨테이너를 생성해보자.

> docker run -it -p 3306:80 --name myWebServer ubuntu:20.04

해당 예제는 **\\-p** 옵션을 추가한 것인데, -p 옵션은 컨테이너의 포트를 호스트의 포트와 바인딩해 연결할 수 있게 설정한다. -p 옵션의 입력형식은 아래와 같다.

> \\[호스트의 포트\\]:\\[컨테이너의 포트\\]

호스트의 7777번 포트를 컨테이너의 80번 포트와 연결하려면 7777:80 과 같이 입력하며, 호스트의 특정 IP를 사용하려면 192.168.0.100:7777:80 과 같이 바인딩할 IP와 포트를 명시해야 한다.

또한 여러개의 포트를 외부에 개방하려면 -p 옵션을 여러번 설정하면 된다.

> apt-get update  
> apt-get install apache2 -y  
> service apache2 start

그런 후, lo 의 IP 인 127.0.0.1 그리고 바인딩한 3306 포트로 접근하면 아파치 웹서버가 떠 있는 것을 확인할 수 있다.

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/f0584be3-d5a7-400a-a8ce-61897d57c847)
`,
};
