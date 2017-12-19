import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChatHeaderBarComponent } from "./chat-header-bar.component";

describe('ChatHeaderBarComponent', () => {
  let component: ChatHeaderBarComponent;
  let fixture: ComponentFixture<ChatHeaderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatHeaderBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
