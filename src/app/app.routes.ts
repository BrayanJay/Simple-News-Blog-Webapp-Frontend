import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostArrayComponent } from './components/postArray/post-array.component';


import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: PostArrayComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
