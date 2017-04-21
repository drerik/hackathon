
const jenkins = require("./jenkins");


jenkins.list((data) => {
  data.forEach((job) => {
    //console.log(job.name);
  });
});


var buildCallback = (queueNumber) => {
  console.log("Build id: " + queueNumber);
  jenkins.isJobRunning(jobName, (data) => {
    console.log(data);
  });
};

const jobName = 'jenkins-test-project';

jenkins.build(jobName, buildCallback);
