fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res => {
  if(res.ok) {
    return res;
  } else {
    throw Error(`Request rejected with status ${res.status}`);
  }
})
.catch(console.error)
