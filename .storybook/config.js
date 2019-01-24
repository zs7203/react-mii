import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }
function loadStories() {
  require("../stories/MiNav");
  require("../stories/MiHeader");
  require("../stories/MiHero");
  require("../stories/MiCube");
  require("../stories/MiFlash");
  require("../stories/MiCard");
  require("../stories/MiFooter")
}

configure(loadStories, module);
