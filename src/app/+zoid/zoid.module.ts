import { NgModule } from '@angular/core';

import { ZoidbergRoutingModule } from './zoid-routing.module';
import { ZoidComponent }   from './zoid.component';

@NgModule({
  imports: [
    ZoidbergRoutingModule
  ],
  exports: [],
  declarations: [ZoidComponent],
  providers: [],
})
export class ZoidModule { }
