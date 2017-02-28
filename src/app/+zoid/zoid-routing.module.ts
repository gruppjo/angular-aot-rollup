
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoidComponent } from './zoid.component';

const routes: Routes = [
  { path: '', component: ZoidComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ZoidbergRoutingModule { }
