import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostArrayComponent } from './components/postArray/post-array.component';

export const routes: Routes = [
  { path: '', component: PostArrayComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
