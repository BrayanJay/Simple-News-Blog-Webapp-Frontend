import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PostService } from '../../services/post.service';
import { CardDetailsComponent } from './card-details.component';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [CardDetailsComponent],
    providers: [
      {
        provide: PostService,
        useValue: {
          getPost: (id: number) => of({
            id,
            title: 'Sample',
            body: 'Body content',
            userId: 1
          })
        }
      }
    ]
  });

  fixture = TestBed.createComponent(CardDetailsComponent);
  component = fixture.componentInstance;
  component.postId = 1; // ✅ ensure the postId is set
  fixture.detectChanges();
});


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
