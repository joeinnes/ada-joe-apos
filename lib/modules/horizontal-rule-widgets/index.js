module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Horizontal Rule',        
  addFields: [{
    name: 'text',
    label: 'Central text',
    def: null,
    type: 'string'
  }, {
    name: 'lineColour',
    type: 'color',
    label: 'Line colour',
    def: '#000'
  }],
  construct(self, options) {
    self.pushAsset("stylesheet", "widget");
  },
};