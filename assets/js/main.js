import { initPageHeigheAdj, initAuthorInfo, initResponsiveNav, initSmoothScroll, initCollapsibleSections } from './modules/index.js';
import { showNotice } from './utils/index.js';

document.addEventListener("DOMContentLoaded", function() {

  initPageHeigheAdj();
  initAuthorInfo()
  initResponsiveNav();
  initSmoothScroll({ offset: -20, duration: 400 });
  initCollapsibleSections({expandedLabel: " - show", collapsedLabel: " - hide"});
  
});
