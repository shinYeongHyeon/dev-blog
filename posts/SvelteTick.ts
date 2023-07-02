import { IPost } from './interfaces/IPost';
import { SVELTE } from './presentationals/Tags';

export const SvelteTick: IPost = {
  title: '반응성이 적용될 때까지 기다려, tick (LifeCycle)',
  path: 'SvelteTick',
  contents: `
LifeCycle 얘기할 때 tick 이 거론되기도 하는데, 나는 이걸 lifeCycle 에 넣어야 하나~ 애매하긴 하다.

**tick** 에 대해서 알아보자.

### 1. Svelte 에서의 반응성

Svelte 에서 반응성을 갱신하기 위해서는 할당연산자 (=) 를 사용해야 한다. 즉 변수에 값이 새로 대입되면 화면이 갱신된다는 것이다.

아래와 같은 코드가 있다고 보자

\`\`\`
<script>
  let name = 'man';

  function handler() {
    name = 'man ?';

    const h1 = document.querySelector('h1');
    console.log(h1.innerText); 
  }
</script>

<h1 on:click={handler}>Are you {name}</h1>
\`\`\`

화면에는 처음에 **Are you man** 이 표기가 돼있을텐데, 이곳을 클릭하면 **Are you man ?** 으로 바뀌게 된다.

h1 부분을 클릭하면 handler 가 작동되고 그 안에서 name 에 새로운 스트링을 할당 하게 되면서 반응성을 가지게 되고 화면이 갱신되게 된다.

그러면 로그를 찍는 부분 (console.log) 에서 Are you man ? 이 나오게 될 것 같지만, 실제로는 Are you man 이 나오게 된다.

그 이유로는 "**태스크를 완료하고 나서 화면이 갱신되도록 되어 있기 때문**"이다.

그렇다면 원하는 결과가 나오게 하려면 어떻게 해야 할까 ?

이때 활용하는 것이 **tick** 이다

### 2. [tick](https://svelte.dev/tutorial/tick)

tick DOM 업데이트가 완료 되고 Promise 객체를 반환한다.

그렇다면 원하는 결과를 뽑아 내줄 코드를 작성해보자

\`\`\`
<script>
  import { tick } from 'svelte';
  
  let name = 'man';

  async function handler() {
    name = 'man ?';

    await tick();

    const h1 = document.querySelector('h1');
    console.log(h1.innerText); 
  }
</script>

<h1 on:click={handler}>Are you {name}</h1>
\`\`\`

tick 을 통해 DOM 업데이트를 보장해줄때까지 기다린다. 그리고 그 다음이 실행되기 때문에 원하는 결과가 나올 것이다 !
`,
  listContents: `LifeCycle 얘기할 때 tick 이 거론되기도 하는데, 나는 이걸 lifeCycle 에 넣어야 하나~ 애매하긴 하다.`,
  datetime: '2021년 06월 20일 01시 00분',
  tags: [SVELTE],
};
