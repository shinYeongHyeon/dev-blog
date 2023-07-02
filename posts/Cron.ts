import { IPost } from './interfaces/IPost';
import { DATABASE, ETC } from './presentationals/Tags';

export const Cron: IPost = {
    title: 'Cron 표현식',
    path: 'Cron',
    contents: `
## Cron ?

Cron 은 스케쥴러라고 보면 됩니다.

예를 들어, _한 시간 마다 나한테 물을 먹으라고 알려줘_, _매일 7시에 날 깨워줘!_ 와 같은 거죠.

예전에는 유닉스 계열의 Job Scheduler 에서만 쓰였는데, 요즘엔 언어 자체에서 지원이 되기도 하죠.

## Cron 표현식이란 ?

위에서 든 예제처럼 한 시간마다, 매일 7시에와 같은 말을 정규식과 같이 나타내는 것입니다.

거두절미하고 바로 보도록 하죠.

쓰이는 곳마다 조금 다를 수 있습니다만 **대동소이**합니다.

저는 **NestJS** 에서의 **Task Scheduling** 에서의 **Cron** 으로 예를 들겠습니다.

![R1280x0-6](https://github.com/shinYeongHyeon/dev-blog/assets/74130738/0ba228c6-2ac8-4357-a9b8-aa017b448919)

사진과 같이 **NestJS** 에서는 6자리로 식을 표현합니다.

왼쪽에서부터 **초 / 분 / 시 / 일자 (21일) / 월 / 요일 (0:Sunday ~ 6: Saturday)** 입니다.

예를 들어 보겠습니다.

쓰이는 식에 대해 간략하게 알아보겠습니다.

| **식** | **설명** |
| --- | --- |
| \\* \\* \\* \\* \\* \\* | 1초마다 |
| 45 \\* \\* \\* \\* \\* | 45초에, (e.g. 00:01:45, 00:02:45) |
| \\* 10 \\* \\* \\* \\* | 10분에 (e.g. 00:01:00, 00:02:00) |
| 0 \\*/30 9-17 \\* \\* \\* | 09시부터 17시(오후 5시) 사이에 30분 마다 |
| 0 30 11 \\* \\* 1-5 | 월요일부터 금요일, 오전 11시 30분에 |

여기서 유의 깊게 봐야할 것이 **\*/30** 과 **30** 의 차이입니다.

**\*\\30\** 은 30분 마다 입니다, 만약 해당 식을 가진 Cron Job 이 (Cron이 실행 돼 도는 것을 Cron Job) 6시 15분에 시작했다면 첫 실행은 6시 45분입니다.

**30** 은 30분 일 때입니다. 만약 해당 식을 가진 Cron Job 이 돈다면, 실행시작과 상관없이 30분에 실행됩니다.`,
    listContents: `Cron 은 스케쥴러라고 보면 됩니다. \n
예를 들어, 한 시간 마다 나한테 물을 먹으라고 알려줘, 매일 7시에 날 깨워줘! 와 같은 거죠. \n
예전에는 유닉스 계열의 Job Scheduler 에서만 쓰였는데, 요즘엔 언어 자체에서 지원이 되기도 하죠.`,
    datetime: '2021년 02월 08일 00시 55분',
    tags: [ETC],
};
