import './css/null.css';
import './css/vars.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { renderEntireTree } from './render';
import state from './redux/state';

window.state = state;

renderEntireTree(state);

reportWebVitals();
