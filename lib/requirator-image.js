define(function() {
  return {
    mimeType: '',

    processFile: function(content) {
      return content;
    },

    getFormat: function(url) {
      var extension = url.substring(url.lastIndexOf('.') + 1);
      return {
        responseType: 'blob',
        type: 'image/'
      };
    },

    processFile: function(content) {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(content);
      var image = new Image();
      image.src = imageUrl;
      return image;
    }

  }
});
