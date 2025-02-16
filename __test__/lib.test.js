jest.mock("../js/postToServer.js");
const puppeteer = require("puppeteer");

const {
  generateResult,
  validateInput,
  checkAndGenerate,
} = require("../js/lib");

// unit test for generateResult()
test("testing generate result function", () => {
  expect(generateResult("1", "this is a test")).toBe(
    "User ID: 1 created an article titled this is a test"
  );
});

// unit test for validateInput()

test("testing validate input function", () => {
  expect(validateInput(1, true, true)).toBeTruthy();
});

// integration test for checkAndGenerate

test("testing checkAndGenerate function", async () => {
  const result = await checkAndGenerate(1, "title 1", "this is the test");
  expect(result).toBe("User ID: 1 created an article titled title 1");
});

// test("checking e2e for add post", async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80,
//     args: ["--window-size=1920,1080"],
//   });

//   const page = await browser.newPage();
//   await page.goto("http://127.0.0.1:5500/index.html");
//   await page.click("input#userid");
//   await page.type("input#userid", "1");
//   await page.click("input#title");
//   await page.type("input#title", "Puppeteer title");
//   await page.click("textarea#article");
//   await page.type("textarea#article", "Puppeteer article");

//   await page.click("#addNewPostBtn");

//   await browser.close();
// }, 40000);
