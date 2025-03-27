
---

# React Decompose

This project is a practice exercise for splitting a React `App.js` into individual components based on CSS blocks. The goal is to create reusable components that help with organizing a React application and making it more maintainable.

## Description

In this project, the `App.js` file is split into multiple components based on CSS blocks. Additionally, the associated CSS is also separated into distinct files. This modular approach helps in keeping the project organized and simplifies the management of styles and components.

The project already contains folders for `Article`, `Header`, and `Welcome` components inside the `./src/components/` directory. You are expected to add further components, such as `Navigation`.

## Features

- **Component-based architecture**: Split the app into reusable components based on the UI structure.
- **Modular CSS**: Organize the CSS into separate files corresponding to their components.
- **Testing**: Ensure the solution works by running tests using `npm test`.

## Installation

To get started with the project, clone this repository and install the dependencies:

```bash
git clone https://github.com/kizo-88/react_decompose.git
cd react_decompose
npm install
```

## Usage

1. **Install Prettier Extension**: Use the provided VSCode settings to enable format on save.
2. **Component Development**: Follow the React task guidelines to split your `App.js` into components.
3. **Testing**: Run `npm test` to ensure the solution is correct and all tests pass.
4. **Deploy**: Replace `<your_account>` with your GitHub username in the demo link and add it to your pull request description.

## Folder Structure

```bash
src/
  components/
    Article/
      Article.js
      Article.css
    Header/
      Header.js
      Header.css
    Welcome/
      Welcome.js
      Welcome.css
    Navigation/
      Navigation.js
      Navigation.css
```

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the components.
- **Vite**: Used for the development server and build tools.
- **Prettier**: Code formatter for consistency.
- **Jest/Cypress**: For running tests.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new pull request

## License

This project is licensed under the GPL-3.0 License.

---

Feel free to adjust any section based on specific details about the project if needed!
