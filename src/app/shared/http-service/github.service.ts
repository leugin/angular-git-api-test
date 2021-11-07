import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private URL = `https://api.github.com/repos/{user}/{repo}/commits`;
  private USER  = environment.user;
  private REPO = environment.reposository;
  
  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get('https://api.github.com/repos/leugin/ApiResponse/commits');
  }
}
