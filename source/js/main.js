import {iosVhFix} from './utils/ios-vh-fix';
import {initSwiperEducation} from './modules/initSwiperEducation';
import { initBurgerMenu } from './modules/initBurgerMenu';
import {initDarkTheme} from './modules/initDarkTheme';
import {initSkillModals} from './modules/initSkillModals';
import {initReveal} from './modules/initReveal';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initSwiperEducation();
    initBurgerMenu();
    initDarkTheme();
    initSkillModals();
    initReveal();
  });
});
