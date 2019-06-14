import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecentsComponent } from './components/recents/recents.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { DesignComponent } from './components/design/design.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recents', component: RecentsComponent },
  { path: 'design', component: DesignComponent },
  { path: 'specials', component: SpecialsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
