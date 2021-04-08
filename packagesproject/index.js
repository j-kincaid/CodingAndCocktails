var _ = require('lodash');
var moment = require('moment');
var today = moment().format('dddd');                                 //L1
var wine = 'I like red wine on ' + today;                                //L2
var h4Heading = document.querySelector('h4');                //L3
h4Heading.textContent = _.replace(wine, 'red', 'blue');     //L4
