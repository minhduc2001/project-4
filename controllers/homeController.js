const music = require('../model/music')
const path = require('path')

console.log(music);
class HomeController {
    homePage(req, res) {
        try {
            res.status(200).json()
        } catch (error) {

        }
    }
    sendListSongs(req, res) {
        try {
            res.status(200).json(music)
        } catch (error) {

        }
    }
    handle(req, res) {
        // const file = '/public/music/'+ 'song1.mp3';

        const file = '';
        console.log(path.join(process.cwd(), '/'));
        const stat = fs.statSync(file);
        const total = stat.size;
        if (req.headers.range) {
            console.log(req.headers.range);
        }
        fs.exists(file, (exists) => {
            if (exists) {
                const range = req.headers.range;
                const parts = range.replace(/bytes=/, '').split('-');
                const partialStart = parts[0];
                const partialEnd = parts[1];

                const start = parseInt(partialStart, 10);
                const end = partialEnd ? parseInt(partialEnd, 10) : total - 1;
                const chunksize = (end - start) + 1;
                const rstream = fs.createReadStream(file, { start: start, end: end });


                res.writeHead(206, {
                    'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
                    'Accept-Ranges': 'bytes', 'Content-Length': chunksize,
                    'Content-Type': 'audio/mpeg'
                });
                rstream.pipe(res);

            } else {
                res.send('Error - 404');
                res.end();
                // res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mpeg' });
                // fs.createReadStream(path).pipe(res);
            }
        })
    }

}
module.exports = new HomeController();