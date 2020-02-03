const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

class CustomWorld {
  async launchBrowser() {
    this.browser = await puppeteer.launch({ headless: false })
    this.page = await this.browser.newPage()
  }

  async closrBrowser() {
    await this.browser.close()
  }

  async visit() {
    await this.page.goto('http://zero.webappsecurity.com/index.html')
  }

  async fillLoginForm() {
    await this.page.waitForSelector('#login_form')
    await this.page.type('#user_login', 'username')
    await this.page.type('#user_password', 'password')

  }


}

setWorldConstructor(CustomWorld)