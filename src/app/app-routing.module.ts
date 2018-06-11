import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import {HeroComponent} from "./hero/hero.component";
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes = [
  {path: 'heroes', component: HeroComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  {path: 'dashboards', component:DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
