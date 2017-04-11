const equal = require("assert").equal;
const join = require("path").join;

equal(require.resolve("./plotly.min.js"), join(__dirname, "plotly.min.js"));
