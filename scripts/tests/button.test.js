const buttonclick = require("../button");

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM test", () => {
    test("expects p content to change", () => {
        buttonclick();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked!");
    });
});
