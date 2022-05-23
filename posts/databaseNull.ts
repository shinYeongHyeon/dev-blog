import { IPost } from './IPost';

export const databaseNull: IPost = {
    title: 'NULL에 대한 고찰',
    path: 'databaseNull',
    contents: `
# NULL 에 대한 고찰

개발/코딩을 하면서 변수 초기화를 일반적으로 null 로 진행을 하는 것이 습관이 되었다.
Null Check 를 통해서 로직을 짜는 것이 가독성도 좋고, 문맥 파악도 용이하기 때문이다.
 
그러다 보니 습관적으로 데이터베이스도 기본값을 null 로 설정하거나 들어오지 않은 값에 대해서도 null 로 하는 경우가 있는데, 개인적으로 그런 습관은 데이터베이스를 다루면서는 나쁘다고 생각이 든다.
 
데이터베이스에서 null 은 내가 생각하기엔 여러가지 의미를 내포하고 있다고 본다.
1. 값이 들어오지 않았다.
2. 값이 없다.
3. 로직상 오류가 존재한다.

예를 들어, 통계를 내거나 데이터 분석을 하려고 하는데 유저의 취미가 null 이라고 보자.
이 데이터는 어떻게 해석을 해야할까 ?

*취미가 없는걸까 ? 아니면 오류 인가 ? 세팅을 하지 않을 걸까 ?*

이렇게 많은 식으로 해석이 될 수 있는 것은 딱 보기에도 좋아보이지 않는다.
 
또한, Null 연산에 대해서도 문제가 있다.
1+Null > Null, Null * 1 > Null, Null + Null > Null 로 취급이 된다.
이 때문에 연산시에 의도치 않은 잘못된 데이터를 뽑아 낼 수 있다.
 
그리고 최종적으로는 DBMS 마다 다르게 취급하는 것이 문제다.
이렇기 때문에 Null 사용은 나는 가급적 지양하고, 빈 값같은 경우를 사용해야 하는 경우에는
그 의미를 그대로 가질 수 없는 열은 다른 열과 조합으로 의미를 가지게 하는 것이 좋은 것 같다.`,
    listContents: `변수 초기화를 null 로 하는 습관이 있다보면, DB 에서도 비슷하게 처리하는 경우들이 더러 있다. \n
그러나 DB 에서 null 은 좀 고려해봐야 하는 대상인 것 같다. 그에 따른 고민해본 흔적을 끄적거려 본다.`,
    datetime: '2021년 01월 30일 14시 13분',
    tags: ['DATABASE'],
};