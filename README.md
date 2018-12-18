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
