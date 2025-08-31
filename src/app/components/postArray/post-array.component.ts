import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { CardDetailsComponent } from "../cardDetails/card-details.component";
import { CommonModule } from '@angular/common';
import { PostCardComponent } from "../card/card.component";

@Component({
  selector: 'app-post-array',
  imports: [CardDetailsComponent, CommonModule, PostCardComponent],
  templateUrl: './post-array.component.html',
  styleUrl: './post-array.component.scss'
})
export class PostArrayComponent implements OnInit{
  isVisible = false;
  posts: Post[] = [];
  selectedPostId: number | null = null;
  hasMorePosts = false;
  isLoading = false;
  constructor(private postService: PostService, private el: ElementRef) { }

   @HostListener('window:scroll', [])
  onScroll(): void {
    const top = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      this.isVisible = true;
    }
  }

  ngOnInit(): void {
    this.loadPosts();
    this.onScroll();
  }

  loadPosts(): void {
    this.isLoading = true;
    this.postService.getPosts().subscribe(response => {
      this.posts = [...this.posts, ...response.result];
      this.hasMorePosts = response.next;
      this.isLoading = false;
    });
  }

  onPostSelected(postId: number): void {
    this.selectedPostId = postId;
  }

  onBackToList(): void {
    this.selectedPostId = null;
  }

  loadMorePosts(): void {
    this.loadPosts();
  }

  trackByPostId(index: number, post: Post): number {
    return post.id;
  }
}
