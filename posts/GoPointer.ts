import { IPost } from './IPost';
import { GOLANG_TOUR } from './presentationals/Series';
import { GOLANG } from './presentationals/Tags';

export const GoPointer: IPost = {
    title: 'Go Method & Pointer',
    path: 'GoPointer',
    contents: `
Go 에서 Struct 를 주로 이용한다고 했는데, 여기에 메소드도 추가가 가능하다.  
말로 설명하면 길어지니 코드부터 보자.

\`\`\`
// Account account Structure
type Account struct {
\towner   string
\tbalance int
}

var errNoMoney = errors.New("can't withdraw")

// NewAccount Creates Account
func NewAccount(owner string) *Account {
\taccount := Account{owner: owner, balance: 0}

\treturn &account
}

// Deposit x amount on your account
func (theAccount *Account) Deposit(amount int) {
\ttheAccount.balance += amount
}

// Balance of your account
func (theAccount Account) Balance() int {
\treturn theAccount.balance
}

// Withdraw of your account
func (theAccount *Account) Withdraw(amount int) error {
\tif theAccount.balance < amount {
\t\treturn errNoMoney
\t}

\ttheAccount.balance -= amount
\treturn nil
}
\`\`\`

특징을 살펴보도록 하자.

### **1\\. main 이 없다.**

main 이 없는 이유는 라이브러리 처럼 사용하기 때문이다.

### **2\\. 내가 싫어하는 주석**

필자는 개인적으로 주석이 있는 코드를 안좋아하지만, Go 에서는 Type 및 Method 정의 시 정의문 위에 Method / Type 명을 시작으로 Comment 작성을 권하고, lint 도 그렇게 동작한다.  
따르도록 하자.

### **3\\. error 에 대한 정의**

go 에서는 exception 이 없다. 그렇기 때문에 모든 에러 처리를 해주어야 하는데,  
var errNoMoney = errors.New("can't withdraw") 와 같이 에러를 미리 정의 해주면 깔끔해진다.  
또한 에러에 대한 변수명 정의는 Go 에서 err 로 시작하는 것을 권장한다.  
그래서 errNoMoney 라고 변수명을 정한다.

### **4\\. Constructor & Pointer**

Go 에서는 pointer 가 존재한다.

\`\`\`
 // NewAccount Creates Account
func NewAccount(owner string) *Account {
\taccount := Account{owner: owner, balance: 0}

\treturn &account
}

// Deposit x amount on your account
func (theAccount *Account) Deposit(amount int) {
\ttheAccount.balance += amount
}
\`\`\`

여기에서 보면 NewAccount 함수는 \\*Account 를 리턴하는데, 이는 Account 의 복제본을 리턴하는 것이 아니라, 주소를 직접 보낸다.  
이렇게 하는 이유는 생성자가 없기 때문이다. NewAccount 는 생성자를 대신하는 역할이라고 보면 된다.  
또한 메소드는 func 와 메소드명 Deposit 사이에 어떤 Structure 를 받는지 명시해주면 되는데,  
여기서도 theAccount \\*Account 로 받는 이유는 그냥 theAccount Account 로 받을 경우엔 값이 변화 되지 않기 때문이다.  
이에 대해서는 어렵다면 포인터의 개념을 조금 더 이해하고 보면 쉽게 이해될 것.`,
    listContents: `Go 의 구조체에 Method, 그리고 포인터에 대해 알아보자.`,
    datetime: '2021년 01월 31일 01시 48분',
    tags: [GOLANG],
    seriesId: GOLANG_TOUR,
};
