const express = require("express");
const ListingController = require("../controllers/listingsController");

const router = express.Router();

router.get("/", ListingController.getListingsByCat);
router.get("/:id", ListingController.getListingByID);
router.post("/", ListingController.createListing);

module.exports = router;
