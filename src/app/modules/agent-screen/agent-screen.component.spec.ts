import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentScreenComponent } from './agent-screen.component';

describe('AgentScreenComponent', () => {
  let component: AgentScreenComponent;
  let fixture: ComponentFixture<AgentScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
