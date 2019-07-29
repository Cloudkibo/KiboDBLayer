const pidusage = require('pidusage')
const fs = require('fs')
const profiler = require('v8-profiler');

module.exports = function(){
var isRecording = false
setInterval(function () {
  pidusage(process.pid, function (err, stats) {
    if(stats.cpu > 20 && !isRecording){
      isRecording = true
      profiler.startProfiling('1', true);
      setTimeout(function() {
        var profile = profiler.stopProfiling('1');
        profiler.deleteAllProfiles();
        profile.export(function(error, result) {
          fs.writeFile(`profiler/${new Date()}.cpuprofile`, result, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            isRecording = false
          });
        });
      }, 60000); // record for 1 minute
      
    }
    // => {
    //   cpu: 10.0,            // percentage (from 0 to 100*vcore)
    //   memory: 357306368,    // bytes
    //   ppid: 312,            // PPID
    //   pid: 727,             // PID
    //   ctime: 867000,        // ms user + system time
    //   elapsed: 6650000,     // ms since the start of the process
    //   timestamp: 864000000  // ms since epoch
    // }
  });
}, 1000)
}