# Crafting a release

When a new version of plotly comes out, we release this package. The
renovate bot should notify when a new version is available.

## Steps

0. Prerequisite: Set up a development environment that has npm. Then, `npm install` if this is the first time using this repo.
1. Update `package.json` with new plotly release version.
2. Submit and merge a PR with the changes.
3. Build the package: `npm run build`
4. Run tests: `npm test`
5. Alternatively, you could run `npm run prepublish` instead of steps 3 and 4.
6. Add a git tag and GitHub release with the new version number.
7. Publish to npm: `npm publish`
8. Update the `README.md` npm badge to latest version.
