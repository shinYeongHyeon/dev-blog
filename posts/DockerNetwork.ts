import { IPost } from './interfaces/IPost';
import { DOCKER } from './presentationals/Tags';
import { ABOUT_DOCKER } from "./presentationals/Series";

export const DockerNetwork: IPost = {
    title: '도커 네트워크와 그 구조',
    path: 'DockerNetwork',
    listContents: `이전에 컨테이너의 네트워크 인터페이스에 eth0와 lo 네트워크 인터페이스가 있는 것을 확인하였다.`,
    datetime: '2021년 07월 13일 21시 52분',
    tags: [DOCKER],
    seriesId: ABOUT_DOCKER,
    contents: `
## 도커 네트워크 구조

이전에 컨테이너의 네트워크 인터페이스에 eth0와 lo 네트워크 인터페이스가 있는 것을 확인하였다.

언급했던 것과 같이 도커는 컨테이너에 내부 IP를 순차적으로 할당하며, 이 IP는 컨테이너를 재시작할 때마다 변경될 수 있다.

이 내부 IP는 도커가 설치된 호스트, 즉 내부 망에서만 사용가능한 IP 이므로 외부와 연결될 필요가 있는데, 이 과정은 컨테이너를 시작할 때 마다 호스트에 **veth** ... 라는 네트워크 인터페이스를 생성함으로써 이뤄진다.

도커는 각 컨테이너에 외부와의 네트워크를 제공하기 위해 컨테이너마다 가상 네트워크 인터페이스를 호스트에 생성하며 이 인터페이스의 이름은 veth 로 시작한다.

veth 인터페이스는 사용자가 직접 생성할 필요는 없고, 컨테이너가 생성될 때 도커엔진이 자동으로 생성된다.

> veth 에서 v는 virtual을 뜻한다. 즉, virtual eth 라는 의미

이 veth 는 도커의 브릿지 (docker0)를 통해서 호스트의 공인 IP가 할당되어 있는 eth0와 연결돼 외부와 통신할 수 있는 구조가 된다.

![R1280x0-44](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/d4e07b81-f933-456e-8b3e-afffab6beb20)
`,
};
