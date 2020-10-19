import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppConfigModule } from './app-config.module';
import { LandingScreenModule } from './modules/landing-screen/landing-screen.module';
import { AgentScreenModule } from './modules/agent-screen/agent-screen.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LandingScreenModule,
    AppConfigModule,
    AgentScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
