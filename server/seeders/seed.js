const db = require('../config/connection');
const { User, Location } = require('../models');
const userSeeds = require('./userSeeds.json');
const locationSeeds = require('./locationSeeds.json');
db.once('open', async () => {
  try {
    
    await User.deleteMany({});
    await User.create(userSeeds);
    await Location.deleteMany({});
    await Location.create(locationSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
