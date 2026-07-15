import { IPost } from './interfaces/IPost';
import { SVELTE } from './presentationals/Tags';

export const SvelteInit: IPost = {
  title: 'Svelte 5 + TypeScript + SMUI 설치하기 (sv CLI 기준)',
  path: 'SvelteInit',
  listContents: `Svelte 5 프로젝트를 sv CLI로 생성하고 TypeScript와 SMUI(Svelte Material UI)까지 설치하는 방법. 구버전 degit template 방식과의 차이도 함께 정리했다.`,
  datetime: '2022년 03월 19일 21시 08분',
  tags: [SVELTE],
  keywords: ['svelte', 'svelte 5', 'sveltekit', 'sv create', 'svelte typescript', 'SMUI', 'svelte material ui', 'smui-theme', 'svelte 설치'],
  contents: `
> 최초 작성: 2022년 03월 19일 · 최종 갱신: 2026년 07월 15일
> 구버전 degit template 방식에서 Svelte 5 + sv CLI 기준으로 전면 갱신했다. (구버전 방법은 글 하단에 보존)

오늘은 Svelte 를 typescript 그리고 svelte materialUI 설치까지 진행해보고자 한다.

### 1\\. Svelte 프로젝트 생성

지금은 공식 CLI 인 **sv** 로 생성하는 것이 표준 방법이다. 아래 명령어 하나면 끝!

\`\`\`
npx sv create your-project
\`\`\`

실행하면 몇 가지를 물어보는데,

- 템플릿: **SvelteKit minimal**
- 타입 체크: **Yes, using TypeScript syntax** ← 여기서 TypeScript 가 함께 설정된다
- 나머지(prettier, eslint 등)는 취향껏

그런 다음 package 설치해주고, 실행해 보자.

\`\`\`
cd your-project
npm i
npm run dev
\`\`\`

하고 나면 **localhost:5173** 에서 초기 화면을 볼 수 있다.
(구버전 template 은 8080 포트였지만, 지금은 Vite 기반이라 5173 이다)

### 2\\. TypeScript 설치...는 이제 필요 없다

구버전에서는 프로젝트 생성 후 \`node scripts/setupTypeScript.js\` 를 따로 실행해줘야 했지만,
지금은 위에서 본 것처럼 **생성 단계에서 TypeScript 를 선택**하면 끝이다. 별도 작업이 없다.

### 3\\. SMUI 설치

이제 UI 를 간단하고 예쁘게 사용할 수 있게 해주는 [SMUI](https://sveltematerialui.com) 를 설치하고자 한다.

\`\`\`
npm install --save-dev smui-theme
npx smui-theme template src/theme
\`\`\`

여기까지 하고나면 **src/theme** 디렉토리에 **_smui-theme.scss** 가 생긴 것을 볼 수 있다.

그런 다음, **package.json** 에 아래 두 가지 스크립트를 추가해준다.
(SvelteKit 은 정적 파일 폴더가 public 이 아니라 **static** 이다)

\`\`\`
"prepare": "npm run smui-theme",
"smui-theme": "smui-theme compile static/smui.css -i src/theme"
\`\`\`

그 다음 **npm run prepare** 를 해주면 **static** 폴더에 **smui.css** 가 생긴 것을 볼 수 있고,
이를 **src/app.html** 의 head 에 넣어준다.

\`\`\`
<link rel="stylesheet" href="/smui.css" />
\`\`\`

이러면 SMUI 를 쓸 준비는 끝났다.

제일 먼저 [Button](https://sveltematerialui.com/demo/button) 을 사용해보자.

### 4\\. SMUI 버튼 사용해보기

\`\`\`
npm i -D @smui/button
\`\`\`

위 명령어로 패키지를 설치하고, **src/routes/+page.svelte** 를 아래처럼 작성해보자.

\`\`\`
<script lang="ts">
    import Button from "@smui/button";
</script>

<main>
    <h1>Hello Svelte!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <Button>Hello</Button>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }
</style>
\`\`\`

**npm run dev** 로 실행하면 하기 이미지와 같이 이미 디자인 된 버튼을 확인할 수 있다!

다른 **Accordion**, **Cards** 등도 쉽게 사용이 가능하니, 사이트에서 참고하면 된다!

![R1280x0-68](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/bad31343-0e41-49bb-a763-9f05439cc21a)

---

### 구버전 방법 (2022년 작성 당시)

당시에는 degit 으로 공식 template 을 받아서 시작했다. 지금은 이 template 저장소가 보관(archived)되어 더 이상 권장되지 않지만, 기록용으로 남겨둔다.

\`\`\`
npx degit sveltejs/template your-project
cd your-project
npm i
npm run dev
\`\`\`

실행하면 **localhost:8080** 에서 아래 화면을 볼 수 있었고,

![R1280x0-67](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/4867a494-b9e4-4c2a-8ff6-8728e9e7d79a)

TypeScript 는 아래 스크립트로 별도 적용해야 했다.

\`\`\`
node scripts/setupTypeScript.js
\`\`\`
`,
};
