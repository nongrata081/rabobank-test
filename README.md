# RabobankTest

## Git flow

Following [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) branching strategy is forced
on `pre-push` by `yarn enforce:gitflow`. Push from branch will fail if branch name doesn't correspond to Git Flow.

## Commiting

Run `yarn commit` to commit files via [Commitizen](https://github.com/commitizen/cz-cli),
following [Conventional changelog](https://github.com/conventional-changelog/conventional-changelog).
For easier committing you'll be provided with cli prompt.

Committing files via `git commit` will not provide a prompt and it will still force you to follow conventional commit format.

## Development server

Run `yarn start` for a dev server. The app will automatically rebuild and replace changed parts of the app thanks to hot module replacement.

## Unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io) for `rabobank-test` app and `components` library. Watch mode disabled by default.

## Linting

Run `yarn lint` to execute linting for `rabobank-test` app and `components` library.

## End-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Prettify

Run `yarn prettify` to keep the code formatting consistent. Settings available in `.prettierignore` & `.prettierrc` in the root.
Executed by default on pre-commit, pre-push and in ci.

## Coverage

Run `yarn coverage` to test the codebase against unit-test coverage thresholds set in `src/karma.conf.js` and generate a coverage report.

## Changelog

Run `yarn generate:changelog` to generate `CHANGELOG.md` in the root, based on commit history formatted according to conventional changelog.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## SSR

Run `yarn ssr` to build and server and serve with server-side rendering.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## CI

Steps in `Travis CI` include:

- Commit linting
- Prettifying
- Code linting
- Unit testing
- Unit test coverage
- E2E testing
- Build

## Deploy

Deployed app is available [here](https://nongrata081.github.io/rabobank-test/)

## TODO

- Unit tests for parser and validator
- Unit tests `rabobank-test` app and `components` library
- E2E tests for `rabobank-test` app
- Automate dependency updates via [renovate](https://github.com/renovatebot/renovate)
- Add [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- Add [SonarQube](https://github.com/SonarSource/sonarqube) for contintuous inspection (code quality and cyclomatic complexity)
- Add [lighthouse](https://github.com/GoogleChrome/lighthouse) for audit, performance metrics & best practice
