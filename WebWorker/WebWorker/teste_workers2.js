onmessage = function (evt) {
    var work = 11;
    var i = 0;
    var a = new Array(work);
    var sum = 0;
    for (i = 0; i < work; i++) {
        self.postMessage(i);
        sleepFor(1000);
    }
}

function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}