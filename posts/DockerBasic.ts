import { IPost } from './interfaces/IPost';
import { DOCKER } from './presentationals/Tags';
import { ABOUT_DOCKER } from "./presentationals/Series";

export const DockerBasic: IPost = {
    title: 'Docker (도커) 에 관하여',
    path: 'DockerBasic',
    listContents: `도커 (Docker) 는 리눅스 컨테이너에 여러 기능을 추가함으로써 애플리케이션을 컨테이너로써 좀 더 쉽게 사용할 수 있게 만들어진 오픈 소스프로젝트이다.`,
    datetime: '2021년 06월 27일 14시 13분',
    tags: [DOCKER],
    seriesId: ABOUT_DOCKER,
    contents: `
## 1. 도커에 관하여

- 도커 (Docker) 는 **리눅스 컨테이너에 여러 기능을 추가함으로써 애플리케이션을 컨테이너로써 좀 더 쉽게 사용할 수 있게 만들어진 오픈 소스프로젝트**이다.
- Go언어로 작성되어 있음.
- 2013년 3월 첫 Release

## 2. 도커 프로젝트

- 도커 컴포즈
- 레지스트리
- 도커 퍼브
- Docker for Desktop
- 기타 등등

주로 **Docker** 라 함은, Docker Engine 혹은 Docker 와 관련된 모든 프로젝트를 의미.

Docker Engine이 컨테이너를 생성하고 관리하는 주체, 나머지들은 이를 좀 더 효율적으로 사용하기 위함이 큼.

## 3. 가상 머신과 도커 컨테이너

### 가상머신

기존의 가상화 기술은 하이퍼바이저를 이용해 여러 개의 운영체제를 하나의 호스트에서 생성해 사용하는 방식, 이러한 여러 개의 운영체제는 가상 머신이라는 단위로 구별되고, 각 가상머신에는 Ubuntu, CentOS 등 운영체제가 설치되어 사용됨.

하이퍼바이저에 의해 생성되고 관리되는 운영체제는 Guest OS 라고 하며, 각각 독립된 공간과 시스템 자원을 할당 받아 사용

#### 단점

- 가상 머신은 운영체제를 사용하기 위한 라이브러리, 커널 등을 모두 포함하기 때문에 가상머신을 배포하기 위한 이미지로 만들었을 때 그 크기 또한 커지게 됨
- 즉, 완벽한 운영체제를 생성할 수 있지만 호스트에 비해 성능 손실이 있고, 수기가바이트에 달하는 가상머신 이미지를 애플리케이션으로 배포하기에는 부담
- 각종 시스템 자원을 가상화하고 독립된 공간을 생성하는 작업은 하이퍼바이저를 반드시 거치기 때문에 일반 호스트에 비해 성능 손실이 발생

### 도커 컨테이너

가상화된 공간을 생성하기 위해 리눅스의 자체 기능인 chroot, namespace, cgroup을 사용함으로써 프로세스 단위의 격리 환경을 만들기 때문에 성능 손실이 거의 없음.

컨테이너에 필요한 커널은 호스트의 커널을 공유해 사용하고, 컨테이너 안에는 애플리케이션을 구동하는데 필요한 라이브러리 및 실행파일만 존재하므로 용량이 대폭 줄어듦

따라서, **가상머신에 비해 빠르고, 성능 손실이 거의 없음**

![R1280x0-25](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/4faff56a-02f7-4ed5-ac34-1cd6cfb97dca)
`,
};
