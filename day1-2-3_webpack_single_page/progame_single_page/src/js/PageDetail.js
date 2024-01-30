const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");
    const API_KEY = process.env.RAWG_API_KEY

    const displayGame = (gameData) => {
      const { name, released, description, background_image, website, rating, ratings_count, tags, developers, platforms, genres, publishers } = gameData;
      const articleDOM = document.querySelector(".page-detail .article");
      articleDOM.querySelector("div.titleBox h2.title").innerHTML = name;
      articleDOM.querySelector("p.release-date").innerHTML = released;
      articleDOM.querySelector("p.description").innerHTML = description;
      document.querySelector(".banner").style.backgroundImage = `url("${background_image}")`;
      document.querySelector(".banner a").href = website
      document.querySelector(".vote").innerHTML = `${rating}/5 - ${ratings_count} votes`
      document.querySelector(".tag").innerHTML = tags.map(tag => tag.name).join(", ")
      document.querySelector(".developer").innerHTML = developers.map(developer => developer.name).join(", ")
      document.querySelector(".platform").innerHTML = platforms.map(p => p.platform.name).join(", ")
      document.querySelector(".genre").innerHTML = genres.map(genre => genre.name).join(", ")
      document.querySelector(".publisher").innerHTML = publishers.map(publisher => publisher.name).join(", ")
    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };

    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">

        <div class="banner">
          <a><div class="banner__websiteBtn"><p>Check Website</p><img src="./src/assets/images/arrow.png" alt="arrow icone"></div></a>
        </div>

        <div class="article">

          <div class="titleBox">
            <h2 class="title"></h2>
            <p class="vote"></p>
          </div>
          <p class="tag"></p>

          <h5>Plot</h5>
          <p class="description blockText"></p>

          <div class="gameInfoContainer">
            <div class="gameInfoBlock">
              <h5>Release date</h5>
              <p class="release-date blockText"></p>
            </div>
            <div class="gameInfoBlock">
              <h5>Developer</h5>
              <p class="developer blockText"></p>
            </div>
            <div class="gameInfoBlock">
              <h5>Platforms</h5>
              <p class="platform blockText"></p>
            </div>
            <div class="gameInfoBlock">
              <h5>Publisher</h5>
              <p class="publisher blockText"></p>
            </div>
            <div class="gameInfoBlock">
              <h5>Genre</h5>
              <p class="genre blockText"></p>
            </div>
          </div>

          <h4>BUY</h4>

        </div>

      </section>
    `;

    preparePage();
  };

  render();
};

  export { PageDetail };