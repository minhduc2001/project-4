const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')
const Comment = require('../model/Cmt')

router.get('/', homeController.homePage)
router.get('/list', homeController.sendListSongs)
router.get('/stream', homeController.handle);
router.get('/download', homeController.download);
router.post('/comment',homeController.pushedComment)
router.get('/comment', homeController.getAllcommentByMusic)
router.get('/push', ()=>{
    const cmt = new Comment();
    cmt.Music = '6291dac6ddde6de84d12ffc0';
    cmt.person = 'duc';
    cmt.comment = 'anh yeu emilia'

    cmt.save();
})
// router.get('/test', homeController.pushMusic);

module.exports = router;