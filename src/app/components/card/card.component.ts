import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class PostCardComponent {
  @Input() post!: Post;
  @Output() postSelected = new EventEmitter<number>();

  // Show only the first 150 characters of the post body for better readability
  get truncatedBody(): string {
    if (this.post && this.post.body.length > 150) {
      return this.post.body.substring(0, 150) + '...';
    }
    return this.post?.body || '';
  }

  // Calculate estimated reading time based on word count
  get estimatedReadTime(): number {
    if (!this.post?.body) return 1;
    const wordsPerMinute = 200;
    const words = this.post.body.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return Math.max(1, minutes);
  }

  // Format numbers for display (e.g., 1.2k, 5.3M)
  formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }

  onPostClick(): void {
    this.postSelected.emit(this.post.id);
  }
}
