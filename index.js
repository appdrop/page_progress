const title = document.title;

const updateProgress = () => document.title = '[' + Math.round(document.documentElement.scrollTop * 100 / document.body.scrollHeight) + '%] ' + title;

updateProgress();

window.addEventListener("scroll", updateProgress);
