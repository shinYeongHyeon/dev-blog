import { IPost } from './interfaces/IPost';
import { JAVASCRIPT } from './presentationals/Tags';

export const Immutability: IPost = {
    title: '불변성과 가변성',
    path: 'Immutability',
    contents: `  
불변성 (Immutability) 이란, 문자 그대로 변하지 않는 것을 의미한다,  
**let a = 1** 란 것을 보면, a 라는 변수에 1을 대입하는 건데, 여기서 1은 원시데이터 이다.

### 1. 원시데이터 (Primitives) 와 불변성

원시데이터는 대표적으로 **Number, String, Boolean, Null, Undefined, Symbol** 등이 있으며, 이 **원시데이터(타입)은 불**변하다.  
그래서 **let a = 1**를 할때, 1이 메모리에 들어가게 되고 a 라는 변수는 1 의 메모리주소를 참조할 뿐이다.

여기서 **let b = a** 를 하면, b는 a 가 바라보고 있는 메모리를 같이 바라보게 된다.  
근데 여기서 **a = 3** 을 하게 되면, 3 이 새로운 메모리에 들어가고 a 는 3이 들어간 메모리주소를 참조하게 된다.

(b는 그대로)

  
이것이 불변성이다.

여기서 다시 **b = 5** 를 하게 되면 5가 새로운 메모리에 들어가고 b 는 그 메모리주소를 참조하게 된다.  
이렇게 되면 1 이 들어간 메모리는 쓸모가 없게되는데, 특정 상황이 되면 **GC (Garbage Collection)** 가 메모리에 있는 내용을 지워주게 되고 다시 쓸 수 있게 된다.

### 2. 객체데이터와 가변성

\`\`\`
let a = {
  k : 1,
};
let b = a;

a.k = 2;
\`\`\`

여기서 중괄호가 감싸고 있는, 즉 a에 할당된 것을 객체라고 한다. javascript 객체는 Object, Array, Function, Map, WeakMap, Set 등이 있다. 이 데이터들은 가변한다 (Mutable).   
  
1처럼 본다면, **{ k : 1 }** 객체는 메모리에 할당이 되고 a는 그곳을 바라보게 되고, b 도 같이 바라보게 된다.  
그 뒤에 a.k = 2 를 실행하게 되면 해당 메모리내에서 변경이 된다. 그렇기 때문에 b 도 같이 변하게 된다.

![R1280x0-18](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/f9eb17d8-1e99-4a80-9213-b187f5f4a6ba)

(중간에 빨간 줄은 무시)`,
    listContents: `불변성 (Immutability) 이란, 문자 그대로 변하지 않는 것을 의미한다,`,
    datetime: '2021년 06월 20일 00시 35분',
    tags: [JAVASCRIPT],
};
