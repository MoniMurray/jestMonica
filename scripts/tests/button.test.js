const buttonclick = require("../button");

beforeEach(() => {
    // document.body.innerHTML = "<p id='par'></p>";
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM test", () => {
    test("expects p content to change", () => {
        buttonclick();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked!");
    });
    test("expects h1 to exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    })
});
