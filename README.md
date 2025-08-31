# News Blog - Angular Application

A modern, responsive news blog application built with Angular, featuring a clean UI/UX design and professional news article presentation.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Home Page**: Welcome page with navigation to news articles
- **News Article Listing**: Grid layout with news cards and pagination
- **Article Details**: Full article view with comments section
- **Load More Functionality**: Paginated loading with "Load More" button
- **Accessibility**: Keyboard navigation and screen reader support
- **Realistic Content**: News-style articles with proper headlines and content

## 🛠️ Technology Stack

- **Angular 18+**: Modern Angular with standalone components
- **TypeScript**: Type-safe development
- **SCSS**: Advanced styling with variables and mixins
- **RxJS**: Reactive programming for data handling
- **Angular Router**: Client-side routing

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/              # Home page component
│   │   ├── card/              # News card component
│   │   ├── cardDetails/       # Article details view
│   │   ├── comment/           # Comment component
│   │   ├── commentsArray/     # Comments list component
│   │   └── postArray/         # News articles grid
│   ├── data/
│   │   └── mockData.ts        # Sample news data
│   ├── models/
│   │   └── post.model.ts      # Data models
│   ├── services/
│   │   └── post.service.ts    # Data service
│   ├── app.component.*        # Root component
│   ├── app.config.ts          # App configuration
│   └── app.routes.ts          # Routing configuration
├── assets/                    # Images and static files
└── styles.scss               # Global styles
```

## 🎨 Design Features

- **Professional Header**: Logo, title, and navigation
- **Card-based Layout**: News articles in responsive grid
- **Image Support**: Article thumbnails and hero images
- **Typography**: Custom fonts for headlines and body text
- **Color Scheme**: Blue-based professional color palette
- **Animations**: Smooth hover effects and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BrayanJay/ASE-Assignment-MyBlog.git
cd myBlog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
# or
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## 📖 Usage

### Navigation
- **Home**: Welcome page with introduction and navigation
- **News**: Browse all news articles in a responsive grid

### Reading Articles
1. Click on any news card to view the full article
2. Read the complete article with comments
3. Use the "Back to Posts" button to return to the news list

### Loading More Content
- Scroll down and click "Load More" to see additional articles
- Articles are loaded in batches for better performance

## 🎯 Component Overview

### HomeComponent
- Welcome page with call-to-action
- Navigation to news section
- Professional landing page design

### PostArrayComponent
- Main news listing page
- Responsive grid layout
- Pagination with "Load More"
- Search and filter capabilities (future enhancement)

### PostCardComponent
- Individual news article card
- Thumbnail image display
- Article summary and metadata
- Hover effects and accessibility

### CardDetailsComponent
- Full article view
- Hero image display
- Complete article content
- Comments section integration

### Comment Components
- Display user comments
- Comment threading support
- User avatars and metadata

## 🔧 Configuration

### Environment Settings
The application uses mock data by default. To connect to a real API:

1. Update `src/app/services/post.service.ts`
2. Replace mock data calls with HTTP requests
3. Configure API endpoints in environment files

### Styling Customization
- Global styles: `src/styles.scss`
- Component-specific styles: Each component's `.scss` file
- Color variables: Update SCSS variables for theme changes

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## ♿ Accessibility Features

- Keyboard navigation support
- ARIA labels and roles
- Focus management
- Screen reader compatibility
- High contrast support

## 🚀 Deployment

### Build for Production
```bash
ng build --prod
```

### Deploy to GitHub Pages
```bash
ng deploy --base-href=/ASE-Assignment-MyBlog/
```

### Deploy to Other Platforms
The `dist/` folder can be deployed to any static hosting service like:
- Netlify
- Vercel
- Firebase Hosting
- AWS S3

## 🧪 Testing

Run unit tests:
```bash
ng test
```

Run end-to-end tests:
```bash
ng e2e
```

## 📈 Future Enhancements

- [ ] Search functionality
- [ ] Article categories and filtering
- [ ] User authentication
- [ ] Article creation/editing
- [ ] Real-time comments
- [ ] Social media sharing
- [ ] Newsletter subscription
- [ ] Dark mode theme
- [ ] Progressive Web App features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Brayan Jayawardhana**
- GitHub: [@BrayanJay](https://github.com/BrayanJay)
- Project: [ASE-Assignment-MyBlog](https://github.com/BrayanJay/ASE-Assignment-MyBlog)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Contributors and open-source community
- Design inspiration from modern news websites
