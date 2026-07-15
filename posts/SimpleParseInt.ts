import { IPost } from './interfaces/IPost';
import { JAVASCRIPT } from './presentationals/Tags';

export const SimpleParseInt: IPost = {
    title: 'ParseInt 의 약어',
    path: 'SimpleParseInt',
    contents: `
ParseInt 의 약어가 존재한다는 것을 알아내게 되는 일이 있었다.
parseInt('1') 은 +'1' 과 동일하다는 것이다.

![parseInt](https://user-images.githubusercontent.com/74130738/170829126-632cfd86-8607-43f7-b22c-d5feff2b4115.png)

이 글을 보고 으잉? 하는 사람들도 있을 것 같아서 아래 사진을 첨부해본다.  
나만 몰랐던 거 아니라고 해주세요  

그런데 +1 표현을 처음 봐서, 익숙치 않아서 그럴진 몰라도 가독성이 그리 좋아보이진 않아서  
실무나 프로젝트에 쓸 것 같지는 않다…  

그러나, 브라우저별로 속도가 다르고 일부 연산 값이 다르다.  
[브라우저 속도](http://phrogz.net/js/string_to_number.html)  
[결과 값](https://stackoverflow.com/questions/17106681/parseint-vs-unary-plus-when-to-use-which/17106702#17106702)`,
    listContents: `parseInt('1')과 동일하게 동작하는 단항 더하기(+) 표현을 소개한다. 문자열을 숫자로 변환하는 두 방법의 브라우저별 속도 차이와 일부 연산 값이 다른 경우도 함께 살펴본다.`,
    datetime: '2021년 01월 30일 20시 05분',
    tags: [JAVASCRIPT],
    keywords: ['javascript', '자바스크립트', 'parseInt', 'unary plus', '단항 연산자', '문자열 숫자 변환', '형변환'],
};
