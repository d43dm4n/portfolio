# Modern React Portfolio

A sleek, responsive portfolio website built with React and Material UI, featuring a modern glassmorphic design with dynamic background elements. This portfolio showcases projects, skills, and professional information in an engaging, interactive format.

## 🚀 Features

- **Modern UI Design** - Glassmorphic cards, subtle animations, and dynamic background elements
- **Fully Responsive** - Optimized for all devices from mobile phones to large desktops
- **Project Showcase** - Filterable project gallery with detailed project information
- **Skills Visualization** - Visual representation of skills with progress indicators
- **Contact Form** - Integrated contact functionality
- **Easy Content Management** - Centralized data files for simple content updates

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend library
- [Material UI v5](https://mui.com/) - Component library
- [React Router v6](https://reactrouter.com/) - Navigation and routing
- [CSS-in-JS](https://mui.com/system/styled/) - Styling approach
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations) - Visual effects

## 📋 Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## 🔧 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 💻 Usage

### Content Customization

All content can be easily modified by editing the data files in the constants directory:

- **Personal Information**: Edit PersonalData.jsx
- **Projects**: Edit ProjectsData.jsx
- **Skills**: Edit SkillsData.jsx
- **Contact Information**: Edit ContactData.jsx

### Theme Customization

- **Colors & Typography**: Edit theme.jsx
- **Card Styles**: Edit cardStyles.js
- **Background Elements**: Edit shapeElements.jsx

## 📁 Project Structure

```
/portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── layout/         # Layout components
│   │   ├── sections/       # Page section components
│   │   └── ui/             # Reusable UI components
│   ├── constants/          # Application data files
│   ├── pages/              # Page components
│   ├── theme/              # Theme configuration
│   ├── App.js              # Main application component
│   └── index.js            # Application entry point
```

## 📦 Building for Production

Create an optimized production build:

```bash
npm run build
```

This generates a `build` folder with all the files needed for deployment.

## 🚀 Deployment

### GitHub Pages

1. Update the `homepage` field in package.json:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

2. Deploy using the GitHub Pages package:
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

### Netlify

1. Create a `netlify.toml` file in the root directory:
```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Deploy using the Netlify CLI or connect your GitHub repository to Netlify.

## ✨ Customization Tips

### Adding New Projects
Add new projects to the `ProjectsData.jsx` file following the existing format:

```jsx
{
  id: "project-id",
  title: "Project Title",
  description: "Short project description",
  longDescription: "Detailed project description",
  image: "/path-to-image.jpg",
  demoLink: "https://demo-link.com",
  codeLink: "https://github.com/yourusername/project",
  technologies: ["React", "Node.js", "MongoDB"],
  categories: ["web", "frontend"]
}
```

### Adding New Skill Categories
Add new skill categories to the `SkillsData.jsx` file:

```jsx
{
  name: "Category Name",
  icon: "IconName",
  color: "#colorHex",
  skills: [
    { name: "Skill Name", level: 85 },
    { name: "Another Skill", level: 70 }
  ]
}
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Pintér Szilveszter - [Your Website](https://yourwebsite.com) - szilveszter.pinter@gmail.com

## 🙏 Acknowledgments

- Google Material Design for design inspiration
- All the open-source contributors whose libraries made this project possible

---

⭐️ If you found this project useful, consider giving it a star on GitHub! ⭐️