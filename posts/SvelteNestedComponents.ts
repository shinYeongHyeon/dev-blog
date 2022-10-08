import { IPost } from './IPost';
import { SVELTE_TOUR } from './presentationals/Series';
import { SVELTE, TRANSLATION } from './presentationals/Tags';

export const SvelteNestedComponents: IPost = {
    title: 'Nested Components',
    path: 'SvelteNestedComponents',
    contents: `
React 에서도 Component 를 사용하고, 당연히 Svelte 에서도 Component 를 사용한다.  
프론트엔드 프레임워크에서 가장 기본적으로 볼 수 있기 때문에 포스팅을 먼저 진행해본다.  
내가 React를 Deep 하게 해보진 않아서 모르는 걸 수도 있는데, component 를 만들고 가져다 쓴다고 하더라도 스타일이 적용되지는 않더라,  
또한 html 코드 자체를 rendering 해야 하는 경우도 있는데 이때는 **@html**이 필요하다.  

\`\`\`svelte
<!-- App.svelte -->
<script>
    import Nested from "./Nested.svelte";
    let string = \`this string contains some <strong>HTML!!!</strong>\`;
</script>

<style>
    p {
        color: purple;
        font-family: 'Comic Sans MS', cursive;
        font-size: 2em;
    }
</style>

<p>This is a paragraph</p>
<Nested />
<p>{@html string}</p>
\`\`\`

\`\`\`
<!-- Nested.svelte -->
<p>This is another paragraph.</p>
\`\`\`

<img src="aaa" />


이렇게 되면 내 생각에는 p 로 들어가기 때문에 스타일이 같이 적용될거라 생각했는데, Nested.svelte 에서 넘어온것은 먹히지 않더라  
또한 내포되는 component 는 대문자로 표기해야하는 규칙이 있다.  
주의할 것은, Svelte 는 {@html .. 안의 식을 검사하지 않기때문에, 이 기능을 사용할 경우 신뢰할 수 없는 원본의 HTML을 수동으로 escape 하는 것이 중요하다, 그렇지 않으면 사용자가 XSS 공격에 노출될 위험이 있습니다.
`,
    listContents: `Nested Components`,
    datetime: '2021년 01월 31일 20시 36분',
    tags: [SVELTE],
    seriesId: SVELTE_TOUR,
};
