
// class CurrentURL {
//   constructor(url) {
//     this.url = url;
//     this.a = document.createElement('a');
//     this.a.href = url;
//   }
//   parseURL(url) {
//     return this.a.protocol.replace(':', '');
//     return {
//       source: this.url,
//       protocol: link.protocol.replace(':', ''),
//       host: link.hostname,
//       port: link.port,
//       query: link.search,
//       params: (function () {
//           var ret = {},
//               seg = link.search.replace(/^\?/, '').split('&'),
//               len = seg.length,
//               i = 0,
//               s;
//           for (; i < len; i++) {
//               if (!seg[i]) {
//                   continue;
//               }
//               s = seg[i].split('=');
//               ret[s[0]] = s[1];
//           }
//           return ret;
//       })(),
//       file: (link.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
//       hash: link.hash.replace('#', ''),
//       path: link.pathname.replace(/^([^\/])/, '/$1'),
//       relative: (link.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
//       segments: link.pathname.replace(/^\//, '').split('/')
//     };
//   }
// }
//
// const someLink = new CurrentURL("https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python")
//
// const a = document.createElement('a');
// a.href = CurrentURL.url;
//
// console.log(someLink.parseURL());

// function parse_URL(url) {
    // var a = document.createElement('a');
    // a.href = url;
//     return {
//         source: url,
//         protocol: a.protocol.replace(':', ''),
//         host: a.hostname,
//         port: a.port,
//         query: a.search,
//         params: (function () {
//             var ret = {},
//                 seg = a.search.replace(/^\?/, '').split('&'),
//                 len = seg.length,
//                 i = 0,
//                 s;
//             for (; i < len; i++) {
//                 if (!seg[i]) {
//                     continue;
//                 }
//                 s = seg[i].split('=');
//                 ret[s[0]] = s[1];
//             }
//             return ret;
//         })(),
//         file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
//         hash: a.hash.replace('#', ''),
//         path: a.pathname.replace(/^([^\/])/, '/$1'),
//         relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
//         segments: a.pathname.replace(/^\//, '').split('/')
//     };
// }
