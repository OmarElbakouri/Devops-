# Mini Project with GitHub Actions Deployment

This is a simple web application that demonstrates deployment using GitHub Actions.

## Features

- Simple counter application
- Automatic deployment to GitHub Pages
- CI/CD pipeline using GitHub Actions

## Setup

1. Clone this repository
2. Push to your GitHub account
3. GitHub Actions will automatically deploy the application to GitHub Pages

## Local Development

To run the project locally:

```bash
npm install
npm start
```

This will start a local development server at http://localhost:3000

## Deployment

The application is automatically deployed to GitHub Pages whenever changes are pushed to the main branch. The deployment is handled by the GitHub Actions workflow defined in `.github/workflows/deploy.yml`.
