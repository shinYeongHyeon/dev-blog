import { IPost } from './interfaces/IPost';
import { SVELTE_TOUR } from './presentationals/Series';
import { SVELTE } from './presentationals/Tags';

export const SvelteEvent: IPost = {
    title: 'Svelte 에서 Event 그리고 modifier',
    path: 'SvelteEvent',
    contents: `
Svelte 에서 event 다루는 방법을 간단하게 알아보고 modifier 에 대해서도 알아보도록 한다.

\`\`\`
<script>
function handleClick() {
  alert('clicked')
}
</script>

<button on:click={handleClick}>
  Click me
</button>
\`\`\`

위의 코드는 버튼 클릭 시 마다 alert 창이 뜨게 된다.

그런데, 이를 한 번만 하고 싶은 경우가 있을 텐데, 보통은 변수로 따로 길게 처리를 진행해주어야 하는데 svelte 에서는 간단하게 처리가 가능하다.

\`\`\`
<button on:click|once={handleClick}>
    Click me
</button>
\`\`\`

once 를 추가하면서 딱 한번만 실행이 가능해진다, 참 여러군데 처리가 가능해보인다.  
다른 \`modifier\` 에 대해서도 알아보자  
<br>

---

<br>

-   **preventDefault**  
    핸들러 처리 전에 event.preventDefault() 를 실행해준다   <br><br>
-   **stopPropagation**  
    event.stopPropagation()을 호출하여 이벤트가 다음 요소에 도달하지 못하게 합니다. <br><br>
-   **passive**  
    터치/휠 event 에서 스크롤 성능을 개선해준다 (Svelte 가 안전하기 추가할 수 있는 위치에 자동으로 추가 해준다) <br><br>
-   **nonpassive**  
    passive 의 반대 <br><br>
-   **capture**  
    [버블 단계](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) 대신 캡처 단계에서 처리기를 작동시킵니다. <br><br>
-   **once** <br><br>
-   **self**  
    event.target이 element 자체인 경우에만 핸들러를 트리거 <br><br>`,
    listContents: `Svelte 에서 event 다루는 방법을 간단하게 알아보고 modifier 에 대해서도 알아보도록 한다.`,
    datetime: '2021년 02월 03일 22시 55분',
    tags: [SVELTE],
    seriesId: SVELTE_TOUR,
};
