import { IPost } from './IPost';
import { GOLANG_TOUR } from './presentationals/Series';
import { GOLANG } from './presentationals/Tags';

export const GoChannel: IPost = {
    title: 'Go Channel',
    path: 'GoChannel',
    contents: `
**Channel** 은 데이터를 주고 받는 통로라고 볼 수 있다.  
make 를 통해 선언을 한다

type job struct { title string salary int } func main() { c := make(chan job) }

\`\`\`
type job struct {
  title string
  salary int
}

func main() {
  c := make(chan job)
}
\`\`\`

채널로 값을 전달해준고 받는다고 보면 된다.

\`\`\`
// 넘기기 (받기전용) chan<- {type}
func receive(channel chan<- job) {

  // 전달
  channel <- job{
    title: "test",
    salary: 1000000
  }
} 
\`\`\`

\`\`\`
// goroutine
go receive(c)

// 데이터 받기
received <-c
\`\`\`

for 문으로도 쓸 수 있다.`,
    listContents: `Go 에서 어떻게 보면 큰 핵심 중 하나라고 볼 수 있는 Channel 에 대해서 알아보자`,
    datetime: '2021년 01월 31일 01시 50분',
    tags: [GOLANG],
    seriesId: GOLANG_TOUR,
};
