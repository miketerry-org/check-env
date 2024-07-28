// tests for the "toBe" comparison function

// load all required modules
const path = require("path");
const check = require("../index.js");
const { describe, it } = require("node:test");

// load the environment variables
require("dotenv").config({ path: path.resolve("test/.testing.env") });

// define all tests for the toBe comparison
describe('tests for the "toBe comparison function', () => {
  it("should have the server port as 4000", () => {
    check("SERVER_PORT").toBe(4000);
  });

  it("should not have the server port as 4001", () => {
    check("SERVER_PORT").not.toBe(4001);
  });
});
