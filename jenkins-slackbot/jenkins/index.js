
const jenkins = require("./jenkins");


jenkins.list((data) => {
  data.forEach((job) => {
    console.log(job.name);
  });
});


var buildCallback = (data) => {
  console.log("Build id: " + data);
};

const jobName = 'jenkins-test-project'
let buildNumber = jenkins.build(jobName, buildCallback);

/*
jenkins.buildStatus(jobName, buildNumber, (data) => {
  console.log(data);
});
*/
