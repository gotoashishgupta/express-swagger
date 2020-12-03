module.exports = function (app) {
  /**
   * @swagger
   * /v1/appConfig/{namespace}:
   *  get:
   *     tags:
   *       - appConfig
   *     description: appConfig parent
   *     produces:
   *       - application/json
   *     responses:
   *      '200':
   *       description: A successful response
   *     parameters:
   *      - name: namespace
   *        in: path
   *        description: app config namespace
   *        required: true
   *        schema:
   *          type: string
   */
  app.get("/v1/appConfig/:namespace", function (req, res) {
    console.log(req.params);
    res.json({ namespace: req.params.namespace });
  });

  /**
   * @swagger
   * /v1/appConfig/app/{namespace}:
   *  get:
   *     tags:
   *       - appConfig
   *     description: appConfig parent
   *     produces:
   *       - application/json
   *     responses:
   *      '200':
   *       description: A successful response
   *     parameters:
   *      - name: namespace
   *        in: path
   *        description: app config namespace
   *        required: true
   *        schema:
   *          type: string
   */
  app.get("/v1/appConfig/app/:namespace", function (req, res) {
    console.log(req.params);
    res.json({ namespace: req.params.namespace, msg: "sub1" });
  });
};
