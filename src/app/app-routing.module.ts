import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvicesComponent } from './advices/advices.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: '', component: HomeComponent },
{path: 'advices', component: AdvicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
