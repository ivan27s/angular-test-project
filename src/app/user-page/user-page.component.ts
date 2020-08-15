import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';
import {ChartService} from '../services/chart.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  userId: number;
  loading = true;

  constructor(private route: ActivatedRoute, private usersService: UsersService,
              public chartService: ChartService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => this.userId = params.id);
    this.usersService.getUserInfo(this.userId)
      .subscribe(data => {
        this.chartService.loadChartsData(data.data);
        this.loading = false;
      });
  }
}
