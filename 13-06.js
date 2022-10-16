function foo() {
console.log('global function foo');
}

function bar() {
function foo() {
console.log('global function foo');
}

foo();
}

bar();