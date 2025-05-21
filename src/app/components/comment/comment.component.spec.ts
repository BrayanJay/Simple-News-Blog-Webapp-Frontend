import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentComponent } from './comment.component';
import { CommonModule } from '@angular/common'; // in case you use ngIf/ngFor in template

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, CommentComponent] // assuming it's a standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;

    // ✅ Provide mock input
    component.comment = {
      postId: 1,
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      body: 'This is a test comment.'
    };

    fixture.detectChanges(); // required after setting @Input()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display comment name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test User');
  });

  it('should display comment body', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('This is a test comment.');
  });
});
