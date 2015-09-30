import BlueBirdPromise from 'bluebird';
import BabelPromise from 'babel-runtime/core-js/promise';

BabelPromise.default = BlueBirdPromise;

import 'app/app';
