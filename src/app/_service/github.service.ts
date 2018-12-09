import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class GithubService {
  
  constructor(private http: Http) { }

  getUsers() {
    const url = 'https://api.github.com/search/users?q=jon';
    return this.http.get(url)
    .pipe(map(res => {
      const data = res.json;
      console.log(data);
      return data;
    }));
  }
  getUserDetail(userId): Observable<any>{
    const url = 'https://api.github.com/users/'+ userId;
    return this.http.get(url).pipe(map(
      res =>{
        const user = res.json();
        return user;
      }
    ))
  }

  getUser(searchText): Observable<any> {
    
    const url = 'https://api.github.com/search/users?q='+ searchText;
    console.log('here', url);
    return this.http.get(url).pipe(map(
      res => {
        const data = res.json();
        console.log(data);
        return data;
      }
    ))
  }

  test(){
    console.log('rajib');
    const url = 'https://api.github.com/search/users?q=jon';
    console.log('here', url);
    return this.http.get(url).pipe(map(
      res => {
        const data = res.json();
        console.log(data);
        return data;
      }
    ))
  }

}
