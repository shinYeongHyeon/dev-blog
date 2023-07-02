import { IPost } from './interfaces/IPost';
import { GRAPHQL, NESTJS, REACT } from './presentationals/Tags';

export const GraphQLQuery: IPost = {
    title: 'useQuery, lazyQuery (w/ React, Typescript)',
    path: 'GraphQLQuery',
    contents: `
React 에서 GraphQL을 사용할 때 보통 **useQuery**를 사용한다.

**useQuery** 란, API 로 치면 API Call 을 하는 것이라고 보면 된다.

\`\`\`
const ITEMS_QUERY = gql\`
    query allItemsQuery($input: AllItemInput!) {
        allItems {
            ok
            error
            items {
                name
                registeredAt
            }
        }
    }
\`;

const { data, loading } = useQuery<allItemsQuery, allItemsQueryVariables>(ITEMS_QUERY, {
        variables: {
            input: {
                page: 1,
            }
        }
    });
\`\`\`

위 코드는 GraphQL 에서 **allItemsQuery** 의 Query가 있고 그 input 으로 **AllItemInput** 이 있을 경우다.

(AllItemInput 은 page 를 변수로 받는다).

  
**ITEMS\\_QUERY** 까지 만들고 _apollo codegen_ 을 실행하고 나면 **allItemsQueryVariables** 이 생성된다. 그럼 이제 useQuery 에서 사용하면 되는 것이다. Type 으로는 **allItemsQuery** 와 **allItemsQueryVariables** 로 넣고 Input 을 variables 로 넣어주면 실행이 된다.

여기까지가 Query 를 사용하는 사전지식 이라고 보자.

**useQuery** 는 페이지가 로딩됐을 때 자동으로 실행되어 data를 받아낸다.

**그런데**, 검증 등을 거쳐야 해서 조금은 늦게 혹은 버튼을 누르는 등의 액션이 있어서 사용해야 할 경우는 어떻게 해야 할까 ?

이때 사용하는 것이 **lazyQuery** 이다.

**lazyQuery** 사용은 거의 똑같으나, _"Query를 지금 돌릴거야!"_ 라고 하는 액션이 추가로 든다.

\`\`\`
const [call, { data, loading, called }] = useLazyQuery<
    allItemsQuery,
    allItemsQueryVariables
    >(ITEMS_QUERY, {
          variables: {
              input: {
                  page: 1,
              }
          }
      });
\`\`\`

보이는 것과 같이 **useQuery** 와 굉장히 유사하지만, **call** 이라는 변수를 새로 받고 **called** 라는 것을 받는것이 차이가 있다.

이름에서 보이는 것처럼, **call** 은 _"호출해줘!"_ 라는 액션을 가진 아이다. 이 아이를 호출하게 되면 그때 쿼리가 실행이 되고 called 는 false 였다가 true 로 변경되게 된다.

지금까지, useQuery 와 lazyQuery를 React(w/ Typescript) 에서 사용하는 것에 대해서 간단하게 알아보았다.

다음에는 **FRAGEMENT** 에 대해서 알아보도록 하려 한다.`,
    listContents: `React 에서 GraphQL을 사용할 때 보통 useQuery를 사용한다.
useQuery 란, API 로 치면 API Call 을 하는 것이라고 보면 된다.`,
    datetime: '2021년 05월 11일 22시 31분',
    tags: [GRAPHQL, REACT],
};
