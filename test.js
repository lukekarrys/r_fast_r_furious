var assert = require('assert'),
    fast = require('./fast');

assert(! fast('The Sorrow and the Pity'));

assert(! fast('La La Land'));

assert(! fast('Cape Fear (1962)'));

assert(! fast('Cape Fear (1991)'));

assert(fast('The Fast and the Furious'));

assert(fast('2 Fast 2 Furious'));

assert(fast('The Fast and the Furious: Tokyo Drift'));

assert(fast('Fast & Furious'));

assert(fast('Fast Five'));

assert(fast('Fast & Furious 6'));

assert(fast('Furious 7'));

assert(fast('The Fate of the Furious'));

assert(! fast('Fast & Furious 100: Electric Boogaloo'));

assert(! fast('2 Fast & Furious'));

assert(! fast('The Fast 2 Furious'));

assert(! fast('The Fast Five'));

assert(! fast('Fast & Furious: Tokyo Drift'));

assert(! fast('2 Fast 2 Furious 6'));

assert(! fast('Fast 2 Furious'));

assert(! fast('Fast and the Furious'));

assert(! fast('The Fast and the Furious 6'));

assert(! fast('Fast & Furious 7'));

assert(! fast('The Furious'));

/*
 * TODO: fix these false positives

  assert(! fast('Furious'));

  assert(! fast('Furious 6'));
*/
