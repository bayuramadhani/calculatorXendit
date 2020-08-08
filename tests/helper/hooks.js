const { client } = require('nightwatch-cucumber');
const { After, Before } = require('cucumber');

/*
** Run before tag @clear
*/
Before({ tags: '@clear' }, () => {
  return client.execute(`
        localStorage.clear();
        sessionStorage.clear();
      `).deleteCookies().refresh();
});

/*
** Run after tag @quit
*/
After({ tags: '@quit' }, () => {
  return client.end();
});
