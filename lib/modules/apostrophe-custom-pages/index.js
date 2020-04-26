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
    options.arrangeFields = [
      {
        name: 'basics',
        label: 'Basics',
        fields: [ 'pageTitle', 'lang', 'title', 'slug', 'published', 'tags' ]
      }
    ]
  },
};
