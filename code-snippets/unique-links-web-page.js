// list all unique links on a page
new Set($$('a').map(link => link.href)).forEach(link => {
  if (link && link !== '') console.log(link);
});
