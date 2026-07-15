import { IPost } from './interfaces/IPost';
import {TYPESCRIPT} from './presentationals/Tags';

export const TypescriptEsModuleInterop: IPost = {
    title: 'TypeError: (0, dayjs_1.default) is not a function 해결 — esModuleInterop',
    path: 'TypescriptEsModuleInterop',
    contents: `
> 최초 작성: 2023년 07월 23일 · 최종 갱신: 2026년 07월 15일
> 에러의 원인 설명과 tsconfig 을 바꿀 수 없는 경우의 대안을 추가했다.

갑자기 맞은 **TypeError: (0, dayjs_1.default) is not a function** 에러.
dayjs 뿐 아니라 CommonJS 로 배포된 패키지라면 어떤 것이든 \`(0, xxx_1.default) is not a function\` 형태로 동일하게 발생한다.

## 1. 원인

CommonJS 모듈(예제에서는 dayjs)을 ES 모듈 문법으로 가져왔기 때문이다.

\`\`\`typescript
import dayjs from 'dayjs';

dayjs(); // TypeError: (0, dayjs_1.default) is not a function
\`\`\`

\`esModuleInterop\` 이 꺼진 상태에서 위 코드를 컴파일하면 \`dayjs_1.default()\` 를 호출하는 코드가 만들어지는데,
CommonJS 모듈에는 \`default\` 라는 프로퍼티가 없어서 \`undefined\` 를 호출하게 된다. 그래서 **is not a function** 이다.

## 2. 해결: tsconfig.json 에 esModuleInterop 추가

**tsconfig.json** 파일에 아래 옵션을 추가해주면 된다.

\`\`\`json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
\`\`\`

이 옵션을 켜면 CommonJS 모듈도 \`import dayjs from 'dayjs'\` 처럼 default import 로 가져올 수 있게
컴파일러가 중간에서 변환해준다. (\`allowSyntheticDefaultImports\` 도 자동으로 함께 켜진다)

요즘 프로젝트 템플릿(Next.js, Vite, NestJS 등)은 기본으로 켜져 있어서 보기 어렵고,
직접 tsconfig 을 구성한 오래된 프로젝트에서 주로 만나는 에러다.

## 3. tsconfig 을 바꿀 수 없다면

공용 설정이라 옵션을 못 건드리는 경우, import 구문을 바꿔주면 된다.

\`\`\`typescript
import dayjs = require('dayjs'); // TypeScript 전용 문법

dayjs(); // 정상 동작
\`\`\`
`,
    listContents: `TypeScript에서 dayjs 등 CommonJS 모듈 import 시 발생하는 TypeError: (0, xxx_1.default) is not a function 에러의 원인과 해결법. tsconfig의 esModuleInterop 설정과 import 구문 대안을 정리했다.`,
    datetime: '2023년 07월 23일 17시 10분',
    tags: [TYPESCRIPT],
    keywords: ['typescript', 'esModuleInterop', 'TypeError is not a function', 'dayjs_1.default is not a function', 'CommonJS', 'ES Module', 'tsconfig', 'allowSyntheticDefaultImports'],
};
