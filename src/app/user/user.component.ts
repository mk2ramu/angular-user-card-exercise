import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubService } from 'src/app/github.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userSer: GithubService) { }
  data;
  error;

  ngOnInit() {}
 
  
  onSubmit(value: NgForm) {
    this.userSer.getUserDetails(value.value.username).subscribe(
      (response: Response) => {
        this.data = response.items;
      },
      (error: Response) => {
        this.error = "Something went wrong";
        console.log(this.error);
      }
    )
  }

}
