import { initPageHeightAdj, initAuthorInfo, initResponsiveNav, initSmoothScroll, initCollapsibleSections, initThemeToggle, adjInitScroll } from './modules/index.js';
import { initMoveFocusSkipLink, initShowNotice } from './utils/index.js';

const OFFSET = -20;

document.addEventListener("DOMContentLoaded", function() {

  initPageHeightAdj();
  initMoveFocusSkipLink('skip-link-main-content');
  initAuthorInfo();
  initResponsiveNav();
  initSmoothScroll({ offset: OFFSET, duration: 400 });
  initThemeToggle();
  initCollapsibleSections({expandedLabel: " - show", collapsedLabel: " - hide"});
  initShowNotice();
  
});

window.addEventListener('load', function() {
  adjInitScroll({ offset: OFFSET, delay: 300 });
});