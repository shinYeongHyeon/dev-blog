import { IPost } from './interfaces/IPost';
import { GOLANG } from './presentationals/Tags';

export const GoCodeCompile: IPost = {
    title: 'Go 코드 컴파일에 대해서 (feat. static linking)',
    path: 'GoCodeCompile',
    contents: `
Go 의 장점으로 static linking 에 대해서 간략하게 얘기해 본적이 있고, build 에 대해서도 간략하게 본 적이 있어서, 이번에 그에 관한 포스팅을 진행하고자 한다.

**Go 코드를 어떻게 컴파일 하는지에 대해서 알아보자.**

Go 는 컴파일 하는데 Graphic Application 은 따로 필요하지 않고 파일의 이름에 대해서도 영향을 받지 않는다. 단지, 단 하나의 main() function 만 존재하면 되고, 시작점이기 때문에 오직 하나만 main 이 가능하다.

**aSourceFile.go** 파일을 아래와 같이 만들었다고 가정하자.

\`\`\`
package main

import "fmt"

func main() {
    fmt.Println("This is a sample Go program!")
}
\`\`\`

굉장히 간단한 코드이다. 해당 파일은 **go run aSourceFile.go** 로 실행해보면 콘솔에 **This is a sample Go program!** 를 찍어주는 간단한 프로그램이다.  
이를 statically linked executable file (.exe) 파일로 만들려면 **build** 명령어를 활용하여야 한다.

\`\`\`
go build aSourceFile.go
\`\`\`

위 명령어를 입력하면 아리 사진과 같이 aSourceFile.exe 파일이 생성된다.

![R1280x0-5](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/03dcff91-7875-42bd-bffe-0d87c6ddd3de)

파일의 크기를 보면 굉장히 큰 것을 볼 수 있다. 이는 statically linked 됐기 때문이고, 이 것이 의미하는 바는 저 파일을 실행하는데 있어 어떠한 외부 라이브러리도 필요없다는 뜻이다.

\\* 해당 포스팅은 Mastering GO 를 번역해가며 실습하는 과정에서 배운 것을 적은 것이다.`,
    listContents: `Go 의 장점으로 static linking 에 대해서 간략하게 얘기해 본적이 있고, build 에 대해서도 간략하게 본 적이 있어서, 이번에 그에 관한 포스팅을 진행하고자 한다.`,
    datetime: '2021년 02월 08일 00시 10분',
    tags: [GOLANG],
};
