import { IPost } from './interfaces/IPost';
import { SVELTE } from './presentationals/Tags';

export const SvelteStyleHash: IPost = {
  title: '스타일 유효범위 (Hash) 그리고 전역',
  path: 'SvelteStyleHash',
  contents: `
Svelte 에서 스타일 유효범위/Hash/전역에 대해서 알아보려고 한다.

먼저 아래와 같은 두개의 코드를 가진 파일이 있다.

\`\`\`
<!-- App.svelte -->

<script>
    import People from './People.svelte';
</script>

<h2>App</h2>
<ul class="people">
    <li>Shin</li>
    <li>Den</li>
</ul>

<People />

<style>
    .people {
        color: red;
    }
</style>
\`\`\`

\`\`\`
<!-- People.svelte --> 

<h2>People Component</h2>
<ul class="people">
    <li>Shin</li>
    <li>Den</li>
</ul>
\`\`\`

![R1280x0-19](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/afdec97b-06a3-43c5-b960-105597b03909)

이 것의 결과는 위와 같다.

Svelte 에서 Style Code 는 해당 컴포넌트 (파일) 내에서만 유효하다.

또한, 개발자 도구를 열어서 요소를 보면 조금더 특이 한 것을 알 수 있다.

![R1280x0-20](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/69f90281-ca65-48f2-88d6-126f88dc0ea1)

위 사진에서 보는 것과 같이 스타일이 적용된 ul 태그에 people 클래스 외에 svelte-1367bgx 라고, 이상하게 적힌 클래스가 있는데 이것이 Style Hash 이다. 이것으로 유효범위를 만들어낸다. 

_**그렇다면 전역으로 영향을 끼치게 하려면 어떻게 해야할까?**_

\`\`\`
<style>
    :global(.people) {
        color: red;
    }
</style>
\`\`\`

![R1280x0-21](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/5ac8a6d2-77b3-4d6b-a11c-c65be5d42e5c)

이렇게 선택자를 :global 로 감싸주면 된다 !

그러면 위에서 보는 것과 같이 모두 적용이 되고

이상하게 붙어 있던 클래스도 없다 (유효범위가 필요가 없어졌으니!)

또한, 주의할 점이 하나 있는데

style 에 작성된 것 중에 Svelte 가 필요없다고 판단되는 것 (HTML 내에 없을경우) 은 컴파일 과정에서 bundle.css (미리 컴파일된 css) 에 포함시키지 않는다, (동적 클래스 생성에 유의)

그래서 필요한 경우에는 :global 을 사용해야 한다.

:global 을 사용하면 bundle 에 추가 됨.`,
  listContents: `Svelte 에서 스타일 유효범위/Hash/전역에 대해서 알아보려고 한다.`,
  datetime: '2021년 06월 21일 00시 09분',
  tags: [SVELTE],
};
