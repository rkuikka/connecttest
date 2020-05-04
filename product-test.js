fetch('https://my-json-server.typicode.com/rkuikka/connecttest/products/'+Math.floor((Math.random() * 3)+1))
  .then(response => response.json())
  .then(json => console.log(json))
