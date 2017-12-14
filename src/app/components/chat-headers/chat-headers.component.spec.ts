import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChatHeadersComponent } from "./chat-headers.component";

describe('ChatHeadersComponent', () => {
  let component: ChatHeadersComponent;
  let fixture: ComponentFixture<ChatHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatHeadersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
