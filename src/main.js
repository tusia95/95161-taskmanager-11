import {createSiteMenuTemplate} from './components/site-menu';
import {createSortingTemplate} from './components/sorting';
import {createTaskTemplate} from './components/task';
import {createTaskEditTemplate} from './components/task-edit';
import {createFilterTemplate} from './components/filter';
import {createLoadMoreButtonTemplate} from './components/load-more';


const TASK_COUNT = 3;


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createSortingTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

new Array(TASK_COUNT)
.fill(``)
.forEach(
    () => render(taskListElement, createTaskTemplate(), `beforeend`)
);
const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
