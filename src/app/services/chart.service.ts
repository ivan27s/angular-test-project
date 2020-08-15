import {Injectable} from '@angular/core';

export interface UserInfoStatistics{
  user_id: number;
  date: string;
  page_views: number;
  clicks: number;
}

@Injectable({providedIn: 'root'})
export class ChartService {
  constructor() {}
  userClicksArray: number[] ;
  userViewsArray: number[] ;
  userDateArray: string[] ;
  loadChartsData(userInfo: UserInfoStatistics[]): void {
    this.userClicksArray = [];
    this.userViewsArray = [];
    this.userDateArray = ["2019-10-24", "2019-10-25", "2019-10-26", "2019-10-27", "2019-10-28", "2019-10-29", "2019-10-30" ];
    let userInfoIndex = 0;
    userInfo.reverse();
    this.userDateArray.forEach( date => {
      if (date === userInfo[userInfoIndex].date ) {
        this.userClicksArray.push(userInfo[userInfoIndex].clicks);
        this.userViewsArray.push(userInfo[userInfoIndex].page_views);
        userInfoIndex ++;
      } else {
        this.userClicksArray.push(0);
        this.userViewsArray.push(0);
      }
    });
  }
}

