import { IPost } from './interfaces/IPost';
import { SVELTE_TOUR } from './presentationals/Series';
import { SVELTE, TRANSLATION } from './presentationals/Tags';

export const LessCode: IPost = {
    title: '(번역/의역) 더 적은 코드로',
    path: 'LessCode',
    contents: `
Svelte 에 대해서 알아보도록 하기 위해 공식 문서를 번역해보도록 했다.  
(잘할 수 있을런지 모르겠다.. 오역은 따끔하게 알려주세요)

## Write less code

> All code is buggy. It stands to reason, therefore, that the more code you have to write the buggier your apps will be.
> Writing more code also takes more time, leaving less time for other things like optimisation, nice-to-have features, or being outdoors instead of hunched over a laptop.
> 
> In fact it's widely acknowledged that project development time and bug countgrow quadratically, not linearly, with the size of a codebase. That tracks with our intuitions: a ten-line pull request will get a level of scrutiny rarely applied to a 100-line one. And once a given module becomes too big to fit on a single screen, the cognitive effort required to understand it increases significantly. We compensate by refactoring and adding comments — activities that almost always result in morecode. It's a vicious cycle.
> 
> Yet while we obsess — rightly! — over performance numbers, bundle size and anything else we can measure, we rarely pay attention to the amount of code we're writing.

모든 코드는 버그가 있습니다. 따라서 코드가 많아 진다는 것은 더 큰 버그를 지닌 앱을 만드는 것이죠. 그리고 그건 더 많은 시간이 든다는 것이고 이렇게 되면 최적화, 좋은 기능/구조 등 다른것에 쏟을 시간이 줄어든다는 것을 의미하죠.  
  
실제로 프로젝트 개발 시간과 버그의 수는 코드베이스의 크기에 따라 선형이 아닌 2차원적으로 증가한다는 사실은 널리 알려져 있습니다. 그것은 우리의 직관에 따라 추적됩니다. 10줄의 풀리퀘스트는 100줄의 풀리퀘스트에 비할바가 안되는 조사수준를 받게됩니다 (훨씬 시간이 적게 든다는 의미). 그리고 주어진 모듈이 하나의 화면에 들어가기에 너무 커지면 그것을 이해하는 데 들어가는 노력이 크게 증가합니다. 리팩토링 및 주석 추가가 이따르구요.  
그렇기 때문에 항상 더 많은 코드를 생성하는 활동입니다. 악순환이죠.  
  
맞아요, 우리가 코드에 집착하는 동안 성능지표나 번들 사이즈 및 우리가 측정할 수 다른 것들에 주의를 기울이지 못합니다.  
코드를 작성하는 거에 비해서...  

## Readability is important (가독성은 중요합니다)

> I'm certainly not claiming that we should use clever tricks to scrunch our code into the most compact form possible at the expense of readability. Nor am I claiming that reducing lines of code is necessarily a worthwhile goal, since it encourages turning readable code like this...

나는 우리가 가독성을 희생하면서까지 최대한 간결한 형태로 코드를 작성하기 위해 트릭을 사용해야한다고 주장하지 않아요.  
나는 코드 줄을 줄이는 것이 반드시 가치있는 목표라고 주장하지 않습니다.  

\`\`\`typescript
for (let i = 0; i <= 100; i += 1) {
  if (i % 2 === 0) {
    console.log(\`\${i} is even\`);
  }
}
\`\`\`

> ...into something much harder to parse:

상기의 것을 더 어려운 형태로 바꾸면 :
\`\`\` typescript
for (let i = 0; i <= 100; i += 1) if (i % 2 === 0) console.log(\`\${i} is even\`);
\`\`\` 

> stead, I'm claiming that we should favour languages and patterns that allow us to naturally write less code.

대신 자연스럽게 적은 코드를 작성할 수있는 언어와 패턴을 선호해야한다고 주장합니다.

## Yes, I'm talking about Svelte (네, Svelte 요)

> Reducing the amount of code you have to write is an explicit goal of Svelte. To illustrate, let's look at a very simple component implemented in React, Vue and Svelte. First, the Svelte version:

작성해야하는 코드의 양을 줄이는 것이 Svelte 의 명백한 목표입니다.  
설명을 위해 React, Vue 및 Svelte에서 구현 된 매우 간단한 구성 요소를 살펴 보겠습니다.  

**첫째, Svelte 버전**
\`\`\`svelte
<script>
\tlet a = 1;
\tlet b = 2;
</script>

<input type="number" bind:value={a}>
<input type="number" bind:value={b}>

<p>{a} + {b} = {a + b}</p>
\`\`\`

> How would we build this in React? It would probably look something like this:

**둘째, React 버전**
\`\`\`react
import React, { useState } from 'react';

export default () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  function handleChangeA(event) {
    setA(+event.target.value);
  }

  function handleChangeB(event) {
    setB(+event.target.value);
  }

  return (
    <div>
      <input type="number" value={a} onChange={handleChangeA}/>
      <input type="number" value={b} onChange={handleChangeB}/>

      <p>{a} + {b} = {a + b}</p>
    </div>
  );
};
\`\`\`

> Here's an equivalent component in Vue:

**셋째, Vue 버전**
\`\`\`vue
<template>
  <div>
    <input type="number" v-model.number="a">
    <input type="number" v-model.number="b">

    <p>{{a}} + {{b}} = {{a + b}}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        a: 1,
        b: 2
      };
    }
  };
</script>
\`\`\`

> In other words, it takes 442 characters in React, and 263 characters in Vue, to achieve something that takes 145 characters in Svelte. The React version is literally three times larger!
> 
> It's unusual for the difference to be quite so obvious — in my experience, a React component is typically around 40% larger than its Svelte equivalent. Let's look at the features of Svelte's design that enable you to express ideas more concisely:

React 에선 442 자, Vue 에서는 263자인 반면에 Svelte 에선 145 자. React 가 약 3배나 커요!  
이렇게 차이가 명확히 드러나는 것은 드문일이긴 합니다. 경험상 React 가 보통 40% 정도 많죠.  
그럼 간결하게 표현 가능한 Svelte 의 디자인 특징을 살펴보겠습니다.  

## Top-level elements (최상위 요소)

> In Svelte, a component can have as many top-level elements as you like. In React and Vue, a component must have a single top-level element — in React's case, trying to return two top-level elements from a component function would result in syntactically invalid code. (You can use a fragment — <> — instead of a <div>, but it's the same basic idea, and still results in an extra level of indentation).
> 
> In Vue, your markup must be wrapped in a <template> element, which I'd argue is redundant.

Svelte에서 컴포넌트는 원하는만큼의 최상위 요소를 가질 수 있습니다. React와 Vue에서 컴포넌트는 오직 하나의 최상위 요소를 가져야합니다. React의 경우 컴포넌트 함수에서 두 개의 최상위 요소를 반환하려고하면 문법적으로 오류가 납니다. (<div> 대신 <> 을 사용할 수 있지만 기본 컨셉은 동일하며 여전히 추가 수준의 들여 쓰기가 발생합니다.)
 
Vue에서 마크업은 <template> 요소로 래핑되어야합니다. 중복이죠.

## Bindings (바인딩)

> In React, we have to respond to input events ourselves:

리액트에서, 우리는 input event에 이렇게 반응합니다.

\`\`\`react
function handleChangeA(event) {
  setA(+event.target.value);
}
\`\`\`

> This isn't just boring plumbing that takes up extra space on the screen, it's also extra surface area for bugs. Conceptually, the value of the input is bound to the value of a and vice versa, but that relationship isn't cleanly expressed — instead we have two tightly-coupled but physically separate chunks of code (the event handler and the value={a} prop). Not only that, but we have to remember to coerce the string value with the + operator, otherwise 2 + 2 will equal 22instead of 4.

이건 그저 화면의 추가 공간을 차지하는 지루한 곳일 뿐아니라 버그를 위한 추가 요소이기도 합니다. 개념적으로 입력의 값은 A 에 바인딩되고 그 반대의 경우도 마찬가지지만 그 관계가 명확히 표현되진 않습니다. 대신 우리는 밀접히 결합된 쓰레기 코드를 가질 뿐이죠. 뿐만 아니라 + 연산자가 문자열 값을 강제변환하는 것을 기억해줘야 합니다, 안그러면 2 + 2 가 4대신 22가 될테니.

Svelte 와 마찬가지로 Vue 는 v-model 속성으로 바인딩을 합니다. 그러나 v-model.number 를 사용해야 한다는 것을 유의해야합니다.

## State (스테이트)

> In Svelte, you update local component state with an assignment operator:

Svelte 에서는 할당 연산자를 사용하여 state 를 업데이트 합니다.

\`\`\`svelte
let count = 0;

function increment() {
  count += 1;
}
\`\`\`

반면에 React 는 useState hook 을 사용하죠.
\`\`\`react
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}
\`\`\`

> This is much noisier — it expresses the exact same concept but with over 60% more characters. As you're reading the code, you have to do that much more work to understand the author's intent.

훨씬 귀찮죠, 정확히 동일한 개념을 나타냄에도 60% 이상의 코드를 쳐야합니다. 코드를 이해하기 위해 더 많은 비용이 든다는 거죠.  

반면 Vue 에서는 state에 해당하는 속성이 있는 Object literal를 반환하는 기본 export 를 지니고 있습니다. 도움을 주는 함수 및 하위 컴포넌트를 단순히 가져와 템플릿에 사용이 불가합니다, 대신 기본 export 에 올바른 부분에 첨부하여 등록해야 하죠.  

## Death to boilerplate (상용구는 죽었다)

> These are just some of the ways that Svelte helps you build user interfaces with a minimum of fuss. There are plenty of others — for example, reactive declarations essentially do the work of React's useMemo, useCallback and useEffect without the boilerplate (or indeed the garbage collection overhead of creating inline functions and arrays on each state change).
> 
> How? By choosing a different set of constraints. Because Svelte is a compiler, we're not bound to the peculiarities of JavaScript: we can design a component authoring experience, rather than having to fit it around the semantics of the language. Paradoxically, this results in more idiomatic code — for example using variables naturally rather than via proxies or hooks — while delivering significantly more performant apps.

이는 Svelte가 최소의 번거로움으로 사용자 인터페이스를 구축하는 데 도움이되는 몇 가지 방법입니다.  
예를 들어 reactive declarations은 기본적으로 상용구없이 React의 useMemo, useCallback 및 useEffect 작업을 수행합니다 (또는 각 state 변경시 인라인 함수 및 배열을 만드는 garbage collection overhead 없이).  
  
어떻게 그러냐구요? 다른 제약 조건을 선택하기 때문이죠. Svelte 는 컴파일러이기 때문에, Javscript의 특성에 얽매이지 않습니다. 언어의 의미에 중점을 두기 보다는 컴포넌트 저작 경험을 디자인 할 수 있습니다. 역설적이게도 이는 예를 들어, 프록시나 Hook을 통하지 않고 자연스럽게 변수를 사용하는 것과 같은 관용적 코드를 생성하는 동시에 훨씬 더 성능이 뛰어난 앱을 제공하죠.`,
    listContents: `Svelte 공식문석 번역 : Write less Code`,
    datetime: '2021년 01월 30일 22시 16분',
    tags: [SVELTE, TRANSLATION],
    seriesId: SVELTE_TOUR,
};
