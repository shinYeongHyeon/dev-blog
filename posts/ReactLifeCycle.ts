import { IPost } from './interfaces/IPost';
import { REACT } from './presentationals/Tags';

export const ReactLifeCycle: IPost = {
    title: 'React Component 생명주기',
    path: 'ReactLifeCycle',
    contents: `
깃헙 블로그를 만들어보면서 제대로 공부를 시작하기로 했고, 그 일련의 작업들로 기초부터 다지고 있다.

그래서, ReactJS 를 공부를 시작했는데 그 시작에 앞서 ReactJS 에서 가장 많이 사용되는 거로 알고 있는 **Component**의 생명주기에 대해서 알아보자.

핵심은 **render()** 함수 인데, 이 함수가 가상돔에 HTML 코드를 써준다 라고 생각하면 된다.

ReactJS 의 개념? 이라고 이해했다.

**render()** 를 기준으로 전/후로 나뉘고, 간략하게 표현하자면 **_mount -> render -> mounted_** 와 같다.

(unmount 는 제외하고.)

이를 함수로 자세히보자면 마운트되면서 **constructor()** 가 **render()** 되기전에 실행되며, **render()** 되고 나면 **componentDidMount()** 가 실행된다. 글자 그대로 **마운트 되고 나서~** 이다.

가장 기초적인 것들을 알아보았고,  
이번에는 **Updating**과 **State** 에 대해 알아보도록 하자.  

ReactJS 에서는 **State** 라는 것을 가지고 있는데, 이 아이는 유동적인 데이터를 사용할 때 써먹는다.

기본적으로

\`\`\`
this.state = {};
\`\`\`

위와 같이 사용을 하는데, 이는 private 처럼 사용해야한다, 직접 조작해서는 안되는 뜻!  
변경이 필요할 때는 마치 다른 클래스의 setter 를 사용하듯 **setState** 메소드를 활용해주어야 한다.  
그 이유는 **Updating**과 관련이 있는데, state 가 변경될때마다 ReactJS는 렌더링을 다시 하는데,  
**setState** 메소드를 사용하지 않는다면 이 부분을 감지 못하므로 re-렌더링이 이뤄지지 않는다.

그래서 위 설명에서 말했 듯, **Updating**은 **State** 혹은 **props**가 변화할때 이뤄진다.  
이때 기타 메소드들이 호출 된 후 ([자세한 것은 이리로](https://ko.reactjs.org/docs/react-component.html)) **render()** 과 호출되고 **componentDidUpdate()** 가 호출된다.  
**componentDidUpdate()** 는 유용하게 사용 가능한 **props** 들을 제공해주는데, **prevProps, prevState, snapshot** 을 제공해준다.  
  
전 상태를 비교할 수 있다는 것!`,
    listContents: `React 의 생명주기에 대해서 알아보도록 하자`,
    datetime: '2021년 01월 31일 01시 52분',
    tags: [REACT],
};
