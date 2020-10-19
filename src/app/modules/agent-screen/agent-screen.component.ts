import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.mesangerService.getAllCustomers()
    .toPromise()
    .then((data) => {
      this.customers = data;
    });

    this.mesangerService.listen('test')
    .subscribe((data) => {
      console.log(data);
    });
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

  }
}
