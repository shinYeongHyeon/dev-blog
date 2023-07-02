import { IPost } from './interfaces/IPost';
import { GOLANG_TOUR } from './presentationals/Series';
import { GOLANG } from './presentationals/Tags';

export const goSettingsAndVars: IPost = {
    title: 'Golang Settings & Vars',
    path: 'goSettingsAndVars',
    contents: `
# Settings And Vars

Go 언어 개발시 특징이 다른 언어와 다르게 디렉토리를 맘대로 가져갈 수 없다는 것이다.
(Mac 기준) *~/go* 디렉토리 안에서 진행해야 한다. (*GO_PATH* 라고 한다).
[Go 를 설치](https://golang.org)하면 자동으로 생성이 된다는데 나는 안돼서 직접 만들었다.

구조는 main.go 가 Entry point 이기에 필수이며 (컴파일 할 경우에 !) 메인 함수가 필수 이다.
또한, package 도 파일별로 필수이다. main 을 살펴보면 기본구조가 아래와 같다.

\`\`\`go
package main func main() {}
\`\`\`

기본 제공되는 라이브러리 중 *fmt* 를 가장 먼저 접하게 되는데 (Hello World 찍어봐야지)
사용 방법을 보자면 아래와 같다.
\`\`\`go
package main import "fmt"

func main() {
  fmt.Println("Hello World")
}
\`\`\`

*Println* 함수명을 보면 대문자로 시작하는데, 함수를 export 하려면 무조건 대문자로 시작해서 export 하고
사용도 대문자로 시작하여야 한다.

# 변수 & 상수

다른 언어와 똑같이 변수와 상수가 존재하는데 전 포스팅에서 장점으로 말했 듯 Type 이 필요하다.
예제를 보면 이해가 될 것이기에 별다른 설명은 생략한다. 또한, 변수 생성에 축약 버전도 존재하는데 \`:=\` 를 사용하면 된다.
이 때에는 Type 을 명시 해주지 않는데, 이는 Go 가 알아서 찾아주며 이후에 다른 Type 이 들어오면 에러를 뱉어내준다. (Oh..?)
이에 대한 공식 명칭은 *short assignment statement* 이다.
\`\`\` go
const name string = "den"
var gender string = "M"
age := 30
age = 31 // to be ERROR !
\`\`\`
`,
    listContents: `Go 를 세팅하는 법과 변수/상수에 대해 알아보자
Go 는 타입을 강력하게 정의하기 때문에, typescript를 좋아하는 나에게는 너무 좋다.`,
    datetime: '2021년 01월 30일 13시 52분',
    tags: [GOLANG],
    seriesId: GOLANG_TOUR,
};
