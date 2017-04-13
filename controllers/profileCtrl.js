const users = require('./userCtrl');
const profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  },
  {
    name: 't',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
]
module.exports = {
  getFriendsProfiles: function(req, res, next) {
    var friendProfiles = [];
    console.log(req.session, req.sessionID);
    req.session.currentUser.friends.map((friends, ind) => {
      profiles.filter((common, ind2) => {
        if (req.session.currentUser.friends[ind] === profiles[ind2].name) {
          friendProfiles.push(profiles[ind2]);
        }
      })
    })
    console.log('friends',friendProfiles);
    res.status(200).send({currentUser: req.session.currentUser, friends: friendProfiles});
  }
}
