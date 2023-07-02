import { IPost } from './interfaces/IPost';
import { SVELTE_TOUR } from './presentationals/Series';
import { SVELTE, TRANSLATION } from './presentationals/Tags';

export const TrulyReactive: IPost = {
    title: '(번역/의역) 진짜 반응형',
    path: 'TrulyReactive',
    contents: `
## **Truly reactive**

Svelte 에 대해서 알아보도록 하기 위해 [공식 문서](https://svelte.dev/blog/svelte-3-rethinking-reactivity)를 번역해보도록 했다. (잘할 수 있을런지 모르겠다.. 오역은 따끔하게 알려주세요)

> After several months of being just days away, we are over the moon to announce the stable release of Svelte 3. This is a huge release representing hundreds of hours of work by many people in the Svelte community, including invaluable feedback from beta testers who have helped shape the design every step of the way.  
> We think you're going to love it.

우리는 Svelte 3의 Stable Release 를 발표할 것이다. 이 Release 는 Svelte 커뮤니티의 많은 사람들이 수백 시간 동안 작업한 것을 나타내는 대규모 릴리스로, 모든 단계에서 디자인을 구체화하는 데 도움을 준 베타 테스터의 귀중한 피드백을 포함합니다.  
우리는 당신이 좋아할 거라고 생각해요.

## **What is Svelte? (Svelte 가 뭐죠?)**

> Svelte is a component framework — like React or Vue — but with an important difference. Traditional frameworks allow you to write declarative state-driven code, but there's a penalty: the browser must do extra work to convert those declarative structures into DOM operations, using techniques like [virtual DOM diffing](https://den-shin.tistory.com/21) that eat into your frame budget and tax the garbage collector.  
>   
> Instead, Svelte runs at build time, converting your components into highly efficient imperative code that surgically updates the DOM. As a result, you're able to write ambitious applications with excellent performance characteristics.The first version of Svelte was all about [testing a hypothesis](https://svelte.dev/blog/frameworks-without-the-framework) — that a purpose-built compiler could generate rock-solid code that delivered a great user experience. The second was a small upgrade that tidied things up a bit.Version 3 is a significant overhaul. Our focus for the last five or six months has been on delivering an outstanding developer experience. It's now possible to write components with [significantly less boilerplate](https://den-shin.tistory.com/10?category=964374) than you'll find elsewhere. Try the brand new tutorial and see what we mean — if you're familiar with other frameworks we think you'll be pleasantly surprised.To make that possible we first needed to rethink the concept at the heart of modern UI frameworks: reactivity.

Svelte는 Reactor Vue와 같은 Component 프레임워크이지만 중요한 차이가 있습니다. 기존 프레임워크에서는 선언적 state-driven 코드를 작성할 수 있지만, 단점이 있습니다. 브라우저는 이러한 선언적 구조를 DOM 작업으로 변환하기 위해 추가 작업을 수행해야 합니다. [가상 DOM 분산](https://www.shinyeonghyeon.xyz/posts/VirtualDomIsOverhead)과 같은 기술을 사용하여 프레임 예산으로 전환하고 가비지 수집기에 세금을 부과합니다.  
대신 Svelte는 빌드 시 실행되어 Component 를 DOM을 직접적으로 업데이트하는 매우 효율적인 필수 코드로 변환합니다. 그 결과 우수한 성능 특성을 갖춘 야심찬 애플리케이션을 작성할 수 있습니다.    
(빌드타임에 어느 부분이 변경될지 파악하기 때문에 변경된 위치를 정확하게 아는 것)

Svelte의 첫 버전은 특별한 목적을 가진 컴파일러가 훌륭한 사용자 경험을 제공하는 견고한 코드를 생성할 수 있다는 가설을 시험하는 것에 관한 것이었다. 두 번째는 상황을 약간 정리하는 작은 업그레이드였다.  
버전 3은 중요한 개편이다. 지난 5~6개월 동안 당사의 초점은 뛰어난 개발자 경험을 제공하는 것이었습니다. 이제 다른 곳에서 볼 수 있는 것보다 [훨씬 적은 수의 코드](https://www.shinyeonghyeon.xyz/posts/LessCode)로 구성 요소를 작성할 수 있습니다. 새로운 튜토리얼을 사용해보고 우리가 의미하는 바를 확인해 보십시오. 다른 프레임워크에 익숙하다면 깜짝 놀랄 것입니다.  
이를 가능하게 하기 위해서는 먼저 현대 UI 프레임워크의 핵심인 리액티브(reactivity)에 대한 개념을 재고해야 했습니다.  

[영상 보러 가기](https://www.youtube.com/embed/AdNJ3fydeao)

## **Moving reactivity into the language (반응형을 언어로)**

> In old Svelte, you would tell the computer that some state had changed by calling the this.set method:

예전 Svelte에선, 이것을 불러서 어떤 state가 바뀌었다고 컴퓨터에 말하곤 했다. set method

\`\`\`
const { count } = this.get();
this.set({
  count: count + 1
});
\`\`\`

> That would cause the component to react. Speaking of which, this.set is almost identical to the this.setState method used in classical (pre-hooks) React:

그러면 component 가 반응할 수 있습니다. 말 나온 김에 this.set은 Class React (사전 후크)에 사용되는 this.setState method와 거의 동일합니다.

\`\`\`
const { count } = this.state;
this.setState({
  count: count + 1
});
\`\`\`

> There are some important technical differences (as I explain in the video above, React is not reactive) but conceptually it's the same thing.  
>   
> That all changed with the advent of [hooks](https://reactjs.org/docs/hooks-intro.html), which handle state in a very different fashion. Many frameworks started experimenting with their own implementations of hooks, but we quickly concluded it wasn't a direction we wanted to go in. Hooks have some intriguing properties, but they also involve some unnatural code and create unnecessary work for the garbage collector. For a framework that's used in [embedded devices](https://mobile.twitter.com/sveltejs/status/1088500539640418304) as well as animation-heavy interactives, that's no good.So we took a step back and asked ourselves what kind of API would work for us... and realised that the best API is no API at all. We can just use the language. Updating some count value — and all the things that depend on it — should be as simple as this:

몇 가지 중요한 기술적 차이점이 있습니다 (위의 비디오에서 설명했듯이 React는 반응적이지 않습니다). 하지만 개념적으로는 동일합니다.  
매우 다른 방식으로 state를 다루는 훅의 출현으로 많은 것이 바뀌었다. 많은 프레임워크가 자체적인 hook 구현으로 실험을 시작했지만, 우리는 빠르게 이것이 우리가 원하는 방향이 아니라는 결론을 내렸습니다. hook은 흥미로운 속성을 가지고 있지만, 그것들은 또한 부자연스러운 코드를 포함하고 가비지 수집기를 위한 불필요한 작업을 만든다. 애니메이션이 많은 상호작용뿐만 아니라 임베디드 장치에 사용되는 프레임워크는 좋지 않습니다.  
그래서 우리는 한 걸음 물러서서 우리에게 어떤 종류의 API가 좋을지 자문했습니다. 최고의 API가 전혀 없다는 것을 깨달았습니다. 우린 그냥 이 언어를 사용할 수 있어. 일부 카운트 값과 이에 의존하는 모든 항목을 업데이트하는 작업은 다음과 같이 간단해야 합니다.

\`\`\`
count += 1;
\`\`\`

> Since we're a compiler, we can do that by instrumenting assignments behind the scenes:

컴파일러이기 때문에 백그라운드에서 할당을 계산하여 이러한 작업을 수행할 수 있습니다.

\`\`\`
count += 1; $$invalidate('count', count);
\`\`\`

> Importantly, we can do all this without the overhead and complexity of using proxies or accessors. It's just a variable.

중요한 것은, 프록시나 접근자를 사용하는 데 따른 오버헤드와 복잡성 없이 이 모든 것을 수행할 수 있다는 것입니다. 단지 변수일 뿐입니다.

## **New look (새로운 것)**

> Your components aren't the only thing that's getting a facelift. Svelte itself has a completely new look and feel, thanks to the amazing design work of [Achim Vedam](https://vedam.de/) who created our new logo and website, which has moved from [svelte.technology](https://svelte.technology/) to [svelte.dev](https://svelte.dev/).  
>   
> We've also changed our tagline, from 'The magical disappearing UI framework' to 'Cybernetically enhanced web apps'. Svelte has many aspects — outstanding performance, small bundles, accessibility, built-in style encapsulation, declarative transitions, ease of use, the fact that it's a compiler, etc — that focusing on any one of them feels like an injustice to the others. 'Cybernetically enhanced' is designed to instead evoke Svelte's overarching philosophy that our tools should work as intelligent extensions of ourselves — hopefully with a retro, William Gibson-esque twist.

component 만이 아닙니다. Svelte 자체가 완전히 새로운 모습과 느낌을 갖게 된 것은  Svelte.technology 에서 Svelte.dev 로 옮겨온 우리의 새로운 로고와 웹사이트를 만든 Achim Vedam 의 놀라운 디자인 덕분이다.  
또한 태그라인을 '마법적으로 사라지는 UI 프레임워크'에서 '사이버넷적으로 강화된 웹 앱'으로 변경했습니다. Svelte는 뛰어난 성능, 작은 번들, 접근성, 내장된 스타일 캡슐화, 선언적 전환, 사용 편의성, 컴파일러라는 사실 등 여러 측면을 가지고 있습니다. 이 중 하나에만 집중하는 것은 다른 것들에게 불공평하게 느껴집니다. '사이버네틱적으로 향상된'은 대신 우리의 도구가 우리 자신의 지능적인 확장으로 작동해야 한다는 Svelte의 지배적인 철학을 환기시키기 위해 고안되었다 - 바라건대 복고풍인 윌리엄 깁슨-에스크의 트위스트와 함께.  

## **Upgrading from version 2 (Versioin 2에서의 업그레이드)**

> If you're an existing Svelte 2 user, I'm afraid there is going to be some manual upgrading involved. In the coming days we'll release a migration guide and an updated version of [svelte-upgrade](https://github.com/sveltejs/svelte-upgrade) which will do the best it can to automate the process, but this is a significant change and not everything can be handled automatically.  
>   
> We don't take this lightly: hopefully once you've experienced Svelte 3 you'll understand why we felt it was necessary to break with the past.

만약 아직 Svelte2 사용자라면 수동 업그레이드가 필요합니다. 향후 며칠간 프로세스를 자동화하는데 최선을 다하는 마이그레이션 가이드와 최신 버전의 [Svelte-Upgarde](https://github.com/sveltejs/svelte-upgrade)를 출시할 예정입니다. 이는 중요한 변경사항이나 모든 것을 자동으로 처리 할 수 있는 것은 아닙니다.  
우리는 이것을 가볍게 여기지 않는다: 일단 여러분이 Svelte 3를 경험하고 나면 여러분은 우리가 왜 과거와 단절하는 것이 필요하다고 느꼈는지 이해할 수 있을 것이다.

## **Still to come (아직 멀었습니다)**

> As grueling as this release has been, we're nowhere near finished. We have a ton of ideas for generating smarter, more compact code, and a long feature wish-list. [Sapper](https://sapper.svelte.dev/), our Next.js-style app framework, is still in the middle of being updated to use Svelte 3. The [Svelte Native](https://svelte-native.technology/) community project, which allows you to write Android and iOS apps in Svelte, is making solid progress but deserves more complete support from core. We don't yet have the bounty of editor extensions, syntax highlighters, component kits, devtools and so on that other frameworks have, and we should fix that. We really want to add first-class TypeScript support.But in the meantime we think Svelte 3 is the best way to build web apps yet. Take an hour to go through the [tutorial](https://svelte.dev/tutorial) and we hope to convince you of the same. Either way, we'd love to see you in our [Discord chatroom](https://svelte.dev/chat) and on [GitHub](https://github.com/sveltejs/svelte) — everyone is welcome, especially you.

이번 Release가 힘들었던 만큼, 우리는 거의 끝나갈 것 같지가 않다. 우리는 더 스마트하고, 더 컴팩트한 코드와, 긴 feature 위시리스트를 만들 수 있는 수많은 아이디어를 가지고 있다. Next.js 스타일의 앱 프레임워크인 [Sapper](https://sapper.svelte.dev/)는 Svelte 3을 사용하도록 업데이트되고 있다. Svelte에서 안드로이드와 iOS 앱을 쓸 수 있는 [Svelte Native](https://svelte-native.technology/) 커뮤니티 프로젝트가 탄탄하게 진행되고 있고, 핵심의 더 완벽한 지원을 받을 만하다. 우리는 다른 프레임워크가 가지고 있는 편집기 확장, 구문 강조 표시기, 컴포넌트 키트, 개발 도구 등의 혜택을 아직 받지 못했으며, 우리는 그것을 수정해야 한다. 우리는 정말로 최고의 TypeScript 지원을 추가하고 싶습니다.

하지만 그 동안 우리는 Svelte 3가 웹 앱을 구축하는 가장 좋은 방법이라고 생각합니다. 튜토리얼을 진행하는 데 한 시간이 걸리며, 우리도 당신에게 같은 것을 납득시키기를 바랍니다. Discord 와 깃허브에서 뵙고 싶습니다. 모든 분들, 특히 여러분을 환영합니다.`,
    listContents: `Svelte 공식문석 번역 : Truly reactive`,
    datetime: '2021년 01월 31일 17시 41분',
    tags: [SVELTE, TRANSLATION],
    seriesId: SVELTE_TOUR,
};
