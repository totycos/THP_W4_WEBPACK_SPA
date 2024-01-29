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
              <p>Editeur : </p>
            </div>
          </div>
          <a href="#pagedetail/${article.id}"><h3>${article.name}</h3></a>
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

  const addHoverEffect = () => {
    const imgBlocks = document.querySelectorAll('.imgBlock__img');

    imgBlocks.forEach((imgBlock) => {
      imgBlock.addEventListener('mouseenter', () => {
        console.log('HELLO')
        imgBlock.classList.add('hovered');
      });

      imgBlock.addEventListener('mouseleave', () => {
        imgBlock.classList.remove('hovered');
      });
    });
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;

    preparePage();
    addHoverEffect();
  };

  render();
};

  export { PageList };