# Base template for React

## Demo link
Add link here: `[DEMO LINK](https://<your_account>.github.io/react_decompose/)`

## Task
Split the `App.js` into smaller components basing on CSS blocks. CSS should be split too.
- Create a sub folder in `components` per each component and put `js` and `css` files there.
- There should be 3 - 5 new components.

## Workflow
- Fork the repository with task
- Clone forked repository
    ```bash
    git clone git@github.com:<user_name>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Then develop

## Development mode
- Run `npm start` to start development server on `http://localhost:3000`
    When you run server the command line window will no longer be available for
    writing commands until you stop server (`ctrl + c`). All other commands you
    need to run in new command line window.
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- run `npm run lint` to check code style
- When you finished add correct `homepage` to `package.json` and run `npm run deploy`
- Add links to your demo in readme.md.
  - `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)` - this will be a
  link to your index.html
- Commit and push all recent changes.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo
(`master`).
- Add a link at `PR` to Google Spreadsheets.

## Project structure
- `src/` - directory for css, js, image, fonts files
- `build/` - directory for built pages

You should be writing code in `src/` directory.
