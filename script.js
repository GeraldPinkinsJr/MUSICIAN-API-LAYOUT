fetch('http://127.0.0.1:3000/pianists')
.then(response => response.json()).then(data => console.log(data))

fetch("http://127.0.0.1:3000/bassists")
  .then((response) => response.json())
  .then((data) => console.log(data));

  fetch("http://127.0.0.1:3000/drummers")
    .then((response) => response.json())
    .then((data) => console.log(data));
