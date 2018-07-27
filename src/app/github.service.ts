import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {  }

  getUserDetails(name) {
    return this.http.get('https://api.github.com/search/repositories?q='+name);
  }
}
