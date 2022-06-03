import { IPost } from './IPost';
import { GOLANG_TOUR } from './presentationals/Series';
import { GOLANG } from './presentationals/Tags';

export const GoArray: IPost = {
    title: 'Array & Slice',
    path: 'GoArray',
    contents: `
### **Array**

Go 에서 Array 는 그 크기를 제한해주어야 한다. 또한, 그 타입도 지정해야 하며, 그 안에 값들을 세팅하는 것도 나로서는 좀 색달랐다.

\`\`\`
 names := [5]string{"shin", "yeong", "hyeon"} // Define
 
 names[3] = "den"
 names[4] = "den-shin"
\`\`\`

첫 번째 라인과 같이 대괄호 안에 Array 의 **크기**를 넣어주고 대괄호 뒤에 타입을 지정해준다.  
그리고 값들을 중괄호 안에 넣어서 정의 해준다.  
그 후에 추가하는 것들은 그 아래 라인들과 같이 진행해주고, 만약  
names\\[5\\] = "anything" 을 해준다면 컴파일 에러가 난다.

그런데, 크기 지정은 사실 실무에서 그렇게 사용하지 않는다,  
크기가 없는 Array 는 어떻게 지정할까 ?

### **Slice**

크기가 없는 Array 는 Slice 라 불리운다.

\`\`\`
 names := []string{"shin", "yeong", "hyeon"} // Define
 
 names = append(names, "den")
\`\`\`

선언부는 거의 똑같다, 크기 지정만 빼면.

그리고 추가하는 부분이 다른데, append 라는 함수를 이용해주어야 하며, 해당 함수는 인자로 넘긴 첫번째 Slice \\- 예제에서의 names - 를 변화시키는게 아니라, 값을 추가해서 Return 해준다.  
이와 같은 형태는 개발을 하다보면 실질적으로 도움이 된다.  
원래 값을 변화시키지 않고, 리턴하는 것이 디버깅에도 조금 더 효율적이니까,`,
    listContents: `Go 에서 배열을 다루는 법에 대해서 알아보자.`,
    datetime: '2021년 01월 31일 01시 41분',
    tags: [GOLANG],
    seriesId: GOLANG_TOUR,
};
