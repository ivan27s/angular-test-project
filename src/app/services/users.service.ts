import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  total_clicks: number;
  total_page_views: number;
}
@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private http: HttpClient) {}
  private data: any;
  users: User[] = [];
  pageNumbers: number[] = [];
  fetchUsers(currentPage: number): void {
    this.http.get(`/api/users?page=${currentPage}&limit=50`)
      .subscribe((data) => {
        this.data = data;
        this.users = this.data.users;
        this.fillPageNumbers(this.data.pages);
      });
  }
  getUserInfo(id): Observable<any> {
    return this.http.get(`/api/statistics/${id}`);
  }

  fillPageNumbers(pages: number): void {
    this.pageNumbers = [];
    for (let i = 1; i <= pages ; i++) {
      this.pageNumbers.push( i );
    }
  }
}

