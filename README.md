# React + TypeScript + Vite Portfolio

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. It is customized for my personal portfolio project, showcasing my skills and projects using modern web technologies like React, Three.js, and various supporting libraries.

## Project Overview

This project is my personal portfolio website. It is built using React, TypeScript, and Vite, with Three.js for 3D graphics and various libraries to enhance the development and user experience.

### Features

- **React**: For building the user interface.
- **TypeScript**: For type-safe JavaScript.
- **Vite**: For fast development and build setup.
- **Three.js**: For 3D graphics and animations.
- **Tailwind CSS**: For utility-first CSS styling.
- **Leva**: For GUI controls in 3D scenes.
- **Postprocessing**: For advanced visual effects.
- **FontAwesome**: For icons.

### Key Libraries and Plugins

- `@react-three/drei`: Helpers and abstractions for working with Three.js in React.
- `@react-three/postprocessing`: Integration of postprocessing effects with React Three Fiber.
- `three-stdlib`: Standard library utilities for Three.js.
- `r3f-perf`: Performance monitoring tools for React Three Fiber.
- `tailwindcss`: A utility-first CSS framework.
- `eslint`: Linting utility for maintaining code quality.
- `typescript`: Strongly typed programming language that builds on JavaScript.
- `vite-plugin-static-copy`: Plugin to copy static files to the build directory.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}