# RabobankTest

## Prerequisites

Use [nvm](https://github.com/creationix/nvm) to switch node versions. Project was tested on:

- Node v8.11.3 `nvm install v8.11.3`
- Yarn v1.10.1 `npm i -g yarn@1.10.1`

## Operations with records

Below ops put output files to `records/dist`

- `yarn parse:csv:records` convert csv records to json
- `yarn parse:xml:records` convert xml records to json
- `yarn merge:records` merge two json files into one
- `yarn validate:records` validate records and generate invalid records json
- `copy:records:to:assets` copy invalid records json to app's assets folder (`src/assets/records`)
- `yarn records` do all of the above combined

## Git flow

Following [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) branching strategy is forced
on `pre-push` by `yarn enforce:gitflow`. Push from branch will fail if branch name doesn't correspond to Git Flow.

## Commiting

Run `yarn commit` to commit files via [Commitizen](https://github.com/commitizen/cz-cli),
following [Conventional changelog](https://github.com/conventional-changelog/conventional-changelog).
For easier committing you'll be provided with cli prompt.

Committing files via `git commit` will not provide a prompt and it will still force you to follow conventional commit format.

## Development server

Run `yarn start` for a dev server. The app will automatically rebuild and replace changed parts of the app without page refresh thanks to **hot module replacement**.

## Unit tests

For execution of unit tests run:

- `yarn test:app` for rabobank-test app

- `yarn test:lib` for components library

- `yarn test:parser` for records parser and validator

## Linting

For execution of unit tests run:

- `yarn lint:app` for rabobank-test app

- `yarn lint:lib` for components library

## End-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Prettify

Run `yarn prettify` to keep the code formatting consistent. Settings available in `.prettierignore` & `.prettierrc` in the root.
Executed by default on pre-commit, pre-push and in ci.

## Coverage

Run `yarn coverage` to test the codebase against unit-test coverage thresholds set in `src/karma.conf.js` and generate a coverage report.

## Changelog

Run `yarn changelog` to generate `CHANGELOG.md` in the root, based on commit history formatted according to conventional changelog.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## SSR

To verify that SSR works, run:

- `yarn ssr` to build client and server and serve with server-side rendering
- `curl http://localhost:4200/ > curl.html` that will put all the contents of the retrieved html file via http request to **curl.html** in the root.

All contents of the app component will be rendered to retrieved html file. If you do the same with `yarn start` the retrieved html file will only contain `<app-root></app-root>` element but not its content.

## CI

Steps in `Travis CI` include:

- Commit linting
- Prettifying
- Parser & Validator unit tests
- Linting rabobank-test app
- Linting components library
- Unit testing rabobank-test app
- Unit testing components library
- Unit test coverage
- E2E testing
- Build

## Deploy

Deployed app is available [here](https://nongrata081.github.io/rabobank-test/)

## Analyze bundle size

Run `yarn bundle:report` to see the bundle size report by [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

## Analyze performance

Performance reports are generated via [Lighthouse](https://github.com/GoogleChrome/lighthouse). Network simulation is 3G by default.

Run `yarn ssr` to build and serve app with SSR and run:

- `yarn lighthouse:mobile` to generate report with mobile device emulation
- `yarn lighthouse:desktop` to generate report for desktop

Add `--view` flag to open report after generation.

## TODO

- Automate dependency updates via [renovate](https://github.com/renovatebot/renovate)
- Add [SonarQube](https://github.com/SonarSource/sonarqube) for contintuous inspection (code quality and cyclomatic complexity)
- Add visual regression testing
- Add A11Y testing

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
