/* 
    ? Router
    * an object handling routing and middleware only
    * helps with scope pollution (access to all methods when not needed )


    ? Basic Routing
    * router.method() handles reconnet type (get, POST, PATCH, PUT, DELETE,etc.)
    * endpoint
    * callback with business logic and req/res as parameter
    * response is then sent
    */

//import express and invoke its router interface
const router = require("express").Router()


/* 
  ? GET request
  * has header and the endpoint
*/

router.get("/health", (req, res) => {
    /*     console.log(req); */
    res.status(200).json({
        message: "ther server is up and running"
    })
})

/* 
  ? POST request
  * comes with a body
  * body holds a payload
*/

router.post("/postroute", (req, res) => {
    let name = req.body.name

    res.status(200).json({
        message: `this is the post route", ${name}`
    })
})

/* 
 ? Quick Challenge: don't hardcode method in message. Where could you get its name?

*/
router.put("/", (req, res) => {
    console.log(req)
    res.status(200).json({
        message: `You hit the ${req.method} route`
    })
})

router.delete("/", (req, res) => {
    res.status(200).json({
        message: `You hit the ${req.method} route`
    })
})
//exprts all modified content of the object to access elsewhere
module.exports = router
// * For this to work need to import it to app.js

/* 
  ? Query Params
  * is a key-value pair added to the end of a URL after ?
  * Query parameters let the client send small values in the URL
  * we can pass key value pairs into our server
  * great for filtering , searching, sorting or pagination 
  ! if there is sensitive data do not use query params
  * example below: 
*/

router.get("/filter", (req, res) => {
    console.log(req.query);
    /*  res.status(200).json({
         message: "ther server is up and running"
     }) */
    /* 
        ? Object Destructuring
        * a way to extract properties from an object
        * save us repeating ourselves 
    */

    /*  
       * let name = req.query.name
       * let age = req.query.name
       * let email = req / this.query.email 
    */

    // ? same as above code, but shortcut way
    let { name, age, email } = req.query
    /* 
    * req.query has 3 properties: name, age, and email
    * creating variable that has identifier as name, age , ane email
    *  which match the property of the object property  
    */
    console.log(name, age, email)

    res.status(201).json({
        message: "Created user",
        user: { name, age, email }
    })
})

/* 
request query:
http://127.0.0.1:4000/filter?name=DD&age=20&email=abc@hjdf.com
127.0.0.1:4000 : socket
.filter : endpoint
name=DD&age=20&email=abc@hjdf. : query param


*/


/* 
    ? Params
    * a dynamic route
    * parameters within an object
    * server-side, they will us to dynamically inject a value
    * business logic retrieves data based on param value
    * denoted by /:key (colon)
    * value is accessed using request.params
*/

// * anything after /:id is a variable
// * which means /anything
//  * example : https://github.com/mrpndev/fs11-mvc-controllers-routes
/* router.get("/:id", (req, res) => {
    console.log(req.params)
    // ? id becomes a variable in the world of endpoints
    console.log("This is your params objects", req.params)
    console.log("This is your params object value", req.params.id)

    // Object destructuring
    let { id } = req.params
    console.log(id)

    res.status(200).json({
        message: `Reached ${req.method} route`,
        id
    })
}) */




/*
  ! this URL will never be reached
  
*/
/* router.get("/:user", (req, res) => {
    // just a "/" endpoint
    // anything after : becomes a variable
    console.log("User endpoint reacher")
}) */

router.get("/users/:user", (req, res) => {
    // just a "/" endpoint
    // anything after : becomes a variable
    console.log(req.params)
    // url: http://127.0.0.1:4000/users/dor
    //output:  { user: 'dor' }
})

// ? A workaround by prepending a subroute (github)
router.get("/github/:username/:repo", (req, res) => {
    console.log(req.params)
})

// for example /mrpndev/fs11-mvc-controllers-routes/
// pretend that with url: http://127.0.0.1:4000/github/mrpndev/fs11-mvc-controllers-routes/
/* output: {
username: 'mrpndev',
    repo: 'fs11-mvc-controllers-routes'
} */



/*
? Challenge
* Economics of Countries API
* build an MVC + helpers express server
* install all dependencies
* create auth.js and routes.js files in the controllers
* ensure you have your .env configured
* tl;dr shell of a project
* build the following routes:
    * /register and /login (under auth)
    * under routes
        * GET /all countries
        * POST /new country
        * GET /:country to get one country
        * PUT /:id to update a country
        * DELETE /:id to delete a country
! test every route in postman
*/
const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Austrian Empire",
    "Azerbaijan",
    "Baden",
    "Bahamas, The",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Bavaria",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin (Dahomey)",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Brunswick and Lüneburg",
    "Bulgaria",
    "Burkina Faso (Upper Volta)",
    "Burma",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands, The",
    "Central African Republic",
    "Central American Federation",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo Free State, The",
    "Cook Islands",
    "Costa Rica",
    "Cote d’Ivoire (Ivory Coast)",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Czechoslovakia",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Duchy of Parma",
    "East Germany (German Democratic Republic)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Federal Government of Germany",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Grand Duchy of Tuscany, The*",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Hanover",
    "Hanseatic Republics",
    "Hawaii",
    "Hesse",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kingdom of Serbia/Yugoslavia",
    "Kiribati",
    "Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Lew Chew (Loochoo)",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mecklenburg-Schwerin",
    "Mecklenburg-Strelitz",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nassau",
    "Nauru",
    "Nepal",
    "Netherlands, The",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "North German Confederation",
    "North German Union",
    "North Macedonia",
    "Norway",
    "Oldenburg",
    "Oman",
    "Orange Free State",
    "Pakistan",
    "Palau",
    "Panama",
    "Papal States",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Piedmont-Sardinia",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Genoa",
    "Republic of Korea (South Korea)",
    "Republic of the Congo",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Schaumburg-Lippe",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands, The",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Texas",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Two Sicilies",
    "Uganda",
    "Ukraine",
    "Union of Soviet Socialist Republics",
    "United Arab Emirates, The",
    "United Kingdom, The",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Württemberg",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];
router.get("/countries", (req, res) => {
    /*     console.log(req); */
    res.status(200).json({
        countries: countries
    })
})


router.post("/countries", (req, res) => {

    countries.push(req.body.countries);
    res.status(201).json(countries);

})

router.get("/countries/:country", (req, res) => {
    console.log(req.params)
    // ? id becomes a variable in the world of endpoints
    console.log("This is your params objects", req.params)
    console.log("This is your params object value", req.params.id)

    // Object destructuring
    let { country } = req.params
    console.log(country)

    res.status(200).json({
        message: `Reached ${req.method} route`,
        country
    })
})

router.put("/countries/:country", (req, res) => {
    let update_country_name = req.body.country.lowercase()
    if (countries.includes(update_country_name)) {
        const i = countries.indexOf(update_country_name);
        countries[i] = update_country_name;
    }
    res.status(200).json({
        countries
    })

})

router.delete("/", (req, res) => {
    res.status(200).json({
        message: `You hit the ${req.method} route`
    })
})