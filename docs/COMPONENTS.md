# Component Documentation

This document provides detailed information about each component in the News Blog application.

## Table of Contents
- [AppComponent](#appcomponent)
- [HomeComponent](#homecomponent)
- [PostArrayComponent](#postarraycomponent)
- [PostCardComponent](#postcardcomponent)
- [CardDetailsComponent](#carddetailscomponent)
- [CommentsArrayComponent](#commentsarraycomponent)
- [CommentComponent](#commentcomponent)

---

## AppComponent

### Purpose
The root component that provides the main application layout including header, navigation, and footer.

### Key Features
- **Navigation Bar**: Logo, title, and navigation links
- **Responsive Header**: Flexbox layout that adapts to screen size
- **Router Outlet**: Displays routed components
- **Footer**: Copyright and author information

### Template Structure
```html
<div class="app-container">
  <header class="app-header">
    <div class="header-content">
      <div class="header-left">
        <img src="assets/sample-post.png" alt="News Blog Logo" class="app-logo" />
        <h1 class="app-title">News Blog</h1>
      </div>
      <nav class="main-nav">
        <a routerLink="/" routerLinkActive="active">Home</a>
        <a routerLink="/news" routerLinkActive="active">News</a>
      </nav>
    </div>
  </header>
  <main class="app-main">
    <router-outlet></router-outlet>
  </main>
  <footer class="app-footer">
    <!-- Footer content -->
  </footer>
</div>
```

### Styling Highlights
- Gradient header background
- Flexbox navigation
- Responsive design with media queries
- Professional color scheme

---

## HomeComponent

### Purpose
Landing page component that welcomes users and provides navigation to the news section.

### Key Features
- **Welcome Message**: Engaging introduction text
- **Call-to-Action Button**: Direct link to news articles
- **Responsive Design**: Centered layout that works on all devices

### Template Structure
```html
<div class="home-container">
  <h1 class="home-title">Welcome to News Blog</h1>
  <p class="home-description">Your daily source for the latest news articles...</p>
  <a routerLink="/news" class="home-cta">Go to News</a>
</div>
```

### Styling Features
- Gradient background
- Centered content layout
- Professional typography
- Hover effects on CTA button

---

## PostArrayComponent

### Purpose
Main component for displaying news articles in a grid layout with pagination functionality.

### Key Features
- **Grid Layout**: Responsive grid that adapts to screen size
- **Pagination**: "Load More" button for incremental loading
- **Post Selection**: Navigation to detailed post view
- **Fade-in Animation**: Smooth appearance animations

### Properties
- `posts: Post[]` - Array of news articles
- `selectedPostId: number | null` - Currently selected post
- `hasMorePosts: boolean` - Whether more posts are available
- `isLoading: boolean` - Loading state indicator
- `isVisible: boolean` - Animation state

### Methods
- `loadPosts()` - Fetches posts from service
- `loadMorePosts()` - Loads additional posts
- `onPostSelected(postId)` - Handles post selection
- `onBackToList()` - Returns to post list view

### Template Structure
```html
<div class="main-container">
  <div class="post-list-container" *ngIf="selectedPostId === null">
    <h1 class="page-title">Latest News</h1>
    <p class="page-subtitle">Stay updated with the latest headlines...</p>
    <div class="post-grid">
      <app-card *ngFor="let post of posts" [post]="post" (postSelected)="onPostSelected($event)"></app-card>
    </div>
    <button class="load-more-button" *ngIf="hasMorePosts" (click)="loadMorePosts()">Load More</button>
  </div>
  <app-card-details *ngIf="selectedPostId !== null" [postId]="selectedPostId" (backToList)="onBackToList()"></app-card-details>
</div>
```

---

## PostCardComponent

### Purpose
Individual news article card component that displays article summary and metadata.

### Key Features
- **Article Preview**: Title, summary, and thumbnail
- **Tag Display**: Article categories/tags
- **Metadata**: Publication date
- **Accessibility**: Keyboard navigation support
- **Hover Effects**: Visual feedback on interaction

### Input Properties
- `@Input() post: Post` - Article data object

### Output Events
- `@Output() postSelected: EventEmitter<number>` - Emits when card is clicked

### Methods
- `truncatedBody: string` - Getter that truncates article body to 100 characters
- `onPostClick()` - Handles card click events

### Template Structure
```html
<div class="post-card" tabindex="0" role="button" (click)="onPostClick()" (keyup.enter)="onPostClick()">
  <img class="post-image" src="assets/sample-post-768x500.png" alt="News image" />
  <div class="post-content">
    <h2 class="post-title">{{ post.title }}</h2>
    <p class="post-body">{{ truncatedBody }}</p>
    <div class="post-tags">
      <span class="post-tag-element" *ngFor="let tag of post.tags">{{ tag }}</span>
    </div>
  </div>
  <div class="post-bottom-row">
    <span class="post-created-date">{{ post.createdAt | date: 'dd MMM yyyy' }}</span>
    <button class="read-more-btn">Read More ›</button>
  </div>
</div>
```

### Accessibility Features
- `tabindex="0"` - Makes card keyboard focusable
- `role="button"` - Indicates interactive element
- Keyboard event handlers for Enter and Space keys

---

## CardDetailsComponent

### Purpose
Detailed view component for displaying full article content with comments.

### Key Features
- **Full Article Display**: Complete article content
- **Hero Image**: Large featured image
- **Comments Section**: User comments and discussions
- **Navigation**: Back to list functionality

### Input Properties
- `@Input() postId: number` - ID of the post to display

### Output Events
- `@Output() backToList: EventEmitter<void>` - Emits when back button is clicked

### Properties
- `post: Post` - Current post data
- `comments: Comment[]` - Post comments
- `isLoading: boolean` - Loading state

### Methods
- `ngOnInit()` - Loads post and comments data
- `onBack()` - Handles back button click

### Template Structure
```html
<div class="post-details-container" *ngIf="!isLoading">
  <button class="back-button" (click)="onBack()">← Back to Posts</button>
  <div class="post-details-layout">
    <div class="post-content">
      <h1 class="post-title">{{ post.title }}</h1>
      <img class="post-picture" src="https://placehold.co/768x400" alt="Picture of {{ post.title }}">
      <p class="post-body">{{ post.body }}</p>
    </div>
    <div class="post-comments">
      <app-comments-array [comments]="comments"></app-comments-array>
    </div>
  </div>
</div>
```

---

## CommentsArrayComponent

### Purpose
Container component for displaying a list of comments for an article.

### Key Features
- **Comments List**: Displays all comments for a post
- **Empty State**: Handles posts with no comments
- **Responsive Layout**: Adapts to different screen sizes

### Input Properties
- `@Input() comments: Comment[]` - Array of comment objects

### Template Structure
```html
<div class="comments-container">
  <h3 class="comments-title">Comments</h3>
  <div class="comments-list" *ngIf="comments.length > 0">
    <app-comment *ngFor="let comment of comments" [comment]="comment"></app-comment>
  </div>
  <div class="no-comments" *ngIf="comments.length === 0">
    No comments for this post yet.
  </div>
</div>
```

---

## CommentComponent

### Purpose
Individual comment display component with user information and comment content.

### Key Features
- **User Avatar**: Profile picture (placeholder)
- **User Information**: Name and email
- **Comment Content**: Full comment text
- **Professional Styling**: Clean, readable layout

### Input Properties
- `@Input() comment: Comment` - Comment data object

### Template Structure
```html
<div class="comment-item">
  <div class="comment-header">
    <div class="commenter-details">
      <img class="commenter-avatar" src="https://placehold.co/40x40" alt="Avatar of {{ comment.name }}">
      <h4 class="commenter-name">{{ comment.name }}</h4>
    </div>
    <span class="commenter-email">{{ comment.email }}</span>
  </div>
  <p class="comment-body">{{ comment.body }}</p>
</div>
```

---

## Styling Conventions

### CSS Classes Naming
- Use kebab-case for CSS classes
- Component-specific prefixes (e.g., `post-card`, `comment-item`)
- State classes (e.g., `is-loading`, `is-visible`)

### SCSS Structure
- Component-specific styles in individual `.scss` files
- Global styles in `src/styles.scss`
- Variables for colors, fonts, and spacing
- Mixins for common patterns

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Flexbox and Grid for layouts
- Relative units (rem, %, vw/vh)

---

## Data Flow

1. **Service Layer**: `PostService` manages all data operations
2. **Mock Data**: `mockData.ts` provides sample news articles and comments
3. **Component Communication**: Parent-child component communication via `@Input` and `@Output`
4. **State Management**: Local component state for UI interactions
5. **Routing**: Angular Router for navigation between views

---

## Performance Considerations

- **Lazy Loading**: Components loaded on demand
- **Change Detection**: OnPush strategy where applicable
- **Image Optimization**: Proper image sizing and lazy loading
- **Bundle Optimization**: Tree shaking and minification in production builds
