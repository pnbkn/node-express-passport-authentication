const Sequelize = require("sequelize");
const {
    TEXT,
    STRING,
    UUID,
    UUIDV4,
    BOOLEAN
  } = Sequelize;

const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/passportlogin",
  {
    logging: false
  }
);

const User = conn.define('user', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    username: {
      type: TEXT,
      notEmpty: true,
      notNull: true,
      unique: true
    },
    password: {
      type: STRING,
      notNull: true,
      notEmpty: true
    },
    email: {
      type: TEXT,
      notEmpty: true,
      notNull: true,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    isAdmin: {
      type: BOOLEAN,
      defaultValue: false
    }
  });

  const syncAndSeed = async () => {
    await conn.sync({ force: true }); //THIS NEEDS TO BE REMOVED IN FINAL VERSION
    const users = [
        {
          username: "madman",
          email: "madman@gmail.com",
          password: "MAD",
          isAdmin: true
        },
        {
          username: "applover",
          email: "applover@gmail.com",
          password: "APP",
          isAdmin: true
        },
        {
          username: "me",
          email: "me@gmail.com",
          password: "ME",
          isAdmin: false
        },
        {
          username: "yesno",
          email: "yesno@gmail.com",
          password: "YES",
          isAdmin: false
        }
      ];
    
      const [mmUser, alUser, meUser, yesnoUser] = await Promise.all(
        users.map(user => User.create(user))
      );
  }


  syncAndSeed()
  .then(() => console.log('success'))
  .catch(ex => console.log('ex'))


module.exports = {
  syncAndSeed,
  models: {
    User
  }
};

