console.log("Jenkins test script");

if ( process.env.JENKINS_URL ) {
  console.log("Got Jenkins url from env. variable. ");
} else {
  console.log("JENKINS_URL in not set. aborting!")
  process.exit(2)
}

const jenkins = require('jenkins')({ baseUrl: process.env.JENKINS_URL, crumbIssuer: true });

exports.list = function(callBack) {
  jenkins.job.list(function(err, data) {
    if (err) throw err;
    //console.log('inFunction' + data);
    callBack(data)
  });
}

exports.build = (jobName, callBack) => {
  jenkins.job.build(jobName, function(err, data) {
  if (err) throw err;

  callBack(data);
});
}
/*
exports.buildStatus = (jobName, buildId, callBack) => {
  jenkins.build.get(jobName, buildId, function(err, data) {
    if (err) throw err;

    callBack(data);
});
}
*/
