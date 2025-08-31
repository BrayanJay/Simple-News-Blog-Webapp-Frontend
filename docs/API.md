# API Documentation

This document describes the data structures and services used in the News Blog application.

## Table of Contents
- [Data Models](#data-models)
- [PostService](#postservice)
- [Mock Data](#mock-data)
- [API Integration](#api-integration)

---

## Data Models

### Post Interface

```typescript
export interface Post {
  id: number;           // Unique identifier for the post
  title: string;        // Article headline
  body: string;         // Full article content
  userId: number;       // Author identifier
  tags: string[];       // Article categories/tags
  createdAt: string;    // Publication date (ISO string format)
}
```

#### Example Post Object
```json
{
  "id": 1,
  "title": "Global Climate Summit Reaches Historic Agreement",
  "body": "World leaders have reached a groundbreaking agreement at the Global Climate Summit...",
  "userId": 1,
  "tags": ["Climate", "Environment", "Global"],
  "createdAt": "2025-08-30T14:30:00"
}
```

### Comment Interface

```typescript
export interface Comment {
  id: number;      // Unique identifier for the comment
  postId: number;  // Associated post ID
  name: string;    // Commenter's name
  email: string;   // Commenter's email
  body: string;    // Comment content
}
```

#### Example Comment Object
```json
{
  "id": 1,
  "postId": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "body": "Great article! Very informative and well-written."
}
```

---

## PostService

The `PostService` is responsible for all data operations in the application.

### Service Methods

#### getPosts()
Returns paginated posts with pagination information.

```typescript
getPosts(): Observable<{ next: boolean, result: Post[] }>
```

**Returns:**
- `next`: Boolean indicating if more posts are available
- `result`: Array of Post objects (current batch)

**Usage:**
```typescript
this.postService.getPosts().subscribe(response => {
  this.posts = [...this.posts, ...response.result];
  this.hasMorePosts = response.next;
});
```

#### getPost(id: number)
Retrieves a specific post by ID.

```typescript
getPost(id: number): Observable<Post>
```

**Parameters:**
- `id`: Post identifier

**Returns:**
- `Observable<Post>`: Single post object

**Usage:**
```typescript
this.postService.getPost(postId).subscribe(post => {
  this.post = post;
});
```

#### getComments(postId: number)
Retrieves all comments for a specific post.

```typescript
getComments(postId: number): Observable<Comment[]>
```

**Parameters:**
- `postId`: Post identifier

**Returns:**
- `Observable<Comment[]>`: Array of comment objects

**Usage:**
```typescript
this.postService.getComments(postId).subscribe(comments => {
  this.comments = comments;
});
```

#### resetPosts()
Resets the pagination index to start over.

```typescript
resetPosts(): void
```

**Usage:**
```typescript
this.postService.resetPosts();
this.posts = [];
this.loadPosts();
```

### Service Configuration

```typescript
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = POSTS;           // Mock data source
  private comments = COMMENTS;     // Mock comments source
  private currentPostIndex = 0;    // Pagination index
  private postsPerPage = 10;       // Posts per batch
}
```

---

## Mock Data

The application uses mock data stored in `src/app/data/mockData.ts`.

### Posts Data
The mock posts include realistic news articles with:
- Professional headlines
- Substantive article content
- Relevant tags/categories
- Recent publication dates

### Categories
Current news categories include:
- Climate & Environment
- Technology & AI
- Healthcare
- Space & Science
- Economy & Finance
- Energy & Innovation
- Trade & International
- Education

### Comments Data
Mock comments are generated with:
- Realistic user names
- Valid email formats
- Meaningful comment content
- Proper associations with posts

---

## API Integration

### Converting to Real API

To integrate with a real backend API, modify the `PostService`:

#### 1. Import HttpClient
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
```

#### 2. Inject HttpClient
```typescript
constructor(private http: HttpClient) {}
```

#### 3. Update Service Methods

**Posts Endpoint:**
```typescript
getPosts(page = 0, limit = 10): Observable<{ next: boolean, result: Post[] }> {
  return this.http.get<{ next: boolean, result: Post[] }>(
    `${this.apiUrl}/posts?page=${page}&limit=${limit}`
  );
}
```

**Single Post Endpoint:**
```typescript
getPost(id: number): Observable<Post> {
  return this.http.get<Post>(`${this.apiUrl}/posts/${id}`);
}
```

**Comments Endpoint:**
```typescript
getComments(postId: number): Observable<Comment[]> {
  return this.http.get<Comment[]>(`${this.apiUrl}/posts/${postId}/comments`);
}
```

#### 4. Environment Configuration
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'https://api.newsblog.com/v1'
};
```

### Expected API Response Formats

#### Posts List Response
```json
{
  "next": true,
  "result": [
    {
      "id": 1,
      "title": "Article Title",
      "body": "Article content...",
      "userId": 1,
      "tags": ["tag1", "tag2"],
      "createdAt": "2025-08-30T14:30:00Z"
    }
  ],
  "pagination": {
    "page": 0,
    "limit": 10,
    "total": 100
  }
}
```

#### Single Post Response
```json
{
  "id": 1,
  "title": "Article Title",
  "body": "Full article content...",
  "userId": 1,
  "tags": ["tag1", "tag2"],
  "createdAt": "2025-08-30T14:30:00Z",
  "author": {
    "id": 1,
    "name": "Author Name",
    "bio": "Author biography"
  }
}
```

#### Comments Response
```json
[
  {
    "id": 1,
    "postId": 1,
    "name": "Commenter Name",
    "email": "commenter@example.com",
    "body": "Comment content...",
    "createdAt": "2025-08-30T15:00:00Z"
  }
]
```

### Error Handling

```typescript
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

getPosts(): Observable<{ next: boolean, result: Post[] }> {
  return this.http.get<{ next: boolean, result: Post[] }>(`${this.apiUrl}/posts`)
    .pipe(
      catchError(error => {
        console.error('Error fetching posts:', error);
        return throwError(() => new Error('Failed to load posts'));
      })
    );
}
```

### Authentication (Future Enhancement)

For authenticated endpoints:

```typescript
import { HttpHeaders } from '@angular/common/http';

private getAuthHeaders(): HttpHeaders {
  const token = localStorage.getItem('authToken');
  return new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });
}

createPost(post: Post): Observable<Post> {
  return this.http.post<Post>(`${this.apiUrl}/posts`, post, {
    headers: this.getAuthHeaders()
  });
}
```

---

## Testing the Service

### Unit Tests
```typescript
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch posts', () => {
    const mockPosts = { next: true, result: [/* mock posts */] };
    
    service.getPosts().subscribe(posts => {
      expect(posts).toEqual(mockPosts);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/posts`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
```
