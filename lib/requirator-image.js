define(function() {
  return {
    mimeType: '',

    getFormat: function(url) {
      var extension = url.substring(url.lastIndexOf('.') + 1);
      return {
        responseType: 'blob',
        type: 'image/'
      };
    },

    processFile: function(content, callback) {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(content);
      var image = new Image();
      image.src = imageUrl;

      image.addEventListener('load', function() {
        callback(image);
      });
    }

  }
});
