import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UsersService} from '../services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  currentPage: number;
  constructor(private route: ActivatedRoute, private router: Router,
              public usersService: UsersService) {
    route.queryParams.subscribe(
      params => this.loadUsersPage(params.page || 1)
    );
  }
  ngOnInit(): void {
  }
  loadUsersPage(currentPage: number): void {
    this.usersService.fetchUsers(currentPage);
    this.currentPage = currentPage;
  }
  clickPrevHandler(currentPage): void {
    currentPage--;
    this.router.navigate(['users'], { queryParams: { page: currentPage }});
  }
  clickNextHandler(currentPage): void {
    currentPage++;
    this.router.navigate(['users'], { queryParams: { page: currentPage }});
  }
  clickUserHandler(id): void{
    this.router.navigate(['user', id]);
  }
}
