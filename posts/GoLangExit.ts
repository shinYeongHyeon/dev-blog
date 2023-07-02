import { IPost } from './interfaces/IPost';
import { GOLANG } from './presentationals/Tags';

export const GoLangExit: IPost = {
    title: 'runtime.Goexit vs os.Exit',
    path: 'GoLangExit',
    listContents: `Golang 에서 프로그램을 종료하는 것에 대해서 알아보자`,
    datetime: '2021년 08월 15일 19시 16분',
    tags: [GOLANG],
    contents: `
Golang 에서 프로그램을 종료하는 것에 대해서 제일 처음 알게 되는 것이 아마도 **os.Exit()** 일 것이다.  
그러나, 오늘은 다른 종료 메소드인 **runtime.Goexit()** 과 비교하면서 둘의 차이점에 대해서, 그리고 runtime.Goexit() 를 써야하는 경우에 대해서 알아보자.

---

## 1. [os.Exit](https://pkg.go.dev/os@go1.16.7#Exit)

> Conventionally, code zero indicates success, non-zero an error. The program terminates immediately; deferred functions are not run.

공식 문서를 살펴보면, Exit 의 아규먼트로 0을 주면 성공, 아닌 경우에는 에러라고 한다. 그리고 그 뒤에 말이 중요한데, 프로그램을 **즉시** 종료한다고 한다. **deferred** function 들은 무시한채, 이 말은 **defer** 로 걸어놓은 함수들이 실행이 안 된다는 것이다.  
그렇다면 **runtime.Goexit()** 은 어떨까 ?

## [2. runtime.Goexit](https://pkg.go.dev/runtime#Goexit)

문서를 살펴보면 **고루틴** 에 초점을 맞춰서 설명하고 있다. 풀어보자면 해당 메소드를 호출하면 그것을 호출하는 고루틴을 종료를 하는데, 종료 전에 지연된 (deferred) 함수를 실행한다고 한다. 이 말인 즉슨, 종료전에 defer 함수들이 모두 실행이 된다는 것이다.

## 3. 그럼 어디에 ?

그럼 이것을 어디에 쓰느냐 하면, 나의 경우 DB 를 종료하는데 쓴다.  
프로그램이 종료 전에 디비를 종료해주는 것은 중요한 일이다, 풀관리에서도.  
그렇기 때문에 디비가 곧 서비스인 경우에는 서비스를 종료시에 디비종료에 사용하면 좋다`,
};
