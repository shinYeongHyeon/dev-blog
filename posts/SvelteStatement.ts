import { IPost } from './IPost';
import { SVELTE_TOUR } from './presentationals/Series';
import { SVELTE } from './presentationals/Tags';

export const SvelteStatement: IPost = {
  title: '$: 그리고 Statement',
  path: 'SvelteStatement',
  contents: `
\`\`\`
<script>
let count = 0;

function handleClick() {
  count += 1;
}
</script>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
\`\`\`

버튼을 클릭 시 마다 count 가 증가하고 그게 버튼에 반영돼 변하는 코드이다.

해당 개념은 React 던 Svelte 건 조금이라도 해보면 익숙할 것이다. 여기에서 더 나아가 count 가 변화할때마다 다른 변수가 변화하게 할 수 있다

\`\`\`
<script>
let count = 0;
$: doubled = count * 2;
    
function handleClick() {
  count += 1;
}
</script>

<button on:click={handleClick}>
Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>
\`\`\`

**$:** 를 활용하면 ([신기하게도 JS에 유효한 문법이라고 한다](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)) count 가 변경될때마다 double 도 변경되고 이에 따라 맨 아랫줄 p 도 변경이 된다. 더 나아가 뭉쳐있기도 가능하고 조건도 달 수 있다.

\`\`\`
<script>
    let count = 0;
    $: doubled = count * 2;
    $: console.log(\`1: the count is $\{count\}\`);
    $: {
        console.log(\`2: the count is $\{count\}\`);
        alert(\`I SAID THE COUNT IS $\{count\}\`);
    }
    $: if (count >= 10) {
        alert(\`count is dangerously high!\`);
        count = 9;
    }

    function handleClick() {
        count++;
    }
</script>

<button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>
\`\`\`

이렇게 되면 버튼이 클릭시마다 버튼이변경되고 아래 p도 변경이 되고 Console에 2개가 찍히게 되고, alert창도 뜨게 된다. 계속해서 누르다가 count 가 10이되면 "count is dangerously high!" alert창이 뜨게 되고 count 가 9로 조정되며 다시 doubled 와 콘솔 2개 "I SAID ..." alert 창이 뜨게 되는 굉장한 Reactive 한 액션이 이뤄진다 !

### Array

Svelte 의 Reactivity 는 할당(assignment)에 의해서만 이뤄지기 때문에 push / splice 같은 것에는 동작하지 않는다. 바로 아래 코드 같은 것들에는 반응하지 않는 다는 것이다.

\`\`\`
<script>
let numbers = [1, 2, 3, 4];

function addNumber() {
  numbers.push(numbers.length + 1);
}

$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
  Add a number
</button>
\`\`\`

addNumber() 가 동작은하지만 이것으로 Trigger 되진 않는다, 이를 해결하기 위해서는 다시 numbers 에 할당해주어야한다. 아래와 같이...

\`\`\`
function addNumber() {
  numbers = [...numbers, numbers.length + 1];
}
\`\`\`
`,
  listContents: `$: 그리고 Statement`,
  datetime: '2021년 02월 01일 00시 10분',
  tags: [SVELTE],
  seriesId: SVELTE_TOUR,
};
