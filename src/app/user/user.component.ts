import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../_service/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [GithubService]
})
export class UserComponent implements OnInit {
  public data;

  constructor(private activeRoute: ActivatedRoute, private githubService: GithubService ){ }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['userId'];
    this.githubService.getUserDetail(id).subscribe(res => {
      this.data = res;
      console.log(this.data);
    })
  }

}
