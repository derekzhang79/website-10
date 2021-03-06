require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

// const debug = true;
const debug = false;

// state = 'after'
const icoBar = {state: 'before', time: '09/06/2017 22:00:00', amount: '107100000 WAN', bar: '70%'};

const ICO = ['1 ETH = 880 WAN', '1 ETH = 790 WAN', '1 ETH = 750 WAN'];
// ICO = ['8.5折', '9.5折', '原价'];

let mysite;
let mysiteCrt;
let gd1;
if (debug) {
  mysite = 'D:/zsunData/myPro/WanChainNode/website/websiteVersion2.0/src/cert/wanchain.org.key';
  mysiteCrt = 'D:/zsunData/myPro/WanChainNode/website/websiteVersion2.0/src/cert/3bb55a3526ededcc.crt';
  gd1 = 'D:/zsunData/myPro/WanChainNode/website/websiteVersion2.0/src/cert/gd_bundle-g2-g1.crt';
} else {
  mysite = '/root/wanchain/website/src/cert/wanchain.org.key';
  mysiteCrt = '/root/wanchain/website/src/cert/3bb55a3526ededcc.crt';
  gd1 = '/root/wanchain/website/src/cert/gd_bundle-g2-g1.crt';

  // mysite = '/root/website/src/cert/wanchain.org.key';
  // mysiteCrt = '/root/website/src/cert/3bb55a3526ededcc.crt';
  // gd1 = '/root/website/src/cert/gd_bundle-g2-g1.crt';
}

module.exports = Object.assign({
  debug: debug,
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Wanchian website',
    description: 'This is the Wanchain website',
    head: {
      titleTemplate: 'Wanchian website: %s',
      meta: [
        {name: 'description', content: 'Wanchian website.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Wanchian website'},
        {property: 'og:image', content: ''},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Wanchian website.'},
        {property: 'og:description', content: 'Wanchian website.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@erikras'},
        {property: 'og:creator', content: '@erikras'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    },
    files: {
      WhitepaperCH: '/files/Wanchain-Whitepaper-CH-version.pdf',
      WhitepaperEN: '/files/Wanchain-Whitepaper-EN-version.pdf',
      YellowpaperCH: '/files/Wanchain-Yellowpaper-CH-version.pdf',
      YellowpaperEN: '/files/Wanchain-Yellowpaper-EN-version.pdf',
      CommercialCH: '/files/Wanchain-Commercial-Whitepaper-CH-version.pdf',
      CommercialEN: '/files/Wanchain-Commercial-Whitepaper-EN-version.pdf',
    },
    upload: {
      devpath: 'D:/zsunData/myPro/WanChainNode/website/websiteVersion2.0/static/upload/',
      devserver: 'http://localhost:8080/',
      devuploadDir: 'D:/image',

      prodpath: '/root/wanchain/website/static/upload/',
      prodserver: 'https://www.wanchain.org/',
      produploadDir: '/root/wanchain/image',
    },
    JS: {
      wangeditor: {
        script: {
          src: '/wangeditor/js/require.js',
          dataMain: '/wangeditor/js/main',
        },
        link: {
          href: '/wangeditor/editor/css/wangEditor.min.css',
          type: 'text/css',
          rel: 'stylesheet',
        }
      }
    },
    ICO: ICO,
    icoBar: icoBar,
    cert: {
      mysite: mysite,
      mysiteCrt: mysiteCrt,
      gd1: gd1,
    }

  },

}, environment);
