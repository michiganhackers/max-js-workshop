var Fs          = require("fs")
  , ResumeJson  = null
  , ResumePath  = [__dirname, "../../public/json/resume.json"].join("/")
;

module.exports.jsonResume = function jsonResume(cb)
{
  if(ResumeJson) {
    cb(null, ResumeJson);
  } else {
    Fs.readFile(ResumePath, function(err, data) {
      if(err) { return cb(err); }
      cb(null, (ResumeJson = JSON.parse(data.toString())));
    });
  }
}
