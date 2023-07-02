import { IPost } from './interfaces/IPost';
import { NESTJS } from './presentationals/Tags';

export const NestJSTaskScheduling: IPost = {
    title: 'Task Scheduling In NestJS',
    path: 'NestJSTaskScheduling',
    contents: `
요즘에 배달의 민족과 같은 음식배달서비스를 이용안해본 사람은 거의 없을 거라 생각이 된다.

해당 서비스를 이용하다보면 음식이 배달되고 몇 분후에 잘 먹고 있는가 ? 리뷰 좀 써달라, 라는 팝업을 받게 되는데,

이와 같은 행동은 어떤 식으로 진행이 될까 ?

아마 예상컨데, 배달완료로 상태가 변경이 되고 나면 몇 분후에 팝업을 줘! 라는 방식으로 할 것이다.

팝업이라면 뭐 팝업을 예약을 걸어 놓을 수도 있지만 이건 예제로 든 것 일 뿐, 위와 같은 작업이 필요할 때나, 하루에 한 번 백업을 한다던가 하는 행위들을 할 때 보통 Cron 을 이용 한다.

[Cron 에 대해서는 포스팅을 했으니 혹 모르는 분들이 있다면 먼저 읽어보시는걸 추천.](https://www.shinyeonghyeon.co.kr/posts/Cron)

NestJS 에서는 해당 기능을 지원 해주는데 바로 [Task Scheduling](https://docs.nestjs.com/techniques/task-scheduling) 이다.

\`npm install --save @nestjs/schedule\`

위 명령어로 설치를 진행하고, 아래 처럼 import 를 해준다.

\`\`\`
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
})
export class AppModule {}
\`\`\`

사용법은 굉장히 간단하다.  
Service 파일에 **@Cron()** 데코레이터를 명시해주고 그 안에 Cron 식을 써주면 된다.

\`\`\`
@Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }
\`\`\`

예제 코드는 언제나 45초에 실행이 된다.

이 이외에도 앱이 뜬 이후 얼마마다 주기적으로의 역할을 하는 _**Interval**_ 도 있고, 호출 된 후 얼마 후에 딱 한번의 _**Timeout**_ 도 있으니 살펴보면 더 좋을 것.

CronJob 을 가져올 수도 있는데 Cron 데코레이터에 옵션으로 **name**을 지정해주면 Registry 를 활용해 가져올 수 있다.

\`\`\`
constructor(private schedulerRegistry: SchedulerRegistry) {}

// 중략 ...

@Cron('* * 8 * * *', {
  name: 'notifications',
})
triggerNotifications() {}

// 중략 ... & 특정 함수 내에서
const job = this.schedulerRegistry.getCronJob('notifications');

job.stop();
\`\`\`

위와 같이 활용 할 수 있다.

**job.stop()** 의 메소드와 같이 **start**, **setTime**, **lastDate**, **nextDates** 와 같은 이름만 봐도 어떤 기능을 하는 함수들인지 알 수 있는 것들이 있다. (nextDates 는 다음 Cron이 실행될 때를 return 해줌)  
귀찮게 서버에서 직접하는 것이 아니라 어플리케이션을 띄울 때 할수 있다는게 활용도가 높을 듯.

자세한 내용들은 [NestJS 공식문서](https://docs.nestjs.com/techniques/task-scheduling)를 링크 걸어둘테니 살펴보면 좋을 것 같다.`,
    listContents: `이전 시간 Cron 에 대해 알아보기도 했으니, NestJS 에서 TaskScheduling 에 대해 알아보자.`,
    datetime: '2021년 02월 08일 01시 10분',
    tags: [NESTJS],
};
