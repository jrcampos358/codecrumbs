const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const HASKELL_COMMENT_REGEX = /^([^--]*)--(.*)$/;
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(HASKELL_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
