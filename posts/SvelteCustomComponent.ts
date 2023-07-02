import { IPost } from './interfaces/IPost';
import { SVELTE } from './presentationals/Tags';

export const SvelteCustomComponent: IPost = {
  title: 'Custom component 만들기 ($$restProps, dispatch)',
  path: 'SvelteCustomComponent',
  listContents: `오늘은 Custom Button 을 만들어보고자 한다.`,
  datetime: '2022년 04월 04일 22시 29분',
  tags: [SVELTE],
  contents: `
오늘은 Custom Button 을 만들어보고자 한다.

UI를 만들다 보면, 컴포넌트를 만들텐데 만들고자 하는 서비스에 따라서 Custom Component 를 만들고자 하는 니즈가 생길 것이다.

오늘은 Custom Button 을 만들기 위한 핵심 기능 두가지를 알아보고자 한다.

### **1. $$restprops**

Element 들이 가지는 기본 속성들이 있고,

더 나아가 UI Library 를 사용하다 보면 그 곳에서 활용할 수 있는 **props** 들이 있을 것이다.

예를 들어, [attraction Library](https://illright.github.io/attractions/) 를 보면, **Button** 에서 **filled**, **outline** 등 여러가지 속성을 활용할 수 있는 데, Library 그대로 사용하는 것이 아닌 Custom 을 하고자 한다면 어떻게 해야 할까.

아래 코드를 보자.

\`\`\`
// MyButton.svelte
<script>
    import { Button } from 'attractions';

    export let message = '';
</script>

<Button {...$$restProps} style="margin: 0">{message}</Button>
\`\`\`

나 같은 경우는 attraction 의 **Button** 에서 margin 을 빼고 싶었다.

그래서 style 을 지정해 주었는데, 해당 컴포넌트를 단순하게 style만 지정해주어

**<MyButton filled message='Hello' />** 이렇게만 사용하면, **filled** 등이 먹지 않는다.

이를 가능하게 해주는 것이 **{...$$restProps}** 부분인데,

이는 나머지 **props**, 즉, 속성들을 넘겨준다는 의미로 해석하면 된다.

여기까지 간단하게 속성을 넘기는 방법에 대해서 알아보았다.

이제 **on:click** 을 하려고 하면 **이건 또 안돼..!**

이걸 하기 위해서는 **dispatch** 를 활용해야 한다.

### **2. disaptch**

**disaptch** 는 간단하게, 커스텀 이벤트를 가능하게 해준다.

_백문이 불여일견._

코드를 보자

\`\`\`
<script>
    import { createEventDispatcher } from 'svelte';
    import { Button } from 'attractions';

    const dispatch = createEventDispatcher();
    export let message = '';

    const onClick = () => {
        dispatch('click');
    };
</script>

<Button {...$$restProps} style="margin: 0" on:click={onClick}>{message}</Button>
\`\`\`

1 번에서 더 나아간 형태인데,

다른 점을 보면 svelte 에서 **createEventDispatcher** 를 import 하고

이를 이용해 **onClick** 함수를 사용하며, **click** 이벤트를 **dispatch** 한다.

이렇게 되면, svelte 에서 활용할 수 있는 **on:click** 이 사용 가능하게 된다.
`,
};
