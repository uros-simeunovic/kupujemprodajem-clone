const db = require('../db');
const queries = require('../helper/queries');

class ListingController {
    // GET /api/listings
    static getListingsByCat(req, res) {
        db.query(queries.getListingsByCat, [1], (err, result) => {
            if (err) return res.status(400).json(err);
            res.status(200).json(result);
        })
    }

    // GET /api/listings/:id
    static getListingByID(req, res) {
        db.query(queries.getListingByID, [req.params.id], (err, result) => {
            if (err) return res.status(400).json(err);
            res.status(200).json(result.rows[0]);
        })
    }

    // POST /api/listings
    static createListing(req, res) {
        const { title, description, price } = req.body;
        db.query(queries.createListing, [title, description, price, 1, 1], (err, result) => {
            if (err) return res.status(400).json(err);
            res.status(200).json("Listing created");
        });
    }
}

module.exports = ListingController;