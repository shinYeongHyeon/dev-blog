import { IPost } from './interfaces/IPost';
import { TERRAFORM } from './presentationals/Tags';
import { ABOUT_TERRAFORM } from "./presentationals/Series";

export const TerraformEC2RDS: IPost = {
    title: 'Terraform 으로 AWS EC2, RDS 생성 해보기',
    path: 'TerraformEC2RDS',
    listContents: `이번 글에서는 Terraform 을 활용해서 AWS EC2, RDS 를 생성해보고자 한다.`,
    datetime: '2021년 07월 09일 22시 57분',
    tags: [TERRAFORM],
    seriesId: ABOUT_TERRAFORM,
    contents: `
## 개요

이번 글에서는 Terraform 을 활용해서 AWS EC2, RDS 를 생성해보고자 한다.

일단 프로젝트에 두개의 파일을 생성해보도록 한다.

**provider.tf** 와 **infra.tf**

테라폼은 특정 디렉토리에 있는 모든 .tf 확장자를 가진 파일을 읽고 진행하기 때문에 더 나누어도 상관없지만, 간단한 예제이므로 2개의 파일로 진행해보가자 한다.

먼저 provider.tf 를 보겠다.

.tf 파일은 HCL (Haship Configuration Language) 로 작성된다.

\`\`\`
provider "aws" {
  access_key = "<AWS_ACCESS_KEY>"
  secret_key = "<AWS_SECRET_KEY>"
  region = "ap-northeast-2"
}

## 혹은

provider "aws" {
  region = "ap-northeast-2"
  shared_credentials_file = "~/.aws/credentials"
}
\`\`\`

위의 방법과 아래의 방법 중 택일하면 되는데, Git 에도 올리기 위해서는 아래의 방법을 선호하는 편이다.

_aws credentials 세팅 방벙은 생략하도록 하겠다._

## 프로젝트 초기화

\`\`\`
$ terraform init

$ terraform version
Terraform v1.0.2
on darwin_amd64
+ provider registry.terraform.io/hashicorp/aws v3.49.0
\`\`\`

위 명령어로 초기화 후 version 을 확인 해보면, provider 의 버전도 같이 나오는 것을 볼 수 있다.

## EC2용 SSH 키 페어 정의

이번엔 infra.tf 에 AWS 사용에 기본이 될 SSH 키페어 정의를 해보도록 하겠다.

\`\`\`
resource "aws_key_pair" "web_admin" {
  key_name = "web_admin"
  public_key = "<PUBLIC_KEY>"
}
\`\`\`

여기서 **resource** 키워드 다음에 두개의 문자열이 오는데, 해당 문자열들의 의미는 다음과 같다.

> \\* aws\\_key\\_pair : 첫 번째 문자열로, 리소스 타입이다. 따라서 이 자리에 올 수 있는 값들은 프로바이더에서 제공하는 리소스 타입의 이름들로 한정되어 있다. 리소스 이름에서는 관습적으로 프로바이더 이름에 언더스코어를 붙여 전치사(prefix) 로 사용한다.  
>   
> \\* web\\_admin : 해당 리소스에 임의로 붙이는 이름. 테라폼 코드의 다른 곳에서 이 리소스를 참조하기 위해서 사용한다. 리소스 타입과 이름을 .으로 이어 aws\\_key\\_pair.web\\_admin 과 같은 형식으로 참조

여기서 public\\_key 는 공개키 값인데, 새로 생성해도 좋고 기존에 있던 것을 사용해도 좋다.

나는 아래 코드로 새로운 공개키를 생성해보겠다.

\`\`\`
$ ssh-keygen -t rsa -b 4096 -C "<EMAIL_ADDRESS>" -f "$HOME/.ssh/web_admin" -N ""
\`\`\`

위 코드로 공개키를 생성 후 public\\_key 에는 file("~/.ssh/web\\_admin.pub") 를 넣어주어, 임포트 해주겠다.

\`\`\`
resource "aws_key_pair" "web_admin" {
  key_name = "web_admin"
  public_key = file("~/.ssh/web_admin.pub")
}
\`\`\`

## 계획 확인 및 적용

앞서 작성한 리소스가 실제 생성가능한지 확인해보자

\`\`\`
$ terraform plan
\`\`\`

현재 정의되어 있는 리소스들을 실제로 프로바이더에 적용했을 때 테라폼이 어떤 작업을 수행할지 계획을 보여준다.

![R1280x0-39](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/e3629405-bb0e-4d7c-97a7-fbda5e26957c)

\\+ 문자는 생성하겠다는 의미이다.

이제 실제로 생성해보자, 아래 명령어를 입력후 **yes** 를 추가로 입력해주어야 한다.

\`\`\`
$ terraform apply
\`\`\`

완료 후 AWS 콘솔에서 확인이 가능하다.

## SSH 접속 허용을 위한 시큐리티 그룹

두번째로는 **aws\\_security\\_group** 리소스를 정의하려 한다. 이 리소스 역시 인스턴스를 정의하는데 필요하다.

인스턴스를 생성해도 밖에서 접근할 수 있는 방법이 없다면 사용할 수 없기 때문에, SSH port를 외부에 열어주는 시큐리티 그룹을 만들 필요가 있다.

아래 내용을 infra.tf 맨 아래에 추가 해준다.

\`\`\`
resource "aws_security_group" "ssh" {
  name = "allow_ssh_from_all"
  description = "Allow SSH port from all"
  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
\`\`\`

**ingress** 는 인바운드 트래픽을 정의하는 속성이다. (아웃바운드는 egress)

해당 코드는 **22포트 부터 22포트까지 모든 IP 에 대한 접속을 허용**한다는 뜻이다.

이제 plan 을 실행해보면, **aws\\_key\\_pair** 에 대한 것은 이미 실행이 되어 있는 상태이기 때문에, 무시되고 새로 작성한 것만 추가된다고 뜬다.

이제 apply 를 하자

## 기본 Security Group 불러오기

테라폼은 이미 클라우드 상에 정의되어 있는 리소스를 데이터 소스로 불러오는 기능도 제공한다.

\`\`\`
data "aws_security_group" "default" {
  name = "default"
}
\`\`\`

지금까지와 다른 것은 resource 가 아닌 data 로 시작하는데, 이 데이터 소스는 이름이 default 인 시큐리티 그룹을 찾아 해당 리소스의 속성들을 참조할 수 있게 해준다.

## EC2 및 RDS 정의

이제 EC2와 RDS를 정의해보자

\`\`\`
resource "aws_instance" "web" {
  ami = "ami-0a93a08544874b3b7" # amzn2-ami-hvm-2.0.20200207.1-x86_64-gp2
  instance_type = "t2.micro"
  key_name = aws_key_pair.web_admin.key_name
  vpc_security_group_ids = [
    aws_security_group.ssh.id,
    data.aws_security_group.default.id
  ]
}

resource "aws_db_instance" "web_db" {
  allocated_storage = 8
  engine = "mysql"
  engine_version = "5.6.35"
  instance_class = "db.t2.micro"
  username = "admin"
  password = "tftestaa!!"
  skip_final_snapshot = true
}
\`\`\`

위에서 사용되는 속성들의 자세한 설명은 생략하고 [EC2(aws\\_instance)](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance), [RDS (aws\\_db\\_instance)](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/db_instance) 활용을 위한 공식문서를 참조하겠다.

**apply** 를 적용해주면 각각 ec2 와 rds 가 생성된 후 id 를 알려준다. 그 결과로 콘솔에서 확인해보고자 한다.

---

EC2 생성결과  
![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/6026c1dc-580b-4c24-b6bb-b79a665f0d09)

EC2 콘솔 확인결과  
![R1280x0-36](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/ee965734-bde0-4ae8-955a-b49f02789090)

RDS 콘솔 확인결과

![R1280x0-37](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/07510656-da37-40c5-9395-2e588e9edb4a)

## EC2 접속해보기

위에서 만들어진 EC2에 접속해보겠다

![R1280x0-38](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/65f9fdcc-3b24-418c-b7e0-9eb35a75435f)

위와 같이 잘 접속이 된 것을 확인 할 수 있다.

## 마무리

마지막으로 **terraform destroy** 를 통해서 모든 데이터를 지워주도록 하겠다.

테라폼을 사용하는 이유는 처음에 접하거나, 소규모 서비스시에는 불필요해 보일지 몰라도, 서비스가 점점 커지거나 할때는 관리가 조금 더 용이해지게 된다.

또한, 코드를 작성할 때의 이점들인 버전관리 (Github), 코드 리뷰 등을 모두 가져올 수 있어 편리해진다.
`,
};
