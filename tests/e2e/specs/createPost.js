// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'test if create post page work': browser => {
    browser
      .url(`${process.env.VUE_DEV_SERVER_URL}admin/posts/create`)
      .waitForElementVisible('body', 6000)
      .waitForElementVisible('input[data-vv-name="title"]', 6000)
      .setValue('input[data-vv-name="title"]', 'A new post title')
      .waitForElementVisible('textarea[data-vv-name="body"]', 6000)
      .setValue('textarea[data-vv-name="body"]', 'A new post body')
      .click('button[id="submit-btn"]')
      .pause(6000)
      .assert.containsText('input[data-vv-name="title"]', '')
      .assert.containsText('textarea[data-vv-name="body"]', '')
      .end()
  }
}
