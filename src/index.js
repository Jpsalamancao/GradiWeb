import Template_header from '../src/structure/Template_header';
import './styles/index.css';



(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template_header();
  })();