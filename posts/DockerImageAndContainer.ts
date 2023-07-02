import { IPost } from './interfaces/IPost';
import { DOCKER } from './presentationals/Tags';
import { ABOUT_DOCKER } from "./presentationals/Series";

export const DockerImageAndContainer: IPost = {
    title: 'Docker 이미지와 컨테이너',
    path: 'DockerImageAndContainer',
    listContents: `이미지와 컨테이너 : 도커 엔진에서 사용하는 기본 단위이자 핵심`,
    datetime: '2021년 06월 28일 00시 10분',
    tags: [DOCKER],
    seriesId: ABOUT_DOCKER,
    contents: `
## 도커 이미지와 컨테이너

**이미지**와**컨테이너**: 도커 엔진에서 사용하는 기본 단위이자 핵심

### 1. 도커 이미지

컨테이너를 생성할 때 필요한 요소, 가상머신에서 사용하는 iso 파일과 비슷한 개념

이미지는 여러 계층 으로 된 바이너리 파일이 존재하고, 컨테이너를 생성하고 실행할 때 읽기 전용으로 사용됨.

도커 명령어로 내려받을 수 있고, 별도의 설치는 필요 없다.

#### 이미지 이름의 구성

**\\[저장소 이름\\]/\\[이미지 이름\\]:\\[태그\\]**로 구성

\`\`\`
alicek106/ubuntu:14.04 # 저장소이름/이미지이름:태그
ubuntu:latest # 이미지이름:태그
\`\`\`

-   저장소 (Repository) : 이미지가 저장된 장소, 명시되지 않은 경우 도커에서 기본적으로 제공하는 이미지 저장소인 Docker Hub 의 공식이미지. 생략 가능
-   이미지 : 어떤 역할을 하는지 나타냄. 생략 불가
-   태그 : 이미지의 버전관리 혹은 리비전 (Revision) 관리에 사용. 생략시 latest 로 인식

### 2. 도커 컨테이너

이미지로 컨테이너를 생성하면 해당 이미지의 목적에 맞는 파일이 들어 있는 파일 시스템과 격리된 시스템 자원 및 네트워크를 사용할 수 있는 독립된 공간이 생성되고, 이것이 바로**도커 컨테이너**가 된다.

컨테이너는 이미지를 읽기 전용으로 사용하되, 이미지에서 변경된 사항만 컨테이너 계층에 저장하므로 컨테이너에서 무엇을 하든지 원래 이미지는 영향을 받지 않음.

![R1280x0-26](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/5174e7dd-f7d0-4566-8d92-3eff293279f5)
`,
};
