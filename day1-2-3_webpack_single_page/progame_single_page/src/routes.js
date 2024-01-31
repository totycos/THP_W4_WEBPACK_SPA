// Import our js
import { Home } from './js/Home'; 
import { PageList } from './js/PageList'; 
import { PageDetail } from './js/PageDetail'; 

const routes = {
    '': PageList,
    'pagelist': PageList,
    'pagedetail': () => {
      const { hash } = window.location;
      const pathParts = hash.substring(1).split('/');
      const articleId = pathParts[1] || '';
      
      // Récupérer les données du lien cliqué
      const screenshots = document.querySelector(`a[href="#pagedetail/${articleId}"]`).dataset.screenshots;
    
      // Appeler la fonction PageDetail avec les données nécessaires
      PageDetail(articleId, screenshots);
    },
  };

export { routes };
  

