var Resume = require("../models/resume")
;

// This will functions as the home page for the time being
module.exports.Resume = {
  get: function(req, res) {
    Resume.jsonResume(function(err, resume) {
      if(err) { return res.end(err.message); }
      var opts = {type: req.query.type||"default"};
      res.render("pages/resume", {resume: resume, opts: opts});
    })
  }
}
