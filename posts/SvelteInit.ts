import { IPost } from './interfaces/IPost';
import { SVELTE } from './presentationals/Tags';

export const SvelteInit: IPost = {
  title: 'Svelte + typescript + SMUI 설치하기',
  path: 'SvelteInit',
  listContents: `오늘은 Svelte 를 typescript 그리고 svelte materialUI 설치까지 진행해보고자 한다.`,
  datetime: '2022년 03월 19일 21시 08분',
  tags: [SVELTE],
  contents: `
오늘은 Svelte 를 typescript 그리고 svelte materialUI 설치까지 진행해보고자 한다.

### 1\\. Svelte 설치

하기 명령어를 통해 svelte project 를 설치하면 끝 !

\`\`\`
npx degit sveltejs/template your-project
cd your-project
\`\`\`

그런 다음 package 설치해주고, 실행해 보자.

\`\`\`
npm i
npm run dev
\`\`\`

하고 나면 (보통 8080 포트) **localhost:8080** 에서 아래 화면을 볼 수 있다.

이렇게 설치~실행까지 완료해 보았다.

![R1280x0-67](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/4867a494-b9e4-4c2a-8ff6-8728e9e7d79a)

### 2\\. Typescript 설치

나는 typescript 를 좋아하기 때문에 svelte 에 ts 를 적용하고자 한다.

이미 프로젝트에서 준비가 다 되어 있는 상태이기 때문에 아래 명령어를 입력해주면 된다.

\`\`\`
node scripts/setupTypeScript.js
\`\`\`

이러면 scripts 파일은 사라지고, 다시 **npm i**, **npm run dev** 를 통해 다시 실행되는 것을 볼 수 있다.

typesciprt 설치도 끝 !

## 3\\. SMUI 설치

이제 UI 를 간단하고 예쁘게 사용할 수 있게 해주는 [Smui](https://sveltematerialui.com) 를 설치하고자 한다.

\`\`\`
npm install --save-dev smui-theme
npx smui-theme template src/theme
\`\`\`

여기 까지 하고나면 **src/theme directory** 에 **_smui-theme.scss** 가 생긴것을 볼 수 있다.

그런 다음, **package.json** 에 아래 두가지 스크립트를 추가 해준다.

\`\`\`
"prepare": "npm run smui-theme",
"smui-theme": "smui-theme compile public/smui.css -i src/theme"
\`\`\`

그 다음 **npm run prepare** 를 해주면 **public** 폴더에 **smui.css** 가 생긴것을 볼 수 있고, 이를 **index.html** 에 넣어준다.

\`\`\`
<link rel="stylesheet" href="/smui.css" />
\`\`\`

이러면 SMUI 를 쓸 준비는 끝났다.

제일 먼저 [Button](https://sveltematerialui.com/demo/button) 을 사용해보자.

### 4\\. SMUI 버튼 사용해보기

\`\`\`
npm i -D @smui/button
\`\`\`

위 명령어를 통해 패키지를 설치하고, **App.svelete** 에 아래 처럼 작성하게 해보자.

\`\`\`
<script lang="ts">
    import Button from "@smui/button";

    export let name: string;
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <Button>Hello</Button>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
\`\`\`

다른 것들은 모두 그대로이고

2번째 라인 **import Button from "@smui/button";** 

10번째 라인 **<Button>Hello</Button>**  
만 추가해주면 된다.

그런 다음 **npm run dev** 로 실행하면 하기 이미지와 같이 이미 디자인 된 버튼을 확인 할 수 있다 !

다른 **Accordian**, **Cards** 등도 쉽게 사용이 가능하니, 사이트에서 참고하면 된다 !

![R1280x0-68](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/bad31343-0e41-49bb-a763-9f05439cc21a)
`,
};
