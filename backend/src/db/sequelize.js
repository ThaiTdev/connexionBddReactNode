//j'import sequelize et Datatype de sequelize
const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("../model/user");
const users = require("./mock-user");
//je crée une instance de sequelise pour me connecter à ma base de données
const sequelize = new Sequelize("nodeconnexion", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: false,
});
//j'instancie le model User et lui passe les methode sequelise et Datatype
// const initDb = () => {
//   return sequelize.sync({ force: true }).then((_) => {
//     users.map((user) => {
//       User.create({
//         email: user.email,
//         password: user.password,
//         categorie: user.categorie,
//       }).then((user) => console.log(user.toJSON()));
//     });
//     console.log("La base de donnée a bien été initialisée !");
//   });
// };
const User = UserModel(sequelize, DataTypes);

//je test ma connexion à la bdd
sequelize
  .authenticate()
  .then((_) =>
    console.log("la connexion  à la base de données a bien été établie.")
  )
  .catch((error) =>
    console.error("Impossible de se connecter à la base de données")
  );

module.exports = {
  // initDb,
  User,
};
