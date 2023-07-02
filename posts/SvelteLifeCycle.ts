import { IPost } from './interfaces/IPost';
import { SVELTE_TOUR } from './presentationals/Series';
import { SVELTE } from './presentationals/Tags';

export const SvelteLifeCycle: IPost = {
  title: 'onMount, onDestroy (Svelte LifeCycle)',
  path: 'SvelteLifeCycle',
  contents: `
Svelte LifeCycle 은 아래와 같다.

![R1280x0-13](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/d1bbc875-70fa-48d2-a1ca-34f80b29b6bd)

이 중, onMount 와 onDestroy 에 대해서 알아보고자 한다.

onMount 는 간단하게 설명하면 Component 가 연결될 때 (화면에 보일때) 라고 생각하면 되고,

onDestroy 는 연결이 해제될때, 정확하게는 해제(분리)되기 직전이라고 생각하면 된다.

백문이 불여일견, 코드로 보도록 하자!

\`\`\`
<!-- App.svelte -->
<script>
  import Something from './Something.svelte';

  let toggle = false;
</script>

<button on:click={() => {toggle = !toggle}}>toggle</button>

{#if toggle}
    <Something />
{/if}
\`\`\`

\`\`\`
<!-- Something.svelte -->
<script>
    import { onMount, onDestroy } from 'svelte';

    // const h1 = document.querySelector('h1');
    // console.log(h1.innerText);

    onMount(() => {
      console.log("Mounted !");
      const h1 = document.querySelector('h1');
      console.log("In Mount : ", h1.innerText);

      return () => {
        const h1_ = document.querySelector('h1');
        console.log("Destroy In Mount", h1_.innerText);
      };
    });

    onDestroy(() => {
      console.log("Destroyed !");
      const h1 = document.querySelector('h1');
      console.log("In Destroy : ", h1.innerText);
    });

</script>

<h1>Something</h1>
\`\`\`

위 와 같이 App 파일에서 toggle Boolean 값에 따라 Something 컴포넌트를 사용하는 간단한 프로그램이 있다.

Toggle 버튼을 누를 때마다 Something 글자가 나타났다, 사라졌다를 반복할텐데 이 간단한 프로그램으로 onMount 와 onDestroy 에 대해서 쉽게 파악이 가능하다.

위 코드의 결과물 부터 보자.

![R1280x0-14](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/8c134895-97d0-4d8b-9575-b5d471b9200d)

위 결과물에서 볼 수 있듯이

1. **onMount** 는 연결이 될 때 실행된다.

2. **onDestroy** 는 해제되기 직전에 실행된다. "**직전**"이라고 알 수 있는 이유는 만약 해제가 되고 나서라면 onDestroy 함수 내에서 h1 을 찾아서 innerText 를 하는 구문에서 오류가 날 것이기 때문이다.

3. **onMount** 의 Return 은 onDestroy 와 같다고 보면 되고, 실행 순서는 조금 더 느리다. return 이 이런 역할을 하는 것은 svelte 초기에는 onDestroy 구문이 없기 때문이다. 둘 중 하나만 선택해서 사용하면 된다!.

4. 주석처리가 된 부분은 아래와 같은 에러가 난다. 그 이유는 **렌더링이 되기전**에 script 가 실행이 되기 때문이다 ! 그래서 h1 태그를 찾을 수가 없다!

![R1280x0-15](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/e30629ed-9e52-42ec-8e32-39d4cb851d0b)
`,
  listContents: `Svelte LifeCycle 중 onMount 와 onDestroy 에 대해서 알아보자`,
  datetime: '2021년 06월 12일 00시 55분',
  tags: [SVELTE],
};
