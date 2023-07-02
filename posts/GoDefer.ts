import { IPost } from './interfaces/IPost';
import { GOLANG_TOUR } from './presentationals/Series';
import { GOLANG } from './presentationals/Tags';

export const GoDefer: IPost = {
    title: 'Defer',
    path: 'GoDefer',
    contents: `
[이전포스팅](https://den-shin.tistory.com/12) 에서 끝날때 까지 끝나는게 아닌 함수 안의 **defer** 에 대해서 알아보았다.  
defer 를 함수 최상단에 써 두었었는데, 쉬운 이해를 위해서 그랬고 중간에 넣어도 진행이 가능하다.  
defer 는 해당 라인이 됐을 때 그저 스택에 쌓아 둔다.

\`\`\`go
func a() {
    i := 0
    defer fmt.Println(i)
    i++
    return
}
\`\`\`

위 함수의 결과물은 0 이다.

실행 자체는 return 후라서 1이 되어야 할 것 같지만, 스택에 쌓인 시점의 i의 값은 0이기 때문이다.

또한, 스택이기 때문에 후입선출이 된다.

\`\`\`go
func main() {
\tfmt.Println("counting")

\tfor i := 0; i < 10; i++ {
        defer fmt.Println(i)
\t}

\tfmt.Println("done")
}
\`\`\`go

위 코드의 결과물은 아래와 같다

\`\`\`
counting
done
9
8
7
6
5
4
3
2
1
0
\`\`\``,
    listContents: `이전에 알아보았던 Defer 에 대해서 더 알아보는 시간을 가져보자`,
    datetime: '2021년 01월 31일 01시 28분',
    tags: [GOLANG],
    seriesId: GOLANG_TOUR,
};
