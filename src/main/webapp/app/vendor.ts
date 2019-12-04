/* after changing this file run 'npm run webpack:build' */
import { library } from '@fortawesome/fontawesome-svg-core';

import '../content/scss/vendor.scss';
import { faHome, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);
library.add(faSave);
library.add(faHome);
