// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
    construct(self, options) {
        self.pushAsset('stylesheet', 'theme')
        self.pushAsset('script', 'theme')
    }
};
  