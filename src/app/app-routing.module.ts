import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { FirstPageComponent } from './page/first-page/first-page.component';
import { SecondPageComponent } from './page/second-page/second-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first', component: FirstPageComponent },
  { path: 'second', component: SecondPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
