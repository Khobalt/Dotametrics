var replay = require('./replay.js');

module.exports = function(app) {
  app.get('/api/cs/:heroName', function(req, res, next) {
    console.log('getting last hits for ' + req.params.heroName);
    var lastHitsOverTime = replay.countLastHits(req.params.heroName);
    res.json(lastHitsOverTime);
  });

  app.get('/api/denies/:heroName', function(req, res, next) {
    console.log('getting denies for ' + req.params.heroName);
    var deniesOverTime = replay.countDenies(req.params.heroName);
    res.json(deniesOverTime);
  })

  app.get('/api/kda/:heroName', function(req, res, next) {
    console.log('getting kda for ' + req.params.heroName);
    var kda = replay.countKda(req.params.heroName);
    res.json(kda);
  })

  app.get('/api/runes', function(req, res, next) {
    console.log('getting rune data');
    var runes = replay.countRunes();
    res.json(runes);
  })

};