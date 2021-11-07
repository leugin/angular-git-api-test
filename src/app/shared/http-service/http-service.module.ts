import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {GithubService} from './github.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    HttpClientModule
  ],

  providers: [
    GithubService
  ]
})
export class HttpServiceModule { }
