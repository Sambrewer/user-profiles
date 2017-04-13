let users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  },
  {
    name: 't',
    password: 't',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req, res, next) {
    let ifFound = false;
    users.filter((name, ind) => {
      if (users[ind].name === req.body.name && users[ind].password === req.body.password){
        req.session.currentUser = users[ind];
        res.status(200).send({userFound: true})
        console.log('found user',req.session, req.sessionID);
        ifFound = true;
      }
    })

      if (ifFound === false) {
        res.status(404).send({userFound: false});
      }
  }
}
