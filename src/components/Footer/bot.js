const puppeteer = require("puppeteer");
const axios = require("axios").default;
const fetch = require("node-fetch");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
const fs = require("fs").promises;
function checkFileExists(file) {
  return fs.promises
    .access(file, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
}
function run() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({ headless: true });

      const page = await browser.newPage();
      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36"
      );
      // if(checkFileExists("./cookies.json")){
      //   const cookiesString = await fs.readFile("./cookies.json");
      //   cookies = JSON.parse(cookiesString);
      //   await page.setCookie(...cookies);
      // }

      // await page.setRequestInterception(true);
      // page.on("request", (request) => {
      //   request.continue({
      //     method: "POST",
      //     postData: JSON.stringify(""),
      //     headers: {},
      //   });
      // });
      await page.goto(
        "https://www.zalando.pl/jordan-air-1-sneakersy-niskie-joc12o006-q13.html"
      );
      await page
        .waitForSelector("#picker-trigger", { timeout: 5000 })
        .catch(() => console.log("Class #picker-trigger doesn't exist!"));
      await page.evaluate(() => {
        return document.querySelector("#picker-trigger").click();
      });

      const sizes = await page.evaluate(() => {
        return Array.from(
          document.querySelectorAll('label[for*="size-picker"]')
        ).map((x) => x.getAttribute("for"));
      });
      console.log(sizes);
      await page
        .waitForSelector("input[value='JOC12O006-Q130080000']", {
          timeout: 5000,
        })
        .catch(() => console.log("Class size doesn't exist!"));
      await page.evaluate(() => {
        return document
          .querySelector("input[value='JOC12O006-Q130080000']")
          .click();
      });

      await page
        .waitForSelector(
          ".DJxzzA.u9KIT8.uEg2FS.U_OhzR.ZkIJC-.Vn-7c-.FCIprz.heWLCX.JIgPn9.LyRfpJ.pxpHHp.Md_Vex.NN8L-8.GTG2H9.MfX1a0.WCjo-q.EKabf7.aX2-iv.r9BRio.mo6ZnF.E6Km4r",
          {
            timeout: 5000,
          }
        )
        .catch(() => console.log("Class size doesn't exist!"));
      await page.evaluate(() => {
        return document
          .querySelector(
            ".DJxzzA.u9KIT8.uEg2FS.U_OhzR.ZkIJC-.Vn-7c-.FCIprz.heWLCX.JIgPn9.LyRfpJ.pxpHHp.Md_Vex.NN8L-8.GTG2H9.MfX1a0.WCjo-q.EKabf7.aX2-iv.r9BRio.mo6ZnF.E6Km4r"
          )
          .click();
      });

      await page
        .waitForSelector(
          ".z-navicat-header_navToolItem.z-navicat-header_navToolItem-bag > a",
          {
            timeout: 5000,
          }
        )
        .catch(() => console.log("Class size doesn't exist!"));
      await page.evaluate(() => {
        return document
          .querySelector(
            ".z-navicat-header_navToolItem.z-navicat-header_navToolItem-bag > a"
          )
          .click();
      });
      await page.waitForNavigation({ waitUntil: "networkidle2" });
      await page.evaluate(() => {
        document
          .querySelector(
            ".z-1-button.z-coast-base-primary-accessible.z-coast-base__totals-tile__button-checkout.z-1-button--primary.z-1-button--button"
          )
          .click();
      });
      await page.waitForNavigation({ waitUntil: "networkidle2" });
      console.log(page.url());
      // await page.$eval(
      //   "#login.email",
      //   (el) => (el.value = "eryk.ueberhan@gmail.com")
      // );
      // await page.$eval("#login.secret", (el) => (el.value = "ueberhan1"));
      // await page.evaluate(() => {
      //   document
      //     .querySelector(
      //       ".DJxzzA.u9KIT8.uEg2FS.U_OhzR.ZkIJC-.Vn-7c-.FCIprz.heWLCX.JIgPn9.LyRfpJ.pxpHHp.Md_Vex.NN8L-8.GTG2H9.MfX1a0.WCjo-q.EKabf7.aX2-iv.r9BRio.mo6ZnF.E6Km4r"
      //     )
      //     .click();
      // });
      // cookies = await page.cookies();
      // await fs.writeFile("./cookies.json", JSON.stringify(cookies, null, 2));
      // console.log(await page.url());
    } catch (e) {
      return reject(e);
    }
  });
}
run().then(console.log).catch(console.error);
