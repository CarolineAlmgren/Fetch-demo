import "./css/style.css";

//class MovieList =

fetch("http://www.omdbapi.com/?s=halloween&apikey=bea28c6b")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.Search);

    for (let i = 0; i < data.Search.length; i++) {
      const container = document.getElementById("container");

      const div = document.createElement("div");
      div.classList = "movie";
      const h3 = document.createElement("h3");
      h3.id = "title";
      const h4 = document.createElement("h4");
      h4.id = "year";
      const stream = document.createElement("button")
      stream.id = "streamBtn"
      const img = document.createElement("img");

      img.src = data.Search[i].Poster;

      h3.innerHTML = data.Search[i].Title;
      h4.innerHTML = data.Search[i].Year;
      stream.innerHTML = "Streama nu";

      div.appendChild(h3);
      div.appendChild(h4);
      div.appendChild(stream)
      div.appendChild(img);
      container.appendChild(div);
    }
  });
