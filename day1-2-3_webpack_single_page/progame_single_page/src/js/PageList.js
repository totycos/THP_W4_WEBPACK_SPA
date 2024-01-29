const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');
    const API_KEY = process.env.RAWG_API_KEY

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
          <div class="cardGame__imgBlock">
            <div class="imgBlock__img">
              <img src="${article.background_image}" alt="game image">
            </div>
            <div class="imgBlock__info">
              <p>${article.released}</p>
              <p>Editeur : ?????</p>
              <p>${article.rating}/5 - ${article.ratings_count} votes</p>
              <p class="info__genre">${article.genres.map(genre => genre.name).join(', ')}
            </div>
          </div>
          <a href="#pagedetail/${article.id}"><h3>${article.name}</h3></a>
          <div class="cardGame__platform">${buildPlatforms(article.parent_platforms.map(e => e.platform.slug))}</div>
        </article>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
    // https://api.rawg.io/api/games?key=7f052a404021482ca44e2012ad28545d
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { PageList };


// Set svg icones
const buildPlatforms = (platformsArray) => {
  let svgs = []
  platformsArray.forEach((element) => {
    if (element === "playstation")
      svgs.push(`<img src='src/assets/images/ps4.svg' alt='ps4 logo'>`)

    if (element === "xbox")
      svgs.push(`<img src='src/assets/images/xbox.svg' alt='xbox logo'>`)

    if (element === "pc")
      svgs.push(`<img src='src/assets/images/windows.svg' alt='windows logo'>`)

    if (element === "nintendo")
      svgs.push(`<img src='src/assets/images/switch.svg' alt='switch logo'>`)

    if (element === "mac")
      svgs.push(`<img src='src/assets/images/linux.svg' alt='linux logo'>`)

    if (element === "android" || element === "ios")
      svgs.push(`<img src='src/assets/images/mobile.svg' alt='mobile logo'>`)

    return ""
  })
  return svgs.join("")
}

// ######## FORM #########
// #######################

// Form constantes
const myFormBtn = document.getElementById("researchBox__searchBtn");
const research = document.getElementById("researchBlock__research");

// Form submit listener : 
if (research.value !== null) {
  // On click
  myFormBtn.addEventListener('click', function() {
    PageList(research.value);
  });

  // On "enter" key pressed
  research.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      PageList(research.value)
    }
  })
}


