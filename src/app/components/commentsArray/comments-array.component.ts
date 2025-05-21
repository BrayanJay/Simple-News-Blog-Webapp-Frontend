import { Component, Input } from '@angular/core';
import { Comment } from '../../models/post.model';
import { CommentComponent } from "../comment/comment.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments-array',
  imports: [CommentComponent, CommonModule],
  templateUrl: './comments-array.component.html',
  styleUrl: './comments-array.component.scss'
})
export class CommentsArrayComponent {
  @Input() comments: Comment[] = [];
}
