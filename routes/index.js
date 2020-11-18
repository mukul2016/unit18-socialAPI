const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  return res.send(
    "API endpoints are: /api/thoughts, api/thoughts/:thoughtId/, /api/thoughts/:thoughtId/reaction, /api/thoughts:/thoughtId/reactions/:reactionId,"
  );
  // api / thoughts /: thoughtId /
  // api / thoughts /: thoughtId / reactions /
  // api / thoughts /: thoughtId / reactions /: reactionId!
});

module.exports = router;
