module.exports = function (app) {
  /**
   * @swagger
   * /v1/liveness:
   *  get:
   *     tags:
   *       - healthcheck
   *     description: healthcheck
   *     produces:
   *       - application/json
   *     responses:
   *      '200':
   *       description: A successful response
   */
  app.get("/v1/liveness", function (req, res) {
    res.json({ msg: "Welcome to simpplr yelp fusion" });
  });
};
