const PageList = (argument = '', quantity = 9, platform= '') => {
  const articleQuantity = quantity
  const platformSelectValue = platform
  console.log(platformSelectValue)

  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');
    const API_KEY = process.env.RAWG_API_KEY

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
          <div class="cardGame__imgBlock">
            <div class="imgBlock__img">
              <img src="${article.background_image || './src/assets/images/default-img.png'}" alt="game image">
            </div>
            <div class="imgBlock__info">
              <p>${article.released}</p>
              <p>Editeur : ?????</p>
              <p>${article.rating}/5 - ${article.ratings_count} votes</p>
              <p class="info__genre">${article.genres.map(genre => genre.name).join(', ')}
            </div>
          </div>
          <a href="#pagedetail/${article.id}" data-screenshots=${article.short_screenshots.map(screenshot => screenshot.image)}><h3>${article.name}</h3></a>
          <div class="cardGame__platform">${buildPlatforms(article.parent_platforms.map(e => e.platform.slug))}</div>
        </article>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");

      // Check number of articles to display or not "Show more" button
      const articleCount = document.querySelectorAll('.cardGame').length
      if (articleCount !== 9 && articleCount !== 18)
        document.getElementById('showMoreBtn').style.display = "none"
      else
        document.getElementById('showMoreBtn').style.display = "flex"

      showMoreListener() 
      platfromListener()
    };

    const fetchList = (url, argument, quantity, platform) => {
      let finalURL = argument ? `${url}&search=${argument}` : `${url}&dates=2024-01-01,2035-12-31`;
      finalURL = quantity ? `${finalURL}&page_size=${quantity}` : `${finalURL}&page_size=9`
      finalURL = platform ? `${finalURL}&parent_platforms=${platform}` : finalURL
      console.log(finalURL)
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument, articleQuantity, platformSelect.value);

  };

  const render = () => {
    pageContent.innerHTML = `
      <div class="introBlock">
          <h2 class="introBlock__title">Welcome,</h2>
          <p class="introBlock__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ab at sunt mollitia, exercitationem dolore
              doloremque. Ducimus et dolorum inventore facilis perspiciatis modi ullam repellendus id laudantium dolorem
              velit repudiandae ad voluptatem quam nobis, odit explicabo magni illum corrupti molestiae dicta quae
              assumenda. Voluptas impedit vero eligendi, eaque quae soluta quasi ea dolores sit odio aut provident unde
              quas qui iure ratione voluptatem cupiditate enim. Ex facere eligendi veniam perspiciatis ut impedit commodi,
              dignissimos laboriosam quis iste atque dolore delectus at ab animi, repellat illo iusto! Sequi iste dolores
              ex voluptates fugiat. Placeat neque mollitia quis voluptatibus corporis laborum quisquam!
          </p>
      </div>

      <div class="btn plateformSelectorBtn">
          <label for="platform-select">Platform :</label>
          <select name="platform" id="platformSelect">
              <option value="">any</option>
              <option value="2" ${platformSelectValue === '2' ? 'selected' : ''}>PlayStation</option>
              <option value="3" ${platformSelectValue === '3' ? 'selected' : ''}>Xbox</option>
              <option value="7" ${platformSelectValue === '7' ? 'selected' : ''}>Nintendo</option>
              <option value="1" ${platformSelectValue === '1' ? 'selected' : ''}>PC</option>
              <option value="4,8" ${platformSelectValue.includes('4') || platformSelectValue.includes('8') ? 'selected' : ''}>Mobile</option>
              <option value="5,6" ${platformSelectValue.includes('5') || platformSelectValue.includes('6') ? 'selected' : ''}>Linux</option>
          </select>
      </div>

      <section class="page-list">
        <div class="articles"><p class="loading">LOADING...</p></div>
      </section>

      <div class="btn" id="showMoreBtn">
        <p class="showMoreBtn__text">Show more</p>
      </div>
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
      PageList(research.value, undefined, platformSelect.value)
    }
  })
}


// ###### SHOW MORE ######
// #######################
const showMoreListener = () => {
  // Constante "Show more" button
  const showMore = document.getElementById('showMoreBtn')

  // Listener
  showMore.addEventListener('click', function () {
    const articleCount = document.querySelectorAll('.cardGame').length
    if (articleCount === 9)
      PageList(research.value, 18, platformSelect.value)
    
    if (articleCount === 18)
      PageList(research.value, 27, platformSelect.value)
  })
}


// ### SELECT PLATFORM ###
// #######################
const platfromListener = () => {
  // Constante platform selection
  const platformSelect = document.getElementById('platformSelect')

  // Listener
  platformSelect.addEventListener('change', function() {
    const articleCount = document.querySelectorAll('.cardGame').length
    console.log(`research value = ${research.value}`)
    console.log(`articleCount = ${articleCount}`)
    console.log(`platform value = ${platformSelect.value}`)
    PageList(research.value, articleCount, platformSelect.value)
  })
}