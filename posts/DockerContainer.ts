import { IPost } from './interfaces/IPost';
import { DOCKER } from './presentationals/Tags';
import { ABOUT_DOCKER } from "./presentationals/Series";

export const DockerContainer: IPost = {
    title: '도커 컨테이너 기본 다루기',
    path: 'DockerContainer',
    listContents: `도커 컨테이너에 대해 알아보자`,
    datetime: '2021년 06월 28일 09시 00분',
    tags: [DOCKER],
    seriesId: ABOUT_DOCKER,
    contents: `
## 1. 컨테이너 생성

로컬에 없는 이미지를 생성&실행 및 컨테이너 내부로 들어가기를 해보겠다.

옵션으로 붙은 -i -t 는 컨테이너와 상호 입출력이 가능하게 하는 것으로 자세하게 다음에 알아보도록 하자.

\`\`\`
docker run -i -t ubuntu:14.04
\`\`\`

실행하기 되면, 로컬 도커 엔진에 존재하지 않다는 메시지와 함께, 도커 중앙 이미지 저장소인 도커 허브에서 자동으로 이미지를 내려 받고, 컨테이너를 생성과 실행을 동시에 하고, 컨테이너 내부로 들어오게 된다.

![R1280x0-27](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/a557bd5e-388f-4b5a-8dca-18d9cfed9da6)

화살표가 가리키는 의미가 실행된 컨테이너 내부로 들어왔다는 의미이다.

컨테이너에서 기본 사용자는 root 이고, 호스트 이름은 무작위 16진수 해시 값이다.

> **도커에서 나가는 방법  
> **  
> 1. 쉘에서 exit 입력 혹은 Ctrl+D  
>  ⇒ 내부에서 빠져 나옴과 동시에 컨테이너를 정지  
> 2. Ctrl + P, Q  
>  ⇒ 컨테이너 쉘에서만 빠져나오게 되고, 중지시키지 않음

이번에는, 생성~들어가기 까지 차례차례 해보도록 하자.

\`\`\`
# 이미지 다운로드
docker pull centos:7

# 컨테이너 생성
docker create -i -t --name myCentOS centos:7

# 컨테이너 실행
docker start myCentOS

# 컨테이너 내부로 들어가기
docker attach myCentOS

# Ctrl + P, Q로 나오기
# 컨테이너 프로세스 확인
docker ps
\`\`\`

위 결과를 화면으로 보자.

![R1280x0-28](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/d3b5b01d-ea52-4b22-84f5-190c5601cdde)

## 2. 컨테이너 목록 확인

컨테이너 목록 확인은**ps**명령어를 통해 가능하다.**ps 명령어는 정지되지 않은 컨테이너**만 출력한다.

정지된 컨테이너를 포함한 모든 컨테이너를 출력하려면 -a 옵션을 추가하면 가능하다.

![R1280x0-29](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/aabc8ca9-3423-4de6-9a7b-30bf4f2a7207)

컨테이너의 상태는 STATUS 항목에서 확인이 가능하다.

Exited 는 정지된 상태, Up 은 실행중인 상태를 의미한다.

## 3. 컨테이너 삭제

더 이상 필요하지 않는 컨테이너는**rm**명령어를 통해 삭제가 가능하다. (NAMES 이용)

![R1280x0-30](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/b90d3c20-4bb8-46e5-92d5-5a8c11d4c5d8)

단, 실행중인 컨테이너를 삭제하려면 컨테이너를 정지 한 후에 삭제하여야 한다.

![R1280x0-31](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/1c042935-28db-48ba-a2da-a7fd6f3244bc)

> 실행중인 컨테이너를 삭제하는 다른 방법은 -f 옵션을 이용하는 것이다.  
> docker rm -f myCentOS
`,
};
