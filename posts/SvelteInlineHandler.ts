import { IPost } from './interfaces/IPost';
import { SVELTE } from './presentationals/Tags';

export const SvelteInlineHandler: IPost = {
  title: 'Svelte 의 인라인 핸들러 권장',
  path: 'SvelteInlineHandler',
  listContents: `Svelte 에서는 React, Vue 와 달리 인라인 핸들러를 권장/지향하고 있다.`,
  datetime: '2021년 07월 03일 14시 51분',
  tags: [SVELTE],
  contents: `
Svelte 에서는 React, Vue 와 달리 인라인 핸들러를 **권장\/지향** 하고 있다.

React, Vue 에서 인라인 핸들러를 지양하는 이유는 렌더링이 될 때마다 인라인 함수도 재정의가 되어 메모리를 잡아먹기 때문이라고 하고 있다.

그러나 Svelte 는 Virtual DOM 을 사용하지 않을 뿐더러, 컴파일러 자체이기 때문에 그에 따른 메모리 불이익이 없다고 한다.

또 다른 이유로는 인라인 사용시에 할당 연산자 (=) 를 사용하지 않아도 데이터 갱신이 이루어진다. (코드가 짧아진다 !)

\`\`\`
let people = [
  { name: 'Den', age: 31 },
];

function add(person) {
  person.age += 1;
  people = people;
  // $$invalidate(0, people);
}
\`\`\`

위와 같은 코드가 있다고 했을 때 할당 연산자를 통해 데이터 갱신이 되는 이유는 주석 처리된 코드 때문이다.

할당 연산자를 사용하면 해당 코드가 실행이 되면서 데이터 갱신이 이루어지는데, 인라인 핸들러의 경우를 보자.

\`\`\`
{#each people as person (person.id)}
  <div on:lick={() => person.age +=1}>
    { person.name } 의 나이는 { person.age } !
  </div>
{/each}
\`\`\`

위에 처럼 인라인 핸들러를 구성할 수 있는데, 해당 코드는 **\$\$invalidate(0, each_value_1[people_index].age += 1, people)** 가 되어서, 데이터 갱신이 이루어진다.`,
};
