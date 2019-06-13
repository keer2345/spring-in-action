import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecentsComponent } from './components/recents/recents.component';

const routes: Routes = [
  {path:'recents',component:RecentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
