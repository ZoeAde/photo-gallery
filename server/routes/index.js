var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Deker Adelman' });
});

router.get('/video', function(req, res, next) {
  res.render('video.html', { title: 'Drone Videos' });
});

router.get('/photography', function(req, res, next) {
  res.render('photography.html', { title: 'Photography' });
});

router.get('/services', function(req, res, next) {
  res.render('services.html', { title: 'Services' });
});

router.get('/about', function(req, res, next) {
  res.render('about.html', { title: 'Deker Adelman' });
});

router.get('/astrophotography', function(req, res, next) {
  res.render('astro.html', { title: 'Astrophotography' });
});

router.get('/steelwool', function(req, res, next) {
  res.render('steelwool.html', { title: 'Steel Wool' });
});

router.get('/portraits', function(req, res, next) {
  res.render('portraits.html', { title: 'Portraits' });
});

router.get('/landscape', function(req, res, next) {
  res.render('landscape.html', { title: 'Landscape' });
});

module.exports = router;
