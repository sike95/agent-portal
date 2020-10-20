import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'agent';
  landing = true;

  ngOnInit(){
  }

  clickEvent($nt) {
    this.landing = $nt;
  }
}
