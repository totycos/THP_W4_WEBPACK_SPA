// Import our js
import { Home } from './js/Home'; 
import { PageList } from './js/PageList'; 
import { PageDetail } from './js/PageDetail'; 

const routes = {
    '': PageList,
    'pagelist': PageList,
    'pagedetail': PageDetail,
  };

export { routes };
  

