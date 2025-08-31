# Development Guide

This guide provides information for developers working on the News Blog application.

## Table of Contents
- [Development Setup](#development-setup)
- [Code Standards](#code-standards)
- [Architecture](#architecture)
- [Testing](#testing)
- [Build and Deployment](#build-and-deployment)
- [Troubleshooting](#troubleshooting)

---

## Development Setup

### Prerequisites
- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher
- **Angular CLI**: Latest version
- **Git**: For version control

### Installation Steps

1. **Clone the repository:**
```bash
git clone https://github.com/BrayanJay/ASE-Assignment-MyBlog.git
cd myBlog
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install Angular CLI globally (if not already installed):**
```bash
npm install -g @angular/cli
```

4. **Start development server:**
```bash
ng serve
# or
npm start
```

5. **Open in browser:**
Navigate to `http://localhost:4200`

### Development Commands

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build the application |
| `ng test` | Run unit tests |
| `ng e2e` | Run end-to-end tests |
| `ng lint` | Run linting |
| `ng generate component <name>` | Generate new component |
| `ng generate service <name>` | Generate new service |

---

## Code Standards

### TypeScript Guidelines

#### Naming Conventions
- **Classes**: PascalCase (`PostService`, `HomeComponent`)
- **Interfaces**: PascalCase with descriptive names (`Post`, `Comment`)
- **Variables/Methods**: camelCase (`getPosts`, `currentPost`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`, `DEFAULT_PAGE_SIZE`)
- **Files**: kebab-case (`post.service.ts`, `home.component.ts`)

#### Code Style
```typescript
// Good: Descriptive interface
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  createdAt: string;
}

// Good: Clear method signature
getPosts(): Observable<{ next: boolean, result: Post[] }> {
  // implementation
}

// Good: Proper error handling
this.postService.getPosts()
  .pipe(
    catchError(error => {
      console.error('Error loading posts:', error);
      return of({ next: false, result: [] });
    })
  )
  .subscribe(response => {
    this.posts = response.result;
  });
```

### Angular Best Practices

#### Component Structure
```typescript
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent implements OnInit {
  // Input properties
  @Input() data: any;
  
  // Output events
  @Output() dataChanged = new EventEmitter<any>();
  
  // Public properties
  isLoading = false;
  
  // Private properties
  private subscription = new Subscription();
  
  constructor(private service: ExampleService) {}
  
  ngOnInit(): void {
    this.loadData();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  // Public methods
  loadData(): void {
    // implementation
  }
  
  // Private methods
  private handleError(error: any): void {
    // implementation
  }
}
```

#### Template Guidelines
```html
<!-- Good: Clear structure with proper binding -->
<div class="container" *ngIf="!isLoading">
  <h1 class="title">{{ title }}</h1>
  
  <div class="content">
    <app-child-component
      [inputData]="data"
      (outputEvent)="handleEvent($event)">
    </app-child-component>
  </div>
  
  <button 
    class="action-button"
    [disabled]="isDisabled"
    (click)="handleClick()">
    {{ buttonText }}
  </button>
</div>

<div class="loading" *ngIf="isLoading">
  Loading...
</div>
```

### SCSS Guidelines

#### File Structure
```scss
// Variables
$primary-color: #1976d2;
$secondary-color: #f5f5f5;
$font-family-primary: 'Roboto', sans-serif;

// Mixins
@mixin button-style {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

// Component styles
.component-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  .component-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .component-content {
    flex: 1;
  }
}

// Responsive design
@media (max-width: 768px) {
  .component-container {
    gap: 12px;
  }
}
```

---

## Architecture

### Project Structure
```
src/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── home/
│   │   ├── card/
│   │   └── ...
│   ├── services/            # Business logic and data services
│   │   └── post.service.ts
│   ├── models/              # TypeScript interfaces and types
│   │   └── post.model.ts
│   ├── data/                # Mock data and constants
│   │   └── mockData.ts
│   ├── shared/              # Shared utilities and helpers
│   ├── app.component.*      # Root component
│   ├── app.config.ts        # Application configuration
│   └── app.routes.ts        # Routing configuration
├── assets/                  # Static assets (images, fonts, etc.)
├── environments/            # Environment-specific configurations
└── styles.scss             # Global styles
```

### Component Architecture

#### Smart vs Dumb Components
- **Smart Components**: Handle business logic, data fetching
  - `PostArrayComponent`
  - `CardDetailsComponent`
  
- **Dumb Components**: Pure presentation, receive data via inputs
  - `PostCardComponent`
  - `CommentComponent`

#### Component Communication
```typescript
// Parent to Child: @Input
@Input() post: Post;

// Child to Parent: @Output
@Output() postSelected = new EventEmitter<number>();

// Service Communication
constructor(private postService: PostService) {}
```

### State Management
- **Local Component State**: For UI-specific state
- **Service State**: For shared application state
- **Future**: Consider NgRx for complex state management

---

## Testing

### Unit Testing with Jasmine/Karma

#### Component Testing
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostCardComponent } from './post-card.component';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    component.post = {
      id: 1,
      title: 'Test Post',
      body: 'Test content',
      userId: 1,
      tags: ['test'],
      createdAt: '2025-01-01T00:00:00Z'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display post title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.post-title').textContent).toContain('Test Post');
  });

  it('should emit postSelected when clicked', () => {
    spyOn(component.postSelected, 'emit');
    component.onPostClick();
    expect(component.postSelected.emit).toHaveBeenCalledWith(1);
  });
});
```

#### Service Testing
```typescript
import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return posts with pagination', () => {
    service.getPosts().subscribe(response => {
      expect(response.result).toBeDefined();
      expect(response.next).toBeDefined();
      expect(Array.isArray(response.result)).toBeTruthy();
    });
  });
});
```

### E2E Testing with Protractor/Cypress

#### Basic E2E Test
```typescript
describe('News Blog App', () => {
  it('should display welcome message', () => {
    cy.visit('/');
    cy.contains('Welcome to News Blog');
  });

  it('should navigate to news page', () => {
    cy.visit('/');
    cy.get('[data-cy=news-link]').click();
    cy.url().should('include', '/news');
    cy.get('.page-title').should('contain', 'Latest News');
  });

  it('should load more posts', () => {
    cy.visit('/news');
    cy.get('.post-card').should('have.length', 10);
    cy.get('.load-more-button').click();
    cy.get('.post-card').should('have.length', 20);
  });
});
```

---

## Build and Deployment

### Development Build
```bash
ng serve
```

### Production Build
```bash
ng build --configuration production
```

### Build Optimization
- Tree shaking for unused code removal
- Minification and uglification
- Gzip compression
- Bundle analysis: `ng build --stats-json && npx webpack-bundle-analyzer dist/stats.json`

### Deployment Options

#### GitHub Pages
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/repository-name/
```

#### Netlify
1. Build: `ng build --configuration production`
2. Deploy: Upload `dist/` folder or connect Git repository

#### Docker
```dockerfile
# Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## Troubleshooting

### Common Issues

#### 1. Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 2. Angular CLI Version Mismatch
```bash
# Update Angular CLI
npm uninstall -g @angular/cli
npm install -g @angular/cli@latest
```

#### 3. Port Already in Use
```bash
# Use different port
ng serve --port 4201
```

#### 4. Build Errors
```bash
# Clear Angular cache
ng cache clean
```

### Performance Issues

#### 1. Slow Build Times
- Use `ng build --watch` for incremental builds
- Enable webpack caching
- Reduce bundle size with lazy loading

#### 2. Runtime Performance
- Use OnPush change detection strategy
- Implement virtual scrolling for large lists
- Optimize images and assets

### Debugging Tips

#### 1. Angular DevTools
Install Angular DevTools browser extension for debugging

#### 2. Console Logging
```typescript
// Development logging
if (!environment.production) {
  console.log('Debug info:', data);
}
```

#### 3. Network Issues
```typescript
// Add logging to HTTP requests
import { tap } from 'rxjs/operators';

this.http.get('/api/posts')
  .pipe(
    tap(response => console.log('API Response:', response))
  )
  .subscribe();
```

---

## Contributing

### Git Workflow
1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and commit: `git commit -m "Add new feature"`
3. Push branch: `git push origin feature/new-feature`
4. Create pull request

### Code Review Checklist
- [ ] Code follows style guidelines
- [ ] Tests are included and passing
- [ ] Documentation is updated
- [ ] No console.log statements in production code
- [ ] Accessibility considerations addressed
- [ ] Performance impact considered

### Release Process
1. Update version in `package.json`
2. Update CHANGELOG.md
3. Create release tag
4. Deploy to production
