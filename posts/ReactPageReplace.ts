import { IPost } from './interfaces/IPost';
import { REACT } from './presentationals/Tags';

export const ReactPageReplace: IPost = {
    title: 'React 에서 페이지 전환 (useHistory, useLocation)',
    path: 'ReactPageReplace',
    contents: `
이번 포스팅에서는 React 에서 화면전환에 사용되는 react-router-dom 에서 useHistory 와 useLocation 에 대해 알아보려고 한다.

일단 react-router-dom 은 별도의 설치가 필요하므로 진행해준다.

\`\`\`
npm install react-router-dom
\`\`\`

Router 구성은 생략하도록 하겠다.

### 1\\. useHistory Hook

\`\`\`
const history = useHistory();
const onSearchSubmit = () => {
    const { searchTerm } = getValues();

    history.push({
        pathname: "/search",
        search: \`?term=\${searchTerm}\`,
        state: {
            searchTerm,
        }
    });
}
\`\`\`

\`useHistory Hook\` 을 통해 history를 얻고, 여기에 push 만 해주면 된다.

위 코드는 가장 간단하게 사용하는 방법인데, pathname 은 이동 할 곳을 가르킨다. 그리고 search 는 URL 에서 \`Query (?)\` 를 나타낸다.

\`state\` 는 POST data 라고 이해하면 편하다. 데이터를 URL 에 보여주지 않고 넘길 때 사용한다.

\\* 참고: push 가 아닌 replace 로 한다면, Navigate 에 남지 않음. 뒤로 가기 했을 때 기록이 남지 않는다는 의미

### 2\\. useLocation Hook

\`1. useHistory Hook\` 에서 보낸 것을 받을 때는 아래와 같이 사용한다.

\`\`\`
const location = useLocation();
useEffect(() => {
    console.log(location);
}, [location]);
\`\`\`

![IMG](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/f6932925-806a-4e0d-b2b4-3eaac3a21b71)

useLocation 을 통해 받으면 된다.

console 에 찍어보면 왼쪽과 같다.

지금까지 React 에서 화면 전환을 할 때 간단하게 사용가능한 Hook 두 가지에 대해서 알아보았다.`,
    listContents: `이번 포스팅에서는 React 에서 화면전환에 사용되는 react-router-dom 에서 useHistory 와 useLocation 에 대해 알아보려고 한다.`,
    datetime: '2021년 05월 09일 22시 04분',
    tags: [REACT],
};

