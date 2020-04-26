module.exports = {
  beforeConstruct: function (self, options) {
    options.addFields = [
      {
        type: "select",
        name: "lang",
        label: "Language",
        def: "en",
        choices: [
          {
            label: "English",
            value: "en",
          },
          {
            label: "Hungarian",
            value: "hu",
          },
        ],
      },
      {
        type: "string",
        name: "pageTitle",
        label: "Page Header",
      }
    ].concat(options.addFields || []);
  },
};
