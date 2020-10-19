import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentScreenComponent } from './agent-screen.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersPanelComponent } from './components/customers-panel/customers-panel.component';
import { ConversationPanelComponent } from './components/conversation-panel/conversation-panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgentScreenComponent,
    CustomersPanelComponent,
    ConversationPanelComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    AgentScreenComponent
  ]
})
export class AgentScreenModule { }
