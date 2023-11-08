// Listings
const getListingsByCat = `SELECT * FROM listings WHERE categoryid = $1`;
const getListingByID = `SELECT * FROM listings WHERE listingid = $1`;
const createListing = `INSERT INTO listings (title, description, price, userid, categoryid) VALUES ($1, $2, $3, $4, $5)`;

// Users
const registerUser = `INSERT INTO users (first_name, last_name, email, password, salt) VALUES ($1, $2, $3, $4, $5)`;
const checkIfUserExists = `SELECT * FROM users WHERE email = $1`;

module.exports = {
    createListing,
    getListingsByCat,
    getListingByID,
    registerUser,
    checkIfUserExists
}