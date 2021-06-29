const assert = require("assert");
const solution = require("../problems/011");

describe("Grid", function () {
  it("constructor should read grid string and return a 20 x 20 grid", function () {
    let grid = new solution.Grid(solution.gridString);
    let gridRows = grid.getRows();
    assert.strictEqual(gridRows.length, 20);
    gridRows.forEach((row) => assert.strictEqual(row.length, 20));
  });
});
