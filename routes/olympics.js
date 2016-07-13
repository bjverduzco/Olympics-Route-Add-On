var router = require('express').Router();

//arrays of objects of the names and origins as well as their respective sport
var archery = [{name: 'Mackenzie Brown', origin: 'Flint, Texas', sport: 'Archery'}, {name: 'Brady Elison', origin: 'Globe, Ariz', sport: 'Archery'}, {name: 'Zach Garrett', origin: 'Wellington, Mo.', sport: 'Archery'}, {name: 'Jake Kaminski', origin: 'Gainesville, Fla.', sport: 'Archery'}];
var badminton = [{name: 'Phillip Chew', origin:'Orange, Calif.', sport: 'Badminton'}, {name: 'Eva Lee', origin:'Diamond Bar, Calif.', sport: 'Badminton'}, {name: 'Paula Lynn Obanana', origin:'West Covina, Calif.', sport: 'Badminton'}, {name: 'Sattawat Pongnairat', origin:'Orange, Calif.', sport: 'Badminton'}, {name: 'Howard Shu', origin:'Anaheim, Calif.', sport: 'Badminton'}, {name: 'Jamie Subandhi', origin:'Westminster, Calif.', sport: 'Badminton'}, {name: 'Iris Wang', origin: 'Arcadia, Calif.', sport: 'Badminton'}];
var canoeKayak = [{name: 'Casey Eichfeld', origin: 'Drums, Pa.', sport: 'Canoe/Kayak'}, {name: 'Maggie Hogan', origin: 'Huntington Beach, Calif.', sport: 'Canoe/Kayak'}, {name: 'Devin McEwan', origin: 'Salisbury, Conn.', sport: 'Canoe/Kayak'}, {name: 'Ashley Nee', origin: 'Darnestown, Md.', sport: 'Canoe/Kayak'}, {name: 'Michal Smolen', origin: 'Gastonia, N.C.', sport: 'Canoe/Kayak'}];
var judo = [{name: 'Colton Brown', origin: 'Piscataway, N.J.', sport: 'Judo'}, {name: 'Angelica Delgado', origin: 'Miami, Fla.', sport: 'Judo'}, {name: 'Nick Delpopolo', origin: 'Davie, Fla.', sport: 'Judo'}, {name: 'Kayla Harrison', origin: 'Middletown, Ohio', sport: 'Judo'}, {name: 'Marti Malloy', origin: 'Oak Harbor, Wash.', sport: 'Judo'}, {name: 'Travis Stevens', origin: 'Tacoma, Wash.', sport: 'Judo'}];
var tableTennis = [{name: 'Yijun Feng', origin: 'Atlanta, Ga.', sport: 'Table Tennis'}, {name: 'Kanak Jha', origin: 'Milpitas, Calif.', sport: 'Table Tennis'}, {name: 'Timothy Wang', origin: 'Houston, Texas', sport: 'Table Tennis'}, {name: 'Jennifer Wu', origin: 'Fort Lee, N.J.', sport: 'Table Tennis'}, {name: 'Lily Zhang', origin: 'Palo Alto, Calif.', sport: 'Table Tennis'}, {name: 'Jiaqi Zheng', origin: 'Fremont, Calif.', sport: 'Table Tennis'}];
var randAthletes = [];
//base min as well as base maxlengths based upon the number of people in each array
var min = 0;
var maxArchery = archery.length;
var maxBadminton = badminton.length;
var maxCanoeKayak = canoeKayak.length;
var maxJudo = judo.length;
var maxTableTennis = tableTennis.length;

//list of routers based upon the situation
router.get('/', function(request, response){
  response.send('Please go to /all /archery /badminton /canoeKayak /judo or /tableTennis to see the full list of the athletes competing in those events, or go back to the index.html in order to get a random person from each event.');
});

//gets all of the arrays and concats them and then sends them
router.get('/all', function(request, response){
  var total = archery.concat(badminton.concat(canoeKayak.concat(judo.concat(tableTennis))));
  response.send(total);
});

//originally returns the arrray of archers
//now finds a random archer and sends that in the response
router.get('/archery', function(request, response){
  //response.send(archery);
  var randArchery = getRandomInt(min, maxArchery);
  randArchery = archery[randArchery];
  console.log(randArchery);
  response.send(randArchery);
});

//originally returns the arrray of badminton
//now finds a random badmintoner and sends that in the response
router.get('/badminton', function(request, response){
  // response.send(badminton);
  // response.send('The names are: ' + badminton.name + '\nThe origin cities are: ' + badminton.origin);
  var randBadminton = getRandomInt(min, maxBadminton);
  randBadminton = badminton[randBadminton];
  console.log(randBadminton);
  response.send(randBadminton);
});

//originally returns the arrray of canoer
//now finds a random canoer and sends that in the response
router.get('/canoeKayak', function(request, response){
  // response.send(canoeKayak);
  // response.send('The names are: ' + judo.name + '\nThe origin cities are: ' + judo.origin);
  var randCanoeKayak = getRandomInt(min, maxCanoeKayak);
  randCanoeKayak = canoeKayak[randCanoeKayak];
  console.log(randCanoeKayak);
  response.send(randCanoeKayak);
});

//originally returns the arrray of judoist
//now finds a random judoist and sends that in the response
router.get('/judo', function(request, response){
  // response.send(judo);
  // response.send('The names are: ' + judo.name + '\nThe origin cities are: ' + judo.origin);
  var randJudo = getRandomInt(min, maxJudo);
  randJudo = judo[randJudo];
  console.log(randJudo);
  response.send(randJudo);
});

//originally returns the arrray of table tennis player
//now finds a random table tennis player and sends that in the response
router.get('/tableTennis', function(request, response){
  // response.send(tableTennis);
  // response.send('The names are: ' + tableTennis.name + '\nThe origin cities are: ' + tableTennis.origin);
  var randTableTennis = getRandomInt(min, maxTableTennis);
  randTableTennis = tableTennis[randTableTennis];
  console.log(randTableTennis);
  response.send(randTableTennis);
});

//gets a random athlete from each respective sport and then push them all onto a single array and sends it
router.get('/randomAthletes', function(request, response){
  var randArchery = getRandomInt(min, maxArchery);
  var randBadminton = getRandomInt(min, maxBadminton);
  var randCanoeKayak = getRandomInt(min, maxCanoeKayak);
  var randJudo = getRandomInt(min, maxJudo);
  var randTableTennis = getRandomInt(min, maxTableTennis);
  randAthletes = [];

  randAthletes.push(archery[randArchery]);
  randAthletes.push(badminton[randBadminton]);
  randAthletes.push(canoeKayak[randCanoeKayak]);
  randAthletes.push(judo[randJudo]);
  randAthletes.push(tableTennis[randTableTennis]);
  console.log(randAthletes);

  if(randAthletes.length === 5){
    response.send(randAthletes);
  } else{
    console.log(randAthletes);
    response.sendStatus(500);
  }

});

//random function inclusive of min and exclusive of the max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = router;
