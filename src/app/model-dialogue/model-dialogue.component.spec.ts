import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDialogueComponent } from './model-dialogue.component';

describe('ModelDialogueComponent', () => {
  let component: ModelDialogueComponent;
  let fixture: ComponentFixture<ModelDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
