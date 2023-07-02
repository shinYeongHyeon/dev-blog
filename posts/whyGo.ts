import { IPost } from './interfaces/IPost';
import { GOLANG_TOUR } from './presentationals/Series';
import { GOLANG } from './presentationals/Tags';

export const whyGo: IPost = {
    title: 'Why GOLANG ?',
    path: 'whyGo',
    contents: `
# Why Golang ?

갑자기 Go 언어를 배워보고자 하는 욕구가 뿜뿜하였다.
Go 에 대해서 여러 아티클이나 영상을 접하다 보니 가장 큰 장점을 속도가 겁나 빠르다 인데, 이 매력에 이끌리게 되어서, 좀 더 찾아보고 내가 배워야 할 이유가 충분하더라.

1. 빠르다  
 Go Lang 의 장점을 찾아보면 가장 먼저 Python 과 비교를 하는 아티클을 많이 보게 되는데 속도가 너무 차이가 난다는 것이다. 믿을 수 없을 정도로 빠르다고, 유튜브를 조금만 봐도 나오는 수준… 그리고 컴파일 언어라고 한다.

2. 정적 언어  
 Type 강제하는가 너무 좋아

3. Python 과 C 를 쏙쏙  
 Python 과 C 의 좋은 점들을 뽑아 디자인 됐다 한다, 그래서 포인터도 있고, C 처럼 자료구조를 만들기도 쉽다더라!

4. 동시성 지원  

5. Garbage Collection 지원  
 가비지 컬렉션을 지원해주기 때문에 메모리 할당과 해제에 대해서 신경쓰지 않아도 된다.

6. Static linking 기본 지원  
 기본적으로 static linking 이 지원되기 때문에 binary file 을 생성할수 있고, 이식성이 좋다. 빌드가 성공하고 파일이 생성만 되면 의존성 및 라이브러리 버전등 신경쓰지 않고 사용할 수 있게된다!

7. 갓-글  

물론 단점들도 있고, 익히 듣기도 했지만, 단점이 없는 게 어디 있으랴, 일단 많이 배워보자!`,
    listContents: `갑자기 Go 언어를 배워보고자 하는 욕구가 뿜뿜하였다. \n
Go 에 대해서 여러 아티클이나 영상을 접하다 보니 가장 큰 장점을 속도가 겁나 빠르다 인데, 이 매력에 이끌리게 되어서, 좀 더 찾아보고 내가 배워야 할 이유가 충분하더라.`,
    datetime: '2021년 01월 30일 13시 25분',
    tags: [GOLANG],
    seriesId: GOLANG_TOUR,
};
