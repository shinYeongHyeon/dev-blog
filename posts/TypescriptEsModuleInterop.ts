import { IPost } from './interfaces/IPost';
import {TYPESCRIPT} from './presentationals/Tags';

export const TypescriptEsModuleInterop: IPost = {
    title: 'Typescript TypeError: is not a function 해결',
    path: 'TypescriptEsModuleInterop',
    contents: `
갑자기 맞은 **TypeError: (0, dayjs_1.default) is not a function** 에러.  
이 오류에 대해서 수정해보고자 한다.

이는 CommonJS 모듈을 (예제에서 dayjs) ES6 모듈 코드베이스로 가져오려고 했기 때문에 발생한 문제이다.  
해당 문제를 해결하기 위해서는 **tsconfig.json** 파일에 아래와 같은 옵션을 추가해주면 된다.

\`\`\`json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}`,
    listContents: `갑자기 맞은 **TypeError: (0, dayjs_1.default) is not a function** 에러를 수정해보고자 한다.`,
    datetime: '2023년 07월 23일 17시 10분',
    tags: [TYPESCRIPT],
};
