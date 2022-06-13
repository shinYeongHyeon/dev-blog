import { IPost } from './IPost';
import { SVELTE_TOUR } from './presentationals/Series';
import { SVELTE, TRANSLATION } from './presentationals/Tags';

export const VirtualDomIsOverhead: IPost = {
    title: '(번역/의역) 가상 DOM 자체가 오버헤드',
    path: 'VirtualDomIsOverhead',
    contents: `
Svelte 에 대해서 알아보도록 하기 위해 [공식 문서](https://svelte.dev/blog/virtual-dom-is-pure-overhead)를 번역해보도록 했다. (잘할 수 있을런지 모르겠다.. 오역은 따끔하게 알려주세요)

## **No virtual DOM**

> Let's retire the 'virtual DOM is fast' myth once and for all

'가상 DOM은 빠르다'라는 오해를 완전히 없애자.

> If you've used JavaScript frameworks in the last few years, you've probably heard the phrase 'the virtual DOM is fast', often said to mean that it's faster than the realDOM. It's a surprisingly resilient meme — for example people have asked how Svelte can be fast when it doesn't use a virtual DOM.  
>   
> It's time to take a closer look.  

자바스크립트 프레임워크를 지난 몇 년간 이용해왔다면, 아마 '가상 DOM 은 빠르다' 라고 익히 들어 왔을 테고, 이는 실제 DOM 보다는 빠르다는 의미이다. 이건 놀랍게도 탄력적인 밈입니다. 예를 들어, Svelte 가 가상 DOM 을 사용하지 않을 때 얼마나 빠를 수 있는 지 물었습니다.

자세히 살펴 볼 시간입니다.

## **What is the virtual DOM? (가상 DOM 이란?)**

> In many frameworks, you build an app by creating render() functions, like this simple [React](https://reactjs.org/) component:

많은 프레임워크에서 render() 함수를 이용해 앱을 만들 겁니다, 바로 이 간단한 React component 처럼요.

\`\`\`
function HelloMessage(props) {
  return (
    <div className="greeting">
      Hello {props.name}
    </div>
  );
}
\`\`\`

> You can do the same thing without JSX...

JSX 없이 똑같은 것은 이렇게 하죠.

\`\`\`
function HelloMessage(props) {
  return React.createElement(
    'div',
    { className: 'greeting' },
    'Hello ',
    props.name
  );
}
\`\`\`

> ...but the result is the same — an object representing how the page should now look. That object is the virtual DOM. Every time your app's state updates (for example when the name prop changes), you create a new one. The framework's job is to reconcile the new one against the old one, to figure out what changes are necessary and apply them to the real DOM.

페이지가 어떻게 보일지 나타내는 이 Object는 같습니다. 이 Object 는 Virtual DOM 이죠. 앱의 state가 업데이트 될 때마다 (예 : 이름 소품이 변경 될 때) 새 항목을 만듭니다. 프레임 워크의 역할은 새로운 것을 이전 버전과 비교하여 필요한 변경 사항을 파악하고 실제 DOM에 적용하는 것입니다

## **How did the mem start? (이 밈은 어떻게 시작됐는지?)**

> Misunderstood claims about virtual DOM performance date back to the launch of React. In [Rethinking Best Practices](https://www.youtube.com/watch?v=x7cQ3mrcKaY), a seminal 2013 talk by former React core team member Pete Hunt, we learned the following:  
>     _This is actually extremely fast, primarily because most DOM operations tend to be slow.  
>     There's been a lot of performance work on the DOM, but most DOM operations tend to drop frames._  

가상 DOM 성능에 대한 오해는 React 출시로 거슬러 올라갑니다. Rethinking Best Practices의 전 React 핵심 팀원 Pete Hunt의 2013 년 대담에서 우리는 알았죠.

    _대부분의 DOM 작업이 느린 경향이 있기 때문에. 이것(가상돔)은 매우 빠릅니다._

    _DOM에 대한 많은 성능 작업이 있었지만 대부분의 DOM 작업은 프레임을 삭제하는 경향이 있습니다_

[##_Image|kage@cKtHB2/btqVcro8IxM/4DgaMUKibO9ovMTlxEL1OK/img.jpg|CDM|1.3|{"originWidth":1600,"originHeight":885,"style":"alignCenter","mobileStyle":"widthContent","width":513,"height":null,"caption":"Rethinking Best Practices at JSConfEU 2013","filename":"rethinking-best-practices.jpg"}_##]

> But hang on a minute! The virtual DOM operations are in addition to the eventual operations on the real DOM. The only way it could be faster is if we were comparing it to a less efficient framework (there were plenty to go around back in 2013!), or arguing against a straw man — that the alternative is to do something no-one actually does:

잠깐만요, 가상 DOM 작업은 실제 DOM 최종작업에 추가 됩니다. 더 빠를 수있는 유일한 방법은 효율성이 떨어지는 프레임 워크와 비교하거나 (2013 년에 돌아볼 것이 많았습니다!), 아무것도 실제로하지 않는 일을하는 것입니다. :

\`\`\`
onEveryStateChange(() => {
  document.body.innerHTML = renderMyApp();
});
\`\`\`

> Pete clarifies soon after...  
>   
>     React is not magic. Just like you can drop into assembler with C and beat the C compiler, you can drop into raw DOM operations and DOM API calls and beat React if you wanted to. However, using C or Java or JavaScript is an order of magnitude performance improvement because you don't have to worry...about the specifics of the platform. With React you can build applications without even thinking about performance and the default state is fast.  
>   
> ...but that's not the part that stuck.  

Pete는 곧 명확히 ...

    리액트는 마법이 아닙니다. C와 함께 어셈블러로 들어가서 C 컴파일러를 이길 수 있는 것처럼, 원시 DOM 작업 및 DOM API 호출로 이동하여 React를 누르고 싶을 때 React를 실행할 수 있습니다. 그러나 플랫폼의 세부 사항에 대해 걱정할 필요가 없으므로 C 또는 Java 또는 JavaScript를 사용하는 것이 성능 향상의 한 단계입니다. React를 사용하면 성능에 대한 생각도 없이 애플리케이션을 구축할 수 있으며 기본 상태는 빠릅니다.

그러나 이 부분이 고착화된건 아니죠.

## **So... is the virtual DOM slow? (그래서,, 가상 DOM은 느린가?)**

> Not exactly. It's more like 'the virtual DOM is usually fast enough', but with certain caveats.  
>   
> The original promise of React was that you could re-render your entire app on every single state change without worrying about performance. In practice, I don't think that's turned out to be accurate. If it was, there'd be no need for optimisations like _shouldComponentUpdate_ (which is a way of telling React when it can safely skip a component).  
>   
> Even with shouldComponentUpdate, updating your entire app's virtual DOM in one go is a lot of work. A while back, the React team introduced something called React Fiber which allows the update to be broken into smaller chunks. This means (among other things) that updates don't block the main thread for long periods of time, though it doesn't reduce the total amount of work or the time an update takes.  

꼭 그렇진 않아요. 이는 '가상 DOM은 일반적으로 충분히 빠릅니다'에 가깝지만, 특정 주의 사항을 따릅니다.

React는 원래 성능에 대한 걱정 없이 state 변경 시마다 전체 앱을 다시 렌더링할 수 있다는 것이었습니다. 실제로는 그게 정확하지 않은 것 같아요. 그렇다면 구성 요소를 안전하게 건너뛸 수 있을 때 React에게 알리는 방법인 _shouldComponentUpdate_ 와 같은 최적화 작업은 필요하지 않을 것입니다.

shouldComponentUpdate를 해야 하는 경우에도 전체 앱의 가상 DOM을 한 번에 업데이트하는 것은 많은 작업입니다. 얼마 전, 리액트 팀은 업데이트를 더 작은 덩어리로 나눌 수 있는 React Fiber라는 것을 소개했습니다. 즉, 업데이트 시 전체 작업량이나 업데이트 소요 시간은 줄지 않지만 업데이트 시 주 스레드가 장기간 차단되지는 않죠.

## **Where does the overhead come from? (overhead는 어디에서 오는가)**

> Most obviously, [diffing isn't free](https://twitter.com/pcwalton/status/1015694528857047040). You can't apply changes to the real DOM without first comparing the new virtual DOM with the previous snapshot. To take the earlier HelloMessage example, suppose the name prop changed from 'world' to 'everybody'.

가장 분명한 것은, 재조정 것은 공짜가 아닙니다. 먼저 새 가상 DOM을 이전 스냅샷과 비교하지 않고는 실제 DOM에 변경 사항을 적용할 수 없습니다. 이전의 Hello Message 예를 들어, 'world'에서 '모든 사람'으로 이름 속성이 변경되었다고 가정해 보십시오.

> Both snapshots contain a single element. In both cases it's a <div>, which means we can keep the same DOM node  
> 2\\. We enumerate all the attributes on the old <div> and the new one to see if any need to be changed, added or removed. In both      cases we have a single attribute — a className with a value of "greeting"  
> 3\\. Descending into the element, we see that the text has changed, so we'll need to update the real DOM

1.  두 스냅샷 모두 단일 엘리먼트를 포함합니다. 두 경우 모두 <div>입니다. 즉, 동일한 DOM 노드를 유지할 수 있습니다.
2.  변경, 추가 또는 제거가 필요한지 확인하기 위해 이전 <div>와 새 <div>의 모든 속성을 열거합니다. 두 경우 모두 "greeting" className이 있습니다.
3.  요소를 확인하면 텍스트가 변경되었음을 알 수 있으므로 실제 DOM을 업데이트해야 합니다.

> Of these three steps, only the third has value in this case, since — as is the case in the vast majority of updates — the basic structure of the app is unchanged. It would be much more efficient if we could skip straight to step 3:

대부분의 업데이트에서와 같이 앱의 기본 구조는 변경되지 않으므로 이 세 단계 중 세 번째 단계만 이 경우에 가치가 있습니다. 3단계로 바로 건너뛸 수 있다면 훨씬 효율적일 것입니다.

\`\`\`
if (changed.name) {
  text.data = name;
}
\`\`\`

> (This is almost exactly the update code that Svelte generates. Unlike traditional UI frameworks, Svelte is a compiler that knows at build time how things could change in your app, rather than waiting to do the work at run time.)

이 코드는 스벨트가 생성하는 업데이트 코드와 거의 동일합니다. 기존 UI 프레임워크와 달리 Svelte는 런타임에 작업을 대기하지 않고 빌드 시 앱의 상황이 어떻게 변할 수 있는지 알고 있는 컴파일러입니다.)

## **It's not just the diffing though (어려운 것은 아니다)**

> The diffing algorithms used by React and other virtual DOM frameworks are fast. Arguably, the greater overhead is in the components themselves. You wouldn't write code like this...  

React와 다른 가상 DOM 프레임워크에서 사용되는 분산 알고리즘은 빠릅니다. 의심할 여지 없이, 더 큰 오버헤드는 component 자체에 있습니다. 이런 식으로 코드를 쓰면 안 됩니다...

\`\`\`
function StrawManComponent(props) {
  const value = expensivelyCalculateValue(props.foo);

  return (
    <p>the value is {value}</p>
  );
}
\`\`\`

> ...because you'd be carelessly recalculating value on every update, regardless of whether props.foo had changed. But it's extremely common to do unnecessary computation and allocation in ways that seem much more benign:

value에 대한 모든 업데이트를 속성(props)에 관계없이 신중하게 재계산할 수 있기 때문입니다. foo는 변했다. 그러나 불필요한 계산과 할당을 훨씬 더 온화해 보이는 방식으로 수행하는 것이 매우 일반적입니다.

\`\`\`
function MoreRealisticComponent(props) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <p>Selected {selected ? selected.name : 'nothing'}</p>

      <ul>
        {props.items.map(item =>
          <li>
            <button onClick={() => setSelected(item)}>
              {item.name}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
\`\`\`

> Here, we're generating a new array of virtual <li> elements — each with their own inline event handler — on every state change, regardless of whether props.items has changed. Unless you're unhealthily obsessed with performance, you're not going to optimise  
> that. There's no point. It's plenty fast enough. But you know what would be even faster? Not doing that.  
>   
> The danger of defaulting to doing unnecessary work, even if that work is trivial, is that your app will eventually succumb to 'death by a thousand cuts' with no clear bottleneck to aim at once it's time to optimise.
> 
> Svelte is explicitly designed to prevent you from ending up in that situation.

여기서는 속성/아이템의 변경 여부에 관계없이 모든 상태 변경 시 가상 <li> element의 새로운 배열(각각 인라인 이벤트 핸들러 포함)을 생성합니다. 성능에 집착하지 않는 한 성능을 최적화하지 못할 것입니다. 의미가 없어요. 충분히 빨라요. 하지만 뭐가 더 빠를지 아시나요? 그렇게는 안 됩니다.

작업이 사소한 것일지라도 불필요한 작업을 수행하는 것으로 디폴트할 경우 앱이 최적화해야 할 때 단번에 목표로 삼을 분명한 병목 현상 없이 결국 '능지처참 당하는 고통'에 직면하게 됩니다.

스벨트는 당신이 그런 상황에 빠지는 것을 막기 위해 명시적으로 설계되었다.

## **Why do frameworks use the virtual DOM then? (그러면 프레임워크가 가상 DOM을 사용하는 이유는 무엇입니까?)**

> It's important to understand that virtual DOM isn't a feature. It's a means to an end, the end being declarative, state-driven UI development. Virtual DOM is valuable because it allows you to build apps without thinking about state transitions, with performance that is generally good enough. That means less buggy code, and more time spent on creative tasks instead of tedious ones.  
>   
> But it turns out that we can achieve a similar programming model without using virtual DOM — and that's where Svelte comes in.  

가상 DOM은 기능이 아닙니다. 이는 목적을 위한 수단이며, 선언적이고 state-driven UI 개발입니다. Virtual DOM은 state 전환에 대해 생각하지 않고도 애플리케이션을 구축할 수 있으며 일반적으로 성능이 충분하기 때문에 유용합니다. 즉, 버그 코드가 줄어들고, 지루한 작업 대신 창의적인 작업에 더 많은 시간이 소비됩니다.

하지만 가상 DOM을 사용하지 않고도 유사한 프로그래밍 모델을 얻을 수 있다는 것이 밝혀졌습니다. 바로 여기에서 Svelte가 등장합니다.`,
    listContents: `Svelte 공식문석 번역 : No virtual DOM`,
    datetime: '2021년 01월 31일 16시 19분',
    tags: [SVELTE, TRANSLATION],
    seriesId: SVELTE_TOUR,
};
