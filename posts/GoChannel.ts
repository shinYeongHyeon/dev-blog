import { IPost } from './interfaces/IPost';
import { GOLANG_TOUR } from './presentationals/Series';
import { GOLANG } from './presentationals/Tags';

export const GoChannel: IPost = {
    title: 'Go Channel',
    path: 'GoChannel',
    contents: `
**Channel** 은 데이터를 주고 받는 통로라고 볼 수 있다.  
make 를 통해 선언을 한다

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
    listContents: `Go 동시성의 핵심인 Channel에 대해 알아본다. make로 채널을 선언하고 goroutine과 함께 채널 연산자로 데이터를 주고받는 방법을 간단한 예제 코드로 살펴본다.`,
    datetime: '2021년 01월 31일 01시 50분',
    tags: [GOLANG],
    keywords: ['go', 'golang', 'channel', 'goroutine', '채널', '고루틴', '동시성', 'make'],
    seriesId: GOLANG_TOUR,
};
