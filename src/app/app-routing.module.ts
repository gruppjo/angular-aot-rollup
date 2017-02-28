import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'zoid', loadChildren: 'app/+zoid/zoid.module#ZoidModule'}
];

export const AppRoutingModule: ModuleWithProviders =
  RouterModule.forRoot(routes, {useHash: true});
