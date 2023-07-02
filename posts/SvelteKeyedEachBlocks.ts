import { IPost } from './interfaces/IPost';
import { SVELTE_TOUR } from './presentationals/Series';
import { SVELTE } from './presentationals/Tags';

export const SvelteKeyedEachBlocks: IPost = {
  title: 'Svelte 에서의 Keyed Each blocks',
  path: 'SvelteKeyedEachBlocks',
  contents: `
Svelte Tutorial 을 하나 씩 진행 중에 있는데, Keyed each blocks 라는 부분이 있고 해당 튜토리얼에 대해 포스팅을 하고자 한다.

Svelte 에서 each 는 {#each 로 시작한다.

\`\`\`
<!-- App.svelte --> 
<script>
    import Thing from './Thing.svelte';

    let things = [
        { id: 1, color: 'darkblue' },
        { id: 2, color: 'indigo' },
        { id: 3, color: 'deeppink' },
        { id: 4, color: 'salmon' },
        { id: 5, color: 'gold' }
    ];

    function handleClick() {
        things = things.slice(1);
    }
</script>

<button on:click={handleClick}>
    Remove first thing
</button>

{#each things as thing}
    <Thing current={thing.color}/>
{/each}
\`\`\`

\`\`\`
<script>
    // \`current\` is updated whenever the prop value changes...
    export let current;

    // ...but \`initial\` is fixed upon initialisation
    const initial = current;
</script>

<p>
    <span style="background-color: {initial}">initial</span>
    <span style="background-color: {current}">current</span>
</p>

<style>
    span {
        display: inline-block;
        padding: 0.2em 0.5em;
        margin: 0 0.2em 0.2em 0;
        width: 4em;
        text-align: center;
        border-radius: 0.2em;
        color: white;
    }
</style>
\`\`\`

이렇게 된 경우 첫 화면은 아래와 같이 구성이 된다.

![R1280x0-2](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/4f32a548-bad1-4811-b28d-0caaacde7044)

여기서 버튼을 클릭하면 맨 첫번째 칸이 모두 지워질 것이라 예상했다, 그러나 결과는 달랐다.

![R1280x0-3](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/e266bd8b-e497-4203-b26d-42d33ee56a23)

결과는 위와 같이 initial 은 노랑색이 사라졌고 current 는 dark blue 가 사라졌다. current 만이 우리가 원하는 방식으로 동작한 것이다. 그렇다면 initial 은 왜 이렇게 동작이 되었을까?

바로 component 가 이미 초기화가 돼있어서 그런 것인데, 이 때 컴포넌트가 변화하지 않는다고 생각하면 새로 생성하지 않는 것처럼 보인다.

Thing.svelte 에서 **const initial = current** 구문이 초기화 시에만 current 로 들어가있고, 그것은 순서대로 되어있기 때문이다. 그렇다면 우리의 의도대로 동작하게 하려면 어떻게 해야할까 ?

아이디를 심어주면 된다.

바로 each 부분에 **_#each things as thing (thing.id)_** 혹은 _**#each things as thing (thing)**_ 이렇게 작성을 해주면 component 생성시에 해당 아이디로 세팅이 되어서 해당 아이디 (키) 를 찾아서 DOM 을 변경 하는 것 같다.

혹은 조금 trick을 써서 Thing.svelte 에서 [이전 포스팅](https://shinyeonghyeon.co.kr/posts/SvelteStatement)에서 배운 $: 를 활용하여 _**$: initial = currnet;**_ 로 해주어도 해당 예제에서는 똑같이 동작은 한다.
`,
  listContents: `Svelte 에서의 Keyed Each blocks`,
  datetime: '2021년 02월 02일 20시 13분',
  tags: [SVELTE],
  seriesId: SVELTE_TOUR,
};
