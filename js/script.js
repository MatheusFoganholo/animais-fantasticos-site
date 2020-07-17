// Importing Modules
import TabNav from './modules/navigation-by-tabs.js';
import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion-list.js';
import AnimeWhenScroll from './modules/anime-when-scroll.js';
import Modal from './modules/modal.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOpeningHours from './modules/opening-hours.js';
import fetchAnimals from './modules/fetch-animals.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

// Navigation By Tabs
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

// Smooth Scroll
const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

// Accordion List
const accordionList = new Accordion('[data-anime="accordion"] dt');
accordionList.init();

// Modal
const modal = new Modal('[data-modal="open-modal"]', '[data-modal="close-modal"]', '[data-modal="container"]');
modal.init();

// Anime When Scroll
const animeWhenScroll = new AnimeWhenScroll('[data-anime="scroll"]');
animeWhenScroll.init();

// Initializing Functions
initDropdownMenu();
initMenuMobile();
initOpeningHours();

// Fetch Animals
fetchAnimals('../../animals-api.json', '.numeros-grid');

// Fetch Bitcoin
fetchBitcoin('https://blockchain.info/ticker', '.bitcoin');
