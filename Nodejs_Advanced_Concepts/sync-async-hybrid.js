console.log("bar");

function f() {
  process.nextTick(() => console.log("foo"));
}

f();
setImmediate(() => {
  console.log("setImmediate");
});
