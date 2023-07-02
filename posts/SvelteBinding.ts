import { IPost } from './interfaces/IPost';
import { SVELTE } from './presentationals/Tags';

export const SvelteBinding: IPost = {
  title: '일반요소 바인딩 : this, 입력요소 바인딩 : group',
  path: 'SvelteBinding',
  listContents: `특정 버튼을 클릭하여서, Input Element 을 나타나거나 사라지게 하고 나타났을 때, 포커스가 가게하는 코드를 작성해보자.`,
  datetime: '2021년 06월 26일 11시 46분',
  tags: [SVELTE],
  contents: `
특정 버튼을 클릭하여서, Input Element 을 나타나거나 사라지게 하고 나타났을 때, 포커스가 가게하는 코드를 작성해보자.

\`\`\`
<script>
  import { tick } from 'svelte'

  let isShow = false

  async function toggleShow() {
    isShow = !isShow
    await tick()
    const inputElement = document.querySelector('input')
    inputElement && inputElement.focus()
  }
</script>

<button on:click={toggleShow}>Show Input !!</button>

{#if isShow}
    <input />
{/if}
\`\`\`

일반적으로 svelte 에서 위와 같이 작성이 가능하다.

버튼을 누르면 toggleShow 함수가 실행이 되고, 해당 함수에 반응성을 가질 수 있는 데이터를 갱신하고, 갱신한 화면이 적용 될때까지 기다리게 **tick** 함수를 사용해주고 **input을 찾는 쿼리를 실행해주고, 찾은 input 을** 포커싱해준다, 는게 코드의 내용이다.

다만 여기서, **input을 찾는 쿼리를 실행해주고, 찾은 input 을** 에서 DOM 전체를 돌며 엘리먼트를 찾는게 생각보다 불필요한 작업이라면 ? 이를 없앨 수 있다면 좋지 않을 까 ?

그를 해결해주는 svelte의 용법이 **this** 이다

### 1\\. 일반요소 바인딩 (this)

미리 element 에 this 키워드를 통해 양방향 바인딩을 해주는 것이다.

코드로 보겠다

\`\`\`
<script>
  import { tick } from 'svelte';

  let isShow = false;
  let inputEl;

  async function toggle() {
    isShow = !isShow;
    await tick();
    inputEl && inputEl.focus();
  }
</script>

<button on:click={toggle}>Edit!</button>
{#if isShow}
    <input bind:this={inputEl} />
{/if}
\`\`\`

코드를 보면 inputEl 변수를 미리 선언한 뒤에 input 태그에 bind:this 을 통해 양방향 바인딩을 진행한다,

이러면 inputEl 변수에 이미 해당 input 이 바인딩이 진행이 돼있는 것이고, 이를 통해 Element 를 찾는 수고를 덜 수 있다!

### 2. 입력요소 바인딩 (group)

일반적인 this 바인딩과 달리, 입력요소 바인딩이라 불리은 **group** 이 있다. 이를 간단하게 알아보기 위한 코드를 보자

\`\`\`
<script>
    let languages = ['C', 'C++', 'Python'];
    let learned = [];
</script>

<strong>Learned: {learned}</strong>
{#each languages as language}
    <label>
        <input type="checkbox" value={language} bind:group={learned} />
        {language}
    </label>
{/each}
\`\`\`

위 초기 실행 화면이 아래와 같다.

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/60cb4883-07d9-444f-9445-6cc45384dff9)

여기서 각 항목들을 선택하면 어떻게 될까?

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/40d893b4-e78f-45d1-84d3-cbb198950bea)

위 화면 같이 나오게 되는데, 이해가 빠른편이라면 코드와 해당 사진들을 보고 이해가 됐을 것이다.

input 에 value 에 language 데이터를 넣으면서 양방향 데이터가 아닌 단방향데이터 바인딩을 진행을 하였고, 그 다음에 **bind:group** 을 통해서 learned 데이터를 넣게 되었다.

이 의미는 input 을 통해 선택 된 것들을 learned 데이터에 밀어 넣겠다는 뜻이 된다 !
`,
};
