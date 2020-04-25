module.exports = {
  extend: "apostrophe-widgets",
  label: "Full Width Text",
  beforeConstruct(self, options) {
    options.addFields = [...options.addFields, { 
      type: 'select',
      name: 'font',
      def: 'sans-serif',
      label: 'Font',
      choices: options.fonts.map(font => {
        return {
          label: font,
          value: font
        }
      })
    }, {
      type: 'boolean',
      name: 'forceUppercase',
      def: false,
      label: 'Uppercase?'
    }
  ]
  },
  skipInitialModal: true,
  addFields: [{
    name: 'textContent',
    type: 'singleton'
  }],
  construct(self, options) {
    self.pushAsset("stylesheet", "widget");
    self.pushAsset("script", "fitty.min");
    self.pushAsset("script", "widget");
  },
};
