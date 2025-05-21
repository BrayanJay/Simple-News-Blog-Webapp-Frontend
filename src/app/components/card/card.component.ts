import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class PostCardComponent {
  @Input() post!: Post;
  @Output() postSelected = new EventEmitter<number>();

  // Show only the first 100 characters of the post body
  get truncatedBody(): string {
    if (this.post && this.post.body.length > 100) {
      return this.post.body.substring(0, 100) + '...';
    }
    return this.post?.body || '';
  }

  onPostClick(): void {
    this.postSelected.emit(this.post.id);
  }
}
