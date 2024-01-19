#!/bin/bash

set -e

# Install React dependencies
echo "Installing React dependencies..."
npm i react-hook-form \
  react-draft-wysiwyg
echo "Done!"

# Install React Redux dependencies
echo "Installing React Redux dependencies..."
npm i redux \
  react-redux \
  redux-thunk \
  redux-persist \
  @reduxjs/toolkit \
  @tanstack/react-query \
  @tanstack/react-query-devtools
echo "Done!"

# Install CSS dependencies
echo "Installing CSS dependencies..."
npm i sass \
  classnames \
  tailwindcss \
  postcss \
  autoprefixer \
  @heroicons/react
echo "Done!"

# Other
echo "Installing other dependencies..."
npm i rehype-sanitize \
  swr \
  axios \
  draft-js \
  draftjs-to-html \
  draftjs-to-markdown
echo "Done!"

echo "Installing dev dependencies..."
npm i -D @types/draft-js \
  @types/draftjs-to-html \
  @types/react-draft-wysiwyg \
  @types/node \
  @types/react \
  @types/react-dom \
  @types/react-redux \
  @types/react-router-dom \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-prettier \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-redux \
  eslint-plugin-react \
  prettier