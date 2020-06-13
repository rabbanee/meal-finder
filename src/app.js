import './styles/style.css';
import './scripts/components/app-bar.js';
import './scripts/components/search-bar.js';

// fontawesome

import {
    library,
    dom
} from '../node_modules/@fortawesome/fontawesome-svg-core'
import {
    fas
} from '../node_modules/@fortawesome/free-solid-svg-icons'
import {
    far
} from '../node_modules/@fortawesome/free-regular-svg-icons'
import {
    fab
} from '../node_modules/@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
dom.i2svg()

import './scripts/components/meal-detail.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import main from './scripts/view/main.js';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', main);