# Sump Thing Frontend
The frontend for the Sump Thing project

[![vulnerabilities](https://snyk.io/test/github/pyazo/sump-thing-frontend/badge.svg)](https://snyk.io/test/github/pyazo/sump-thing-frontend)
[![maintainability](https://api.codeclimate.com/v1/badges/62b901f8385ee44de558/maintainability)](https://codeclimate.com/github/pyazo/sump-thing-frontend/maintainability)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

Sump thing is an affordable aquarium monitor which is totally open source. The frontend is beautifully designed and intended to be maintained by the community.

--- 

## Installation

- Clone the repo
- `yarn install`
- `yarn dev`


## Testing

- `yarn test`
   - This runs a verbose test suite on the entire project
- `yarn test:watch`
   - This runs the jest watcher, you can configure this at runtime however you like, it is most commonly used for watching as new tests are written / saved to run them automatically.

## Contributions

Contributions are welcomed and, in fact, encouraged. Here is how to make a contribution:

- Fork the repo
- Create a branch called `patch:<number>`.
   - For your first contribution, `patch:1` will work.
- Write good, quality code.
- Ensure the code you wrote is well tested.
- Make a PR to `develop`.
   - There will be no community PRs accepted into `master` as it is a reflection of what is currently live in production.
- Ensure the codeclimate maintainability and coverage has not dropped. Small decreases will be considered.
- After the PR is created, a project maintainer will review it. All comments should be resolved before the PR is merged.