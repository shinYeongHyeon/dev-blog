import { IPost } from './interfaces/IPost';
import { JS_DEEPDIVE } from './presentationals/Series';
import { JAVASCRIPT } from './presentationals/Tags';

export const JSValueRefer: IPost = {
  title: 'JS 값 vs 참조',
  path: 'JSValueRefer',
  contents: `JS에서는 두 가지 주요한 타입이 있다.   
\`원시타입\`과 \`객체\`다.
<br>
원시타입과 객체는 값을 할당하거나 전달할때 다른 동작을 보이는데 이에 대해서 얘기해보고자 한다.  

다른 언어에서는 **값 그자체를 할당/전달** 할지 아니면 **값의 참조를 할당/전달** 할지 개발자가 선택할 수 있는 경우가 많으나,  
JS에서는 값의 타입으로 결졍된다.  
<br>
**[원시타입](https://developer.mozilla.org/ko/docs/Glossary/Primitive)**  
일단, 원시타입은 String, Number, Boolean, Null, Undefined, Symbol, BigInt 7가지가 있다.  
원시타입의 경우 **값은 그 자체를 할당/전달** 한다.  
예시를 보자
\`\`\`javascript
var myName = "Den";
var yourName = myName;

myName = "Denny";

console.log(myName); // Denny
console.log(yourName); // Den
\`\`\`

두 변수에 독립적으로 복사된 값이 저장되므로, myName이 변경되어도 yourName은 변경되지 않는다.  
<br>

**[객체](https://developer.mozilla.org/ko/docs/Glossary/Object)**  
객체의 경우 **값의 참조를 할당/전달** 한다.  
예시를 보자
\`\`\`javascript
var myName = { name: "Den" };
var yourName = myName;

myName.name = "Denny";

console.log(myName); // { name: "Denny" }
console.log(yourName); // { name: "Denny" }
\`\`\`

myName과 yourName은 동일한 객체를 참조하므로, myName이 변경되면 yourName도 변경된다.  
<br>

--- 
<br>  

**결론**

JS 에서는 값이 복사될지, 참조가 복사될지는 값의 타입에 따라 결정된다.

`,
  listContents: `원시타입,객체 그리고 값 vs 참조`,
  datetime: '2025년 06월 10일 21시 30분',
  tags: [JAVASCRIPT],
  seriesId: JS_DEEPDIVE,
  keywords: ['js', 'javascript', '값', '참조', '원시타입', '객체']
};
