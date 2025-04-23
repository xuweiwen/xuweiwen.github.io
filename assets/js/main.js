import { initResponsiveNav } from './modules/greedy-navigation.js';
import { initSmoothScroll } from './modules/smooth-scroll.js';
import { initCollapsibleSections } from './modules/collapse.js';
import { initAuthorInfo } from './modules/author-info.js';


document.addEventListener("DOMContentLoaded", function() {
  
  initAuthorInfo()
  initResponsiveNav();
  initSmoothScroll({ offset: -20, duration: 400 });
  initCollapsibleSections({expandedLabel: " - show", collapsedLabel: " - hide"});
  
});
