
const getPost = require("./getPost")
const mongoose = require("mongoose")
const Game = require("../model/game.model");
const SoftWare = require("../model/soft_ware.model")

const getData = async (page, link, pageIndex) => {
  for (let index = 13; index >= 0; index--) {
    await page.goto(`${link}?page=${pageIndex}`)
    await page.waitForSelector(".news")
    const url = await page.evaluate((index) => {
      let posts = document.querySelectorAll(".news")
      let url = posts[index].children[0].children[0].href;
      console.log(url);
      return url
    }, index)

    await page.goto(url)
    await page.waitForSelector("#wallpaper_img")
    await page.waitForSelector(".blog__content")
    await page.waitForSelector(".blog__content")
    // await page.waitForSelector(".tags li", {visible: true})
    await page.waitForSelector("#gioithieu_div")
    await page.waitForSelector(".infos li")
    // await page.waitForSelector("#trailer_div")
    // await page.waitForSelector("#thumbs_div")

    let post = await page.evaluate(getPost)
    // post.params = post._id.slice(-5);
    console.log("=====");
    await mongoose.connect("mongodb://localhost:27017/LND",{ useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.set('useFindAndModify', false);
    let conditions = { title: post.title };
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    SoftWare.findOneAndUpdate(conditions, post, options,async (err, result) => {
      if (err) throw err;
      console.log(result._id);

      let params = result._id.toString().slice(-5);
      await SoftWare.update(conditions, {params: params})

      console.log(`Add post ${index+1} in Page ${pageIndex} success!`);
    });
  }
}

module.exports = getData;