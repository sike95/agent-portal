import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.sass']
})
export class LandingScreenComponent implements OnInit {

  constructor() { }

  @Output() clickEvent = new EventEmitter();
  landing: boolean;
  ngOnInit() {
  }

  changeLanding(){
    this.landing = false;
    this.clickEvent.emit(this.landing);
  }

}
