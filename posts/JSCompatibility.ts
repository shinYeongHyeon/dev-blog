import { IPost } from './interfaces/IPost';
import { JS_DEEPDIVE, SVELTE_TOUR } from './presentationals/Series';
import { JAVASCRIPT, SVELTE } from './presentationals/Tags';

export const JSCompatibility: IPost = {
  title: 'JS 호환성에 대하여',
  path: 'jsCompatibility',
  contents: `
JS의 기초부터 다시 공부해보고자 한다.<br>
<br>
그 시작으로 일단 호환성에 대해서 얘기해보자<br>
JS는 하위 호환성(backwards compatibility)을 보장하는 언어이다.<br>
그런데 많은 사람들이 상위 호환성의 개념과 혼동하기도 한다.<br>
<br>
하위 호환성이란, 단 한번이라도 유효한 JS 문법이라고 인정되면, 그 이후 업데이트가 있다 하더라도 절대 그 유효성이 깨지지 않는다는 의미이다.<br> _(물론 예외는 있습니다, 아주 드물지만요)_
<br>
그 반대로 상위호환성이 보장되는 언어였다면, 구형 JS엔진에서 새로 추가된 JS문법이 동작되어야 하는데, 그렇지 않죠.<br>그렇기 때문에 상위호화넝이 보장하지 않는다고 하는 겁니다.<br>
그런데 개발자들은 이런 간극을 줄이기 위해서 노력하고 있습니다.  
<br>
첫 번째로 "트랜스파일" 을 통해 호환성문제를 해결하는건데요,<br>
명세서에는 새롭게 추가되었지만, 구 엔진과 호환되지 않는 문법을 다른 형태로 변환하여 구형 엔진에서도 동작하도록 하는 방법이죠.<br>
대표적으로 트랜스파일러로는 \`babel\`이 있습니다.<br>
<br>
두 번째로는 "polyfill" 을 통해 호환성문제를 해결하는 방법이 있는데요,<br>
polyfill 은 예시를 통해 알아보겠습니다.<br>
\`ES2019\`에서 Promise Prototype 에 추가된 \`finally\` 메서드를 통해서요.

\`\`\`

if (!Promise.prototype.finally) {
  Promise.prototype.finally = function f(fn) {
    return this.then(
      function t(v) {
        return Promise.resolve(fn()).then(() => v);
      },
      function r(e) {
        return Promise.resolve(fn()).then(() => { throw e });
      }
    );
  };
}

\`\`\`
<br>

이런 식으로 \`finally\` 가 없다면 직접 구현하는 것이죠<br>
<br>

---

<br>
이와 같이 트랜스파일이나 폴리필을 통해서 구형과 신형, 둘 사이의 간극을 메꾸고 있습니다.
`,
  listContents: `하위호환성이 보장되는 Javascript`,
  datetime: '2025년 06월 09일 22시 35분',
  tags: [JAVASCRIPT],
  seriesId: JS_DEEPDIVE,
  keywords: ['js', 'javascript', '호환성', 'polyfill', '트랜스파일', 'babel']
};
