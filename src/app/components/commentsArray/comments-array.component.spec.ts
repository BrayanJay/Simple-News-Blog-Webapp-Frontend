import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsArrayComponent } from './comments-array.component';

describe('CommentsArrayComponent', () => {
  let component: CommentsArrayComponent;
  let fixture: ComponentFixture<CommentsArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
