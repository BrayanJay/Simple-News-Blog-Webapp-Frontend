import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post, Comment } from '../models/post.model';
import { POSTS, COMMENTS } from '../data/mockData';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = POSTS;
  private comments = COMMENTS;
  private currentPostIndex = 0;
  private postsPerPage = 10;

  constructor() { }

  // Display 10 posts at a time and show the "Load More" button if there are more posts
  getPosts(): Observable<{ next: boolean, result: Post[] }> {
    const startIndex = this.currentPostIndex;
    const endIndex = Math.min(startIndex + this.postsPerPage, this.posts.length);

    const result = this.posts.slice(startIndex, endIndex);
    const next = endIndex < this.posts.length;

    this.currentPostIndex = endIndex;

    return of({ next, result });
  }

  // Resets the current post index to start over
  resetPosts(): void {
    this.currentPostIndex = 0;
  }

  // Get a post by ID
  getPost(id: number): Observable<Post> {
    const post = this.posts.find(p => p.id === id);
    if (post){
    return of(post!);
    } else {
      throw new Error(`Post with ID ${id} not found`);
    }
  }

  // Gets comments for a specific post
  getComments(postId: number): Observable<Comment[]> {
    const postComments = this.comments.filter(c => c.postId === postId);
    return of(postComments);
  }
}
