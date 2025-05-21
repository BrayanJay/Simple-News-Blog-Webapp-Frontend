import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostArrayComponent } from './post-array.component';

describe('PostArrayComponent', () => {
  let component: PostArrayComponent;
  let fixture: ComponentFixture<PostArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
