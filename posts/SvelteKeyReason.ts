import { IPost } from './interfaces/IPost';
import { SVELTE } from './presentationals/Tags';

export const SvelteKeyReason: IPost = {
  title: '반복 블록에서 key 를 사용하는 이유 (feat. Key 블록)',
  path: 'SvelteKeyReason',
  listContents: `삭제되지 않은 것들을 새로 렌더링할 없을텐데, 어떻게 해야 할까 ?`,
  datetime: '2021년 06월 27일 15시 29분',
  tags: [SVELTE],
  contents: `
배열의 항목을 보여주고, 삭제하는 코드에 대해서 보도록 하자.

\`\`\`
<script>
    let fruits = ['Apple', 'Banana', 'Cheery', 'Orange'];

    function deleteFirst() {
      fruits = fruits.slice(1);
    }
</script>

<button on:click={deleteFirst}>Delete First Fruit !</button>

<ul>
    {#each fruits as fruit}
        <li>{fruit}</li>
    {/each}
</ul>
\`\`\`

위와 같이 작성이 된다.

이 부분에 대해서 자세히 알아보고자 하는데, 여기서 **단점**이 있다.

배열의 내용이 바뀌고 할당연산자를 통해서 화면이 갱신되게 되는데 아래 동영상을 보면, 하나를 삭제할때마다 **li** 태그 반복내용이 전체가 바뀌게 된다.

[영상보러가기](https://tv.kakao.com/v/420278607)

어찌보면 당연하지만, 비효율적이다. **삭제되지 않은 것들은 새로 렌더링할 필요가 없으니 ..!**

그럼 굳이 새로 렌더링 하지 않으려면 어떻게 해야 할까 ?

**key** 를 활용하면 된다 !

### Key

Key 는 고유하면 되고, 추천되는 것은 String과 Number 이다. 위 예제코드에서는 배열의 각 요소 값들이 모두 고유하기 때문에 각 값들로 키를 설정할 수 있다. key 설정하는 것을 코드로 보자.

\`\`\`
<ul>
    {#each fruits as fruit (fruit)}
        <li>{fruit}</li>
    {/each}
</ul>
\`\`\`

위 코드와 같이 **each** 문 뒤에 소괄호를 열고 **key** 값을 넣어주면 끝이다.

이렇게 되면 변경된 요소만 렌더링되고 나머지는 그대로이다 ...! 영상은 길이 길어지니 생략하도록 하겠다.

**key 를 주는것을 습관화하도록 하자..!**

\* 주의해야할 것은 Key 블록이란 것이 있는데, **Key 블록은 연결된 데이터의 값이 변경될때마다 내용을 파괴하고 다시 생성한다.**

\`\`\`
<script>
    import Count from './Count.svelte';

    let reset = false;
</script>

{#key reset}
    <Count />
{/key}

<button on:click={() => reset = !reset}>
    Reset!
</button>
\`\`\`

위와 같은 코드가 있다고 하면, 버튼을 누를때마다 reset 값이 변경되기때문에 Count Component 가 매번 제거되고, 새로 생성되게 된다 ! (유효기간/시간 활용에 유용하지 싶다!)
`,
};
