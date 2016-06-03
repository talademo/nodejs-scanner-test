function callme() {
    //console.log("Called!");
    setTimeout(callme, 1000);
}

console.log("App started!");
setTimeout(callme, 1000);

process.on('SIGINT', function () {
    console.log("App exiting!");
    process.exit(0);
});
