import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostCardComponent } from './card.component';
import { Post } from '../../models/post.model';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  const mockPost: Post = {
    id: 1,
    title: 'Test Title',
    body: 'a'.repeat(150),
    userId: 1,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardComponent] // ✅ Use imports instead of declarations
    }).compileComponents();

    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    component.post = mockPost;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test Case for truncate content
  it('should truncate body longer than 100 chars', () => {
    expect(component.truncatedBody.length).toBe(103); // 100 + '...'
    expect(component.truncatedBody.endsWith('...')).toBeTrue();
  });

  //Test Case for event trigger
  it('should render truncated body in the template', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.textContent).toContain(component.truncatedBody);
});

  it('should emit postSelected when element is clicked', () => {
  spyOn(component.postSelected, 'emit');

  const element = fixture.nativeElement.querySelector('.card'); // Adjust selector
  element.click();

  expect(component.postSelected.emit).toHaveBeenCalledWith(mockPost.id);
});
});
