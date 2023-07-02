import { IPost } from './interfaces/IPost';
import { GOLANG } from './presentationals/Tags';
import { GOLANG_TOUR } from "./presentationals/Series";

export const GoLangAssignment: IPost = {
    title: 'GoLang 변수 할당/생성 := and =',
    path: 'GoLangAssignment',
    listContents: `Go 에서 변수를 생성/할당하는데는 익히 알고 있듯 2가지 방법이 있다.`,
    datetime: '2022년 03월 02일 19시 43분',
    tags: [GOLANG],
    seriesId: GOLANG_TOUR,
    contents: `
Go 에서 변수를 생성/할당하는데는 익히 알고 있듯 2가지 방법이 있다.

**:=** 와 **=** 를 활용하는 것인데, 검색하면 쉽게 나오는 두 방식의 차이에 대해서 먼저 간단하게 설명해보면 아래와 같다.

### 1. =

\`\`\`
var a int = 5
\`\`\`

**var** 키워드로 변수임을 알려주고, 변수명을 작성하고, 타입을 작성한 뒤, 선택에 따라서 값을 할당해주면 된다.

### 2. :=

\`\`\`
a := 5
\`\`\`

1번의 예제와 동일한 효과를 짧게 내는 구문이다. **:=** 의 공식 명칭은 **short assignment stament** 이다.

그런데, 2번에는 원래 재할당이 되지 않는다.

재할당을 하는 경우에는 아래와 같은 에러를 보게 될 것이다.

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/d0c82837-cee0-4677-a95e-ada542aad839)

**:=** 의 왼쪽이 새 변수가 아니라는 뜻이다.

이 말인즉슨, 이미 선언된 변수에는 사용이 불가하다는 것인데, 2개, 3개 이상을 하는 경우에는 재 할당이 가능하다는 특이점이 있다.

\`\`\`
package main

import "fmt"

func main() {
    a := 2
    b := 3

    a, b, c := 12, 13, 14
    fmt.Println(a, b, c)
}
\`\`\`

위 코드의 결과는, **12 13 14** 이 출력이 되며 프로그램이 종료된다.
`
};
