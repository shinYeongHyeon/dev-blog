import { IPost } from './interfaces/IPost';
import { TERRAFORM } from './presentationals/Tags';
import { ABOUT_TERRAFORM } from "./presentationals/Series";

export const Terraform: IPost = {
    title: 'Terraform 에 대하여 (IaC)',
    path: 'Terraform',
    listContents: `IaC 인 Terraform 에 대해 알아보자`,
    datetime: '2021년 07월 09일 18시 07분',
    tags: [TERRAFORM],
    seriesId: ABOUT_TERRAFORM,
    contents: `
## 1 . 테라폼이란 ?

Terraform 은 하시코프 (Hashicorp) 에서 오픈소스로 개발중인 InfraStructure 관리도구

서비스 실행에 필요한 환경을 구축하는 도구로 설정관리 도구와**프로비저닝 도구**로 분류

코드로서의 인프라스트럭처 (Infrastructure as Code, IaC) 를 지향하고 있는 도구로, GUI나 웹 콘솔을 사용해 서비스 실행에 필요한 리소스를 관리하는 대신 필요한 리소스들을**선언적인 코드로 작성해 관리**할 수 있도록 함

## 2 . 테라폼 설치

맥OS 에서는 Homebrew 를 사용해 간단하게 설치가 가능

\`\`\`
$ brew install terraform
\`\`\`

## 3 . 기본 개념

### 1 . 프로비저닝 (Provisioning)

어떤 프로세스나 서비스를 실행하기 위한 준비단계를 프로비저닝이라고 함

**크게 네트워크나 컴퓨팅 자원을 준비하는 작업**과**준비된 컴퓨팅 자원에 사이트 패키지나 애플리케이션 의존성을 준비**하는 단계로 나눠짐

테라폼은 전자를 주로 다루는 도구

### 2 . 프로바이더 (Provider)

테라폼과 외부 서비스를 연결해주는 기능을 하는 모듈

_예를 들어_, 테라폼으로 AWS 서비스의 컴퓨팅 자원을 생성하기 위해서는 AWS Provider를 먼저 셋업해야 함

프로바이더로는 AWS, GCP, Azure 와 같은 범용 클라우드 서비스를 비롯, Github, DataDog 과 같은 특정 기능을 제공하는 서비스, Mysql, Docker 와 같은 로컬 서비스를 지원

### 3 . 리소스 (Resource)

특정 프로바이더가 제공해주는 조작가능한 대상의 최소 단위

_예를 들어_, AWS 프로바이더는 aws\\_instance 리소스 타입을 제공하며, 해당 리소스타입을 통해 EC2의 가상머신 리소스를 선언하고 조작 가능

### 4 . HCL (Hashicorp Configuration Language)

테라폼에서 사용하는 설정 언어

테라폼에서 모든 설정과 리소스 선언은 HCl 을 사용해 이루어짐

확장자는 **.tf**를 사용

### 5 . 계획 (Plan)

테라폼 프로젝트 디렉토리 아래의 모든 .tf 파일의 내용을 실제로 적용 가능한지 확인하는 작업

이를 terraform plan 명령어로 제공하며, 해당 명령어를 실행하면 어떤 리소스가 생성되고, 수정되고, 삭제될지 계획을 보여줌

### 6 . 적용 (Apply)

테라폼 프로젝트 디렉토리 아래의 모든 .tf 파일의 내용대로 리소스를 생성, 수정, 삭제하는 일

이를 terraform apply 명령어로 제공
`,
};
