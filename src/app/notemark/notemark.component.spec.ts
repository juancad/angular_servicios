import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotemarkComponent } from './notemark.component';

describe('NotemarkComponent', () => {
  let component: NotemarkComponent;
  let fixture: ComponentFixture<NotemarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotemarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
