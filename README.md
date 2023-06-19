# TEch--BloGG


 # ![](https://img.shields.io/badge/SeQuelize-ExpressJs-blue) ![](https://img.shields.io/badge/license-MIT-brightgreen) ![](https://img.shields.io/badge/mysql-ORM-orange) ![](https://img.shields.io/badge/node.js-Routes-red) ![](https://img.shields.io/badge/MVC-Handlebars-red)




 ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Database Configuration](#database-configuration)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)


## Description
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!
This project is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## Installation
To set up the project on your local machine, follow these steps:

1.Clone the repository: git clone <repository_url>
2.Navigate to the project directory: cd TEch--BloGG
3.Install the dependencies: npm install

## Usage
To start the server, run the following command:

`node  .\seeds\seed.js`

`npx nodemon server.js`
The server will start running on http://localhost:3001.

.

## Database Configuration
This project uses Sequelize as an ORM (Object-Relational Mapping) tool to interact with the database. To configure the database connection, modify the config/connection.js file with your own database credentials.
`module.exports = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your_username',
    password: 'your_password',
    database: 'your_database',
  },
  // ...
}`
Use the `schema.sql` file in the `db` folder to create your database with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.

## Contributing
Contributions to this project are welcome. To contribute, follow these steps:

* Fork the repository
* Create a new branch: git checkout -b feature/my-feature
* Make your changes and commit them: git commit -am 'Add my feature'
* Push to the branch: git push origin feature/my-feature
* Open a pull request

## Testing
deployed link - 

## License
This project is licensed under the MIT license. For more information about the license, go to [License](https://choosealicense.com/licenses/mit/).

## Questions
 If you have encounter any issues or have any Questions Regarding this Project. Connect with me at

- Email -Amrit.gill3005@gmail.com 
- Github - [Amritpal-Kaur0](https://github.com/Amritpal-Kaur0) 
