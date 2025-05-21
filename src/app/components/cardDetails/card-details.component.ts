import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post, Comment } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { CommentsArrayComponent } from "../commentsArray/comments-array.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-details',
  imports: [CommentsArrayComponent, CommonModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss'
})
export class CardDetailsComponent implements OnInit {
  @Input() postId!: number;
  @Output() backToList = new EventEmitter<void>();

  post!: Post;
  comments: Comment[] = [];
  isLoading = true;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPostDetails();
  }

  loadPostDetails(): void {
    this.isLoading = true;

    // Get post details
    this.postService.getPost(this.postId).subscribe(post => {
      this.post = post;

      // Get comments for this post
      this.postService.getComments(this.postId).subscribe(comments => {
        this.comments = comments;
        this.isLoading = false;
      });
    });
  }

  onBack(): void {
    this.backToList.emit();
  }
}
