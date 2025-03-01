
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://chakridol143.github.io/hyderabad/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/hyderabad"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 595, hash: '733caa90489275ca6807d651809580abf1b9694b5b7a923a3d04379006af131d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1108, hash: '3c687a01ef4cd48c27c2e6d63d69a3be1623ebc3720436f699dd2c1b71826d45', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3056, hash: '7cf94fd98315a3ba3e8dc37ae7feb44ed97292f86f3b3ac72a65837bd8b7b589', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
