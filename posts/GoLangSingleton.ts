import { IPost } from './interfaces/IPost';
import { GOLANG } from './presentationals/Tags';

export const GoLangSingleton: IPost = {
    title: 'Golang singleton pattern 과 init 함수',
    path: 'GoLangSingleton',
    listContents: `Singleton Pattern 은 가장 흔하게 볼 수 있는 디자인 패턴 중에 하나이다.`,
    datetime: '2022년 03월 08일 00시 17분',
    tags: [GOLANG],
    contents: `
Singleton Pattern 은 가장 흔하게 볼 수 있는 디자인 패턴 중에 하나이다.

정의를 간단하게 보자면 아래와 같다.

> 클래스를 하나의 객체로만 제한하는 것  
>   

간단하게 Go 코드로 보면 아래와 같다.

\`\`\`
type User struct {
 name string
}

var user *User

func init() {
    user = &User{name :"den"} 
}

func GetUser() *User {
    return user
}
\`\`\`

user 라는 변수는 init 이라는 함수안에서만 생성이 되고, GetUser 를 통해서만 접근이 가능한 코드이다.

Go 에서는 다른 패키지의 함수를 호출할 수 있는 조건이 대문자로 시작하는 경우이기 때문에

다른 패키지에서는 GetUser 만 호출이 가능하다.

그렇다면 **init** 은 패키지 안에서만 사용하느냐 인데

Singleton Pattern 을 사용하고 그 대상이 되는 파일 (원래는 클래스이나 Go는 클래스가 없어, 파일이라 하겠다) 은 고유한 패키지로 관리하는 게 낫다는 점에서 볼때, init 을 호출할 수 있는 곳은 없다.

_그럼 어떻게 하나 ?_

> 사실 이 **init** 은 특별한 능력이 있는 함수인데 package 가 **최초 로드 (import)** 될 때   
> **딱 한번** 실행을 자동으로 해주는 함수이다.

즉,

해당 파일을 import 할 때, 자동으로 실행이 되며,

그 횟수도 딱 한번으로 지정되기에 singleton pattern 에서 유용하게 사용이 가능하다.
`
};
