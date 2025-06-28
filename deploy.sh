#!/bin/bash

# Dr. Serena Blake Therapy Website - Deployment Script
# This script helps you deploy your Next.js website to various platforms

echo "🚀 Dr. Serena Blake Therapy Website - Deployment Script"
echo "======================================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Function to build the project
build_project() {
    echo "📦 Building the project..."
    npm run build
    if [ $? -eq 0 ]; then
        echo "✅ Build successful!"
    else
        echo "❌ Build failed!"
        exit 1
    fi
}

# Function to initialize git repository
init_git() {
    echo "🔧 Initializing Git repository..."
    if [ ! -d ".git" ]; then
        git init
        git add .
        git commit -m "Initial commit - Dr. Serena Blake Therapy Website"
        echo "✅ Git repository initialized!"
    else
        echo "ℹ️  Git repository already exists."
    fi
}

# Function to deploy to Vercel
deploy_vercel() {
    echo "🚀 Deploying to Vercel..."
    echo "Please follow these steps:"
    echo "1. Go to https://vercel.com"
    echo "2. Sign up with GitHub"
    echo "3. Click 'New Project'"
    echo "4. Import your repository"
    echo "5. Vercel will automatically detect Next.js and deploy"
    echo ""
    echo "Your site will be live at: https://your-project-name.vercel.app"
}

# Function to deploy to Netlify
deploy_netlify() {
    echo "🚀 Deploying to Netlify..."
    echo "Please follow these steps:"
    echo "1. Go to https://netlify.com"
    echo "2. Sign up and click 'New site from Git'"
    echo "3. Connect your GitHub repository"
    echo "4. Set build command: npm run build"
    echo "5. Set publish directory: .next (or out if using static export)"
    echo ""
    echo "Your site will be live at: https://your-project-name.netlify.app"
}

# Function to deploy to Railway
deploy_railway() {
    echo "🚀 Deploying to Railway..."
    echo "Please follow these steps:"
    echo "1. Go to https://railway.app"
    echo "2. Sign up with GitHub"
    echo "3. Click 'New Project'"
    echo "4. Select 'Deploy from GitHub repo'"
    echo "5. Choose your repository"
    echo ""
    echo "Your site will be live at: https://your-project-name.railway.app"
}

# Main menu
echo ""
echo "Choose your deployment option:"
echo "1) Vercel (Recommended - Free)"
echo "2) Netlify (Free)"
echo "3) Railway (Free tier available)"
echo "4) Build project only"
echo "5) Exit"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        build_project
        init_git
        deploy_vercel
        ;;
    2)
        build_project
        init_git
        deploy_netlify
        ;;
    3)
        build_project
        init_git
        deploy_railway
        ;;
    4)
        build_project
        echo "✅ Project built successfully!"
        echo "You can now deploy manually to your preferred platform."
        ;;
    5)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment instructions completed!"
echo "📖 Check README.md for detailed instructions and customization options." 