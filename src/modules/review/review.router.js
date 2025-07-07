const express = require ("express");
const { createReview, getReviewsByAdmin, getMyReviews, updateReview, deleteReview } = require("./review.controller");
const { upload } = require("../../utils/cloudnary");
const auth = require("../../middleware/auth");
const USER_ROLE = require("../user/user.constant");
const router = express.Router();

router.post ("/create",  upload.array("image", 5), // 🔹 Accept up to 5 images with field name "image"

  auth(USER_ROLE.admin, USER_ROLE.bussinessMan, USER_ROLE.user), createReview);

  router.get("/", getReviewsByAdmin);

  router.get("/my-review", getMyReviews);

  router.put("/edit/:id", updateReview);

  router.delete("/delete-Review/:id", deleteReview);

  const reviewRouter=router;
  module.exports=reviewRouter