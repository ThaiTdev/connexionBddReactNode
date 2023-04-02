
# Création d'un Backend avec "express"  et  "sequelize"




## Création du projet

Pour créer mon projet, je tape dans mon terminal la ligne de commande suivante.

```bash
  npx create-react-app + nom du projet
```
    
## Création des dossiers frontend et backend

1) je crée un dossier Frontend dans lequel je colle tous les fichiers existants.

2) je crée un dossier Backend
## Création du backend
```bash
  npm init
```
 Cette ligne va importer le fichier "package.json"

### Importation des packages

```bash
  npm install express
```
Cette ligne de code va installer Express et importer le fichier "package-lock.json" et le dossier "node_modules"

```bash
  npm install dotenv 
```
Cette ligne de code va installer le package "dotenv" qui va nous permettre la création du fichier ".env" qui contiendra nos variables d'environnement

### Les MiddleWares

```bash
  npm install morgan --save -dev
```
Ce MiddleWare nous permet de voir les requêtes dans le terminal

```bash
  npm install body-parser --save 
```
Celui-ci nous permet de renvoyer les données sous format "Json"

### Le fichier .env

Dans ce fichier je vais créer ma variable "PORT"  

### Création du fichier server.js


## Usage/Examples

```javascript
const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const app = express();

///////////////////////// initialisation de la dbb
// const sequelize = require("./src/db/sequelize");
//je passe la methode initDb a sequelize
// sequelize.initDb();
//////////////////////////

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 6000;

app.use(morgan("dev")).use(express.json()).use(bodyParser.json()).use(cors());

require("./src/routes/testBdd")(app);

app.listen(PORT, () => {
  console.log(`le server se trouve sur le port:${PORT}`);
});

```



## Modification du script dans le package.json

Pour commencer, importer le package "nodemon"

```bash
  npm install nodemon --save
```
Dans le fichier package.json 

```json
  "scripts": {
    "start": "nodemon server.js",
    "client": "cd frontend && npm start",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
Ceci nous permet de lancer le serveur et le projet avec la ligne de commande suivante :

```bash
  npm start
```
## Importation de l'ORM Sequelize

Sequelize va nous connecter à notre base de données.

```bash
  npm install Sequelize --save

```

### Création du fichier Sequelize.js

```javascript
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
```
