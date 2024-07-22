function Stopwatch() {
    let startTime = 0,
        endTime = 0,
        running = false,
        duration = 0;

    this.start = function () {
        if (!running) {
            running = true;
            startTime = performance.now();
        } else throw new Error("Stopwatch has already started.");
    };

    this.stop = function () {
        if (running) {
            running = false;
            endTime = performance.now();
            duration += endTime - startTime;
        } else throw new Error("Stopwatch has not started.");
    };

    this.reset = function () {
        startTime = 0;
        endTime = 0;
        running = false;
        duration = 0;
    };

    this.duration = function () {
        if (running) {
            return performance.now() - startTime + duration;
        } else {
            return duration;
        }
    };
}

// Usage:
const stopwatch = new Stopwatch();
stopwatch.start();

// Simulate a delay
setTimeout(() => {
    stopwatch.stop();
    console.log("Elapsed time (ms):", stopwatch.duration());
}, 1000);
