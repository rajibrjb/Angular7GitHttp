import { Component, OnInit } from '@angular/core';
import { GithubService } from '../_service/github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService]
})

export class SearchComponent implements OnInit {
  public searchText ;
  public searchResult;
  public searchCount;

  constructor(private githubService: GithubService, private router: Router) { }

  ngOnInit() {
 
    
  }
 

  onKeyup(event){
    this.searchText = event.target.value;
  }

  showUserDetail(user){
    console.log(user);
    this.router.navigate(['user', user.login])
  }

  getUser(){
    this.githubService.getUser(this.searchText).subscribe(
      res => {
        this.searchResult = res;
        this.searchCount = res.total_count;
      }
    );
  }

}
