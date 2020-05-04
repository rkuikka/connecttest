  var getJSON = function(url, callback) {

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'json';

      xhr.onload = function() {

          var status = xhr.status;

          if (status == 200) {
              callback(null, xhr.response);
          } else {
              callback(status);
          }
      };

      xhr.send();
  };

  getJSON('https://my-json-server.typicode.com/rkuikka/connecttest/products/'+Math.floor((Math.random() * 3)+1),  function(err, data) {

      if (err != null) {
          console.error(err);
      } else {

      }
  });
