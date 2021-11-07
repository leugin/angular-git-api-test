import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCommitsComponent } from './pages/list-commits/list-commits.component';

const routes: Routes = [
  {
    path: '',
    component: ListCommitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
