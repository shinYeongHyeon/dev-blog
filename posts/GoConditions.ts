import { IPost } from './interfaces/IPost';
import { GOLANG_TOUR } from './presentationals/Series';
import { GOLANG } from './presentationals/Tags';

export const GoConditions: IPost = {
    title: 'for, if, switch statement',
    path: 'GoConditions',
    contents: `
## **For**

Go 에서는 다른 언어에서의 forEach, for in 같은 것은 존재 하지 않고 오직 for 만이 있다. 그리고 range 와 보통 사용하는데, go 만의 특색있는 for 문을 살펴보도록 하자,

근데 이런 점들이 참 Go 를 바라보는 시선이 호불호가 많이 갈리는 이유인가보다.

\`\`\`
func add(numbers ...int) int {
  // with range
  for index, number := range numbers {
    // execute
  }

  // ignore index
  for _, number := range numbers {
    // execute
  }

  // normal for
  for i := 0; i < len(numbers); i++ {
    // execute
  }

  ...생략
}
\`\`\`

## **If / Switch**

너무 익숙한 If / Switch 문, 그런데 Go 에서는 If / Switch 문 안에서만 사용할 수 있는 변수를 만들어 낼 수 있다.

\`\`\`
func canIDrink(age int) bool {
  if (age < 18) {
    return false
  } else {
    return true
  }
}

func canIDrinkInKorea(age int) bool {
  if koreanAge := age + 2; koreanAge < 18 {
    return false
  } else {
    return true
  }
}

func canIDrinkSwitchVer(age int) bool {
  switch age {
    case 16:
      return false
    case 18:
      return true
  }

  return false
}

func canIDrinkSwitchVer2(age int) bool {
  switch {
    case age < 18:
      return false
    case age == 18:
      return true
  }
}

func canIDrinkInKoreaSwitchVer(age int) bool {
  switch koreanAge := age + 2; koreanAge {
    case 16:
      return false
    case 18:
      return true
  }
}
\`\`\``,
    listContents: `Go에는 forEach 없이 for문만 존재한다. range를 활용한 반복문 작성법과 if, switch문 안에서만 쓸 수 있는 변수를 선언하는 Go만의 조건문 문법을 예제 코드로 알아본다.`,
    datetime: '2021년 01월 31일 01시 37분',
    tags: [GOLANG],
    keywords: ['go', 'golang', 'for', 'range', 'if', 'switch', 'go 반복문', 'go 조건문'],
    seriesId: GOLANG_TOUR,
};
