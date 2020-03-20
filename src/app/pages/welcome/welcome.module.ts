import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { IconModule } from '../../icon/icon.module';

@NgModule({
  imports: [WelcomeRoutingModule, IconModule.forChild(['a', 'b', 'c'])],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {}
