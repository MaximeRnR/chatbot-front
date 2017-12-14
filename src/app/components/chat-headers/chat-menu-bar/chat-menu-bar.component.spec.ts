import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMenuBarComponent } from './chat-menu-bar.component';

describe('ChatMenuBarComponent', () => {
  let component: ChatMenuBarComponent;
  let fixture: ComponentFixture<ChatMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
