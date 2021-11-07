import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private URL = environment.url;
 
  
  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.URL);
  }
}
