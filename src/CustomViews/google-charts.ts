import { Promise } from 'es6-promise';

// From https://github.com/kodyl/react-google-chart/blob/master/lib/google-jsapi-loader.js
const INTERVAL = 100;
const MAX_RETRIES = 20;

export function core() {
  return new Promise((resolve: any, reject: any) => {
    // don't create script tag if already exist
    if (window && window.google) return resolve();

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://www.gstatic.com/charts/loader.js';
    document.getElementsByTagName('body')[0].appendChild(s);

    let retries = 0;
    function ready () {
      if (window && window.google) {
        // console.log("Loaded Google Charts loader");
        clearInterval(interval);
        return resolve();
      }
      else if (retries > MAX_RETRIES) {
        return reject();
      }
      retries++;
    }

    const interval = setInterval(ready, INTERVAL);
  });
}

export function visualization() {
  return core().then(() => new Promise(resolve => {
    window.google.charts.load('current', {
      packages: [ 'corechart' ],
      callback: () => resolve(),
    });
  }));
}