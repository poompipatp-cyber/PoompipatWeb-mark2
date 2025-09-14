const routes = {
  '/': 'pages/home.html',
  '/project': 'pages/project.html',
  '/resume': 'pages/resume.html',
  '/about': 'pages/about.html',
  '404': 'pages/404.html'
};

const navigate = (path) => {
  window.history.pushState({}, path, window.location.origin + path);
  handleLocation();
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch('/' + route).then((data) => data.text());
  document.getElementById('app').innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = navigate;

document.addEventListener('DOMContentLoaded', () => {
  handleLocation();

  document.body.addEventListener('click', e => {
    // Use event.composedPath() to traverse the Shadow DOM
    const link = e.composedPath().find(el => el.tagName === 'A' && el.hasAttribute('data-link'));

    if (link) {
      e.preventDefault();
      navigate(link.getAttribute('href'));
    }
  });
});
