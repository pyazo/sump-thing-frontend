import * as exports from 'connected-react-router';

// * This doesn't mimick the real implementation
// * but makes it easier for us to test that the
// * correct routes are being called
const push = route => route;

module.exports = { ...exports, push };
