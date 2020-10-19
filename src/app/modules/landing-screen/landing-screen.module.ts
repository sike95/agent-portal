import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingScreenComponent } from './landing-screen.component';
import { COMPONENTS } from 'src/app/shared/components/globalComponents';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LandingScreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingScreenComponent
  ],
})
export class LandingScreenModule { }
