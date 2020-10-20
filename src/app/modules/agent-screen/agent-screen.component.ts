import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessengerService } from './services/messenger.service';

@Component({
  selector: 'app-agent-screen',
  templateUrl: './agent-screen.component.html',
  styleUrls: ['./agent-screen.component.sass']
})
export class AgentScreenComponent implements OnInit {

  constructor(private mesangerService: MessengerService) { }

  customers: any;
  currentCustomer: any;
  conversations: any;
  newMessege: string;
  incomingCustomerMessage: Observable<any>;

  ngOnInit() {
    this.mesangerService.getAllCustomers()
    .toPromise()
    .then((data) => {
      this.customers = data;
    });

    this.mesangerService.listen('test event')
    .subscribe((data) => {
      console.log(data);
    });

    this.mesangerService.recieve()
    .subscribe((data: any) => {
      if (data && data.userId){
        this.updateChat(data);
      }
    });

  }

  updateChat(messageDate) {
    if (this.currentCustomer._id === messageDate.userId) {
      const messageObject = {
        message: messageDate.message.text,
        agent: false,
        customer: messageDate.userId
      }
      this.conversations.push(messageObject);
    }
  }

  fetchCustomerConversation(customer) {
    this.currentCustomer = customer;

    this.mesangerService
    .getCustomerConversation(customer._id)
    .toPromise()
    .then((data) => {
      this.conversations = data;
    });
  }


  sendMessage() {
    console.log(this.newMessege);
    const messageObject = {
      message: this.newMessege,
      agent: true,
      customer: this.currentCustomer
    }
    this.conversations.push(messageObject);
    this.mesangerService.emit('message', messageObject);
    this.newMessege = '';
  }
}
