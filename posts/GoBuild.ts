import { IPost } from './interfaces/IPost';
import { GOLANG_TOUR } from './presentationals/Series';
import { GOLANG, TRANSLATION } from './presentationals/Tags';

export const GoBuild: IPost = {
    title: 'Golang build & run with Args',
    path: 'GoBuild',
    contents: `
Golang 에서 서비스/어플리케이션 실행시에 Argument 들을 받는 방법에 대해서 알아보도록 하자

서비스를 실행시키는 대표적인 두 방법 Build 와 Run 각각 알아보도록 하려고 한다.

## 1\\. Run

\`\`\`
// stdOut.go
package main

import (
    "fmt"
    "os"
)

func main() {
    myString := ""
    arguments := os.Args
    if len(arguments) == 1 {
        myString = "Please give me one argument !"
    } else {
        myString = arguments[1]
    }

    //fmt.Println(arguments)
    fmt.Println(myString)
}
\`\`\`

위 파일을 \`go run stdOut.go\` 로 실행하면 \`Please give me one argument !\` 로 출력이 된다.  
Args 를 넘기려면 실행문 뒤에 스트링을 붙이면 되는데 예를 들어 \`go run stdOut.go abcd 1\` 와 같이 실행하게 되면 출력은 **\`abcd\`** 가 된다.

  
그런데 이상하지 않은가 ? 배열 접근을 \\[1\\]로 하는데 왜 abcd 가 출력이 되는지..?  
그래서 주석문을 풀고 arguments 를 보면

![R1280x0-7](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/6d74acd9-4f10-4b41-ad60-83975cb74e96)

args 의 첫번째는 이미 채워져 있는 것을 볼 수 있다. 그래서 조건문의 첫번째도 길이가 1인 경우를 체크한다.

이는 실행시 argument가 아무것도 들어오지 않은 것을 의미하기 때문이다.

## 2\\. Build

위 파일을 빌드 \`go build stdOut.go\` 로 빌드 해보자. 빌드한 파일에 인자를 넘기는 방법도 동일하다.

빌드할때가 아닌 실행할때 \`./stdOut abcd 1\` 과 같이 넘기면 동일한 결과가 나오게 된다.

근데 첫번째 인자는 다른것을 보니, 실행 방법에 따라 인자값이 달라진다.

![R1280x0-8](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/8933c6dd-21ff-4625-83a9-0978e8742f59)

이상으로 golang 의 서비스를 실행할 때 인자를 넘기는 방벙베 대해서 알아보았다.

  
_해당 포스팅은 Mastering Go 원서를 번역 및 실습해본 결과를 포스팅한 것이다._`,
    listContents: `Golang 에서 서비스/어플리케이션 실행시에 Argument 들을 받는 방법에 대해서 알아보도록 하자
서비스를 실행시키는 대표적인 두 방법 Build 와 Run 각각 알아보도록 하려고 한다.`,
    datetime: '2021년 02월 13일 14시 42분',
    tags: [GOLANG, TRANSLATION],
    seriesId: GOLANG_TOUR,
};
