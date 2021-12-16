<div id="top"></div>

# quadB-test
This project is made for quadB internship test

![image](https://user-images.githubusercontent.com/54684919/146399300-fb5d69fc-3130-4680-a7e3-f8f77086f27e.png)

## Built With
* [Noje.js](https://nodejs.org/en/)
* [hbs](https://www.npmjs.com/package/hbs)
* [Passport](http://www.passportjs.org/)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Bootstrap](https://getbootstrap.com)
* [Cloudinary](https://cloudinary.com/)

## Routes/APIs
[BASE URL ]/URI

| URI                        | Method | Description                           |
|----------------------------|--------|---------------------------------------|
| /                          | GET    | Show all users                        |
| /update?user_id=[user id]  | GET    | Render update form (auth required)    |
| /update?user_id=[user id]  | PUT    | update the data of existing user      |
| /delete?user_id=[user id]  | DELETE | Delete user permanently from database |
| /image?user_id=[user id]   | GET    | Shows the user profile image          |
| /insert                    | GET    | Render the user registration form     |
| /insert                    | POST   | Add the new user to database          |
| /details?user_id=[user id] | GET    | Show the user details                 |
| /login                     | GET    | Render the login form                 |
| /login                     | POST   | Authenticate the login data           |
| /logout                    | GET    | Ends the user session                 |

## Getting started
 1. Fork the repo
 2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/quadB-test.git
   ```
 3. Install NPM packages
   ```sh
   npm install
   ```
 4. Set up a mysql server and use the dump file db/Dump20211216.sql to import database
 5. Configue the .env file for server secrets (I have added the .env file in this repo for reference, the 3rd party API secrets are created through temporary testing account / will be descarded soon)
## Screen Shots
#### Public Detail Page
![image](https://user-images.githubusercontent.com/54684919/146407924-41a6af84-004b-42bc-8f24-788e6f68ddbb.png)
#### Private Detail Page
![image](https://user-images.githubusercontent.com/54684919/146408130-7fe7d88f-9fa9-4c60-b41d-751d5d1fcd5f.png)
#### Update Page
![image](https://user-images.githubusercontent.com/54684919/146408235-79c8b862-b15c-467d-8e1a-a82f967a7c37.png)
#### Login Page
![image](https://user-images.githubusercontent.com/54684919/146408496-b4b04157-2c1c-40f5-aa69-da53f2232859.png)

## Contact

[@RajeswarSharma5](https://twitter.com/RajeswarSharma5) - rajeswar.sh47@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>
