# @nteract/plotly

A minified version of the [plotly](https://plot.ly/javascript/) library.

## Installation

```bash
npm install @nteract/plotly
```

## Example

```javascript
const Plotly = require("@nteract/plotly");
const div = document.createElement("div");
document.body.appendChild(div);
Plotly.plot(
  div,
  [
    {
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }
  ],
  {
    margin: { t: 0 }
  }
);
```

## For maintainers: Creating a release

This module uses [`semantic-release`](https://github.com/semantic-release/semantic-release) to automatically release new versions via Travis.
Therefor we utilize the [conventional-changelog-standard](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md)
for writing our commit messages and PR titles.

Be sure to change the commit message from a greenkeper PR before merging according to the version bump in order to take advantage of the automatic releases:

#### Patch Release

```
fix(plotly): Bump plotly from 1.25.0 to 1.25.1
```

#### ~~Minor~~ Feature Release

```
feat(plotly): Bump plotly from 1.25.1 to 1.26.0
```

#### ~~Major~~ Breaking Release

```
feat(plotly): Bump plotly from 1.26.0 to 2.0.0

BREAKING CHANGE: This change requires a major version bump
```
