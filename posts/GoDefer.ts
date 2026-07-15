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
    listContents: `Go의 defer는 해당 라인에서 바로 실행되지 않고 스택에 쌓였다가 함수가 끝날 때 후입선출로 실행된다. defer 시점의 변수 값이 유지되는 이유와 for문 안 defer의 실행 순서를 예제로 알아본다.`,
    datetime: '2021년 01월 31일 01시 28분',
    tags: [GOLANG],
    keywords: ['go', 'golang', 'defer', '스택', '후입선출', 'LIFO', 'go defer 실행 순서', 'go 함수'],
    seriesId: GOLANG_TOUR,
};
