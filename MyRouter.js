const fs = require('fs');
const myHandler = require('./MyHandler');

function route(pathname, handel, res) {
    console.log('Routing request for ' + pathname);
    if (typeof handel[pathname] === 'function') {
        handel[pathname](res);
    } else {
        pathFile = '.' + pathname + '.html'; // ex) ./page.html
        if (fs.existsSync(pathFile)) {
            console.log(pathFile + 'is found.');
            myHandler.htmlFile(res, pathFile);
        } else {
            console.log('No handler for ' + pathname);
            let body = '404 Not Found';
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(body);
            res.end();
        }
    }
}