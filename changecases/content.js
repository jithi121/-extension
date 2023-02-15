addEventListener("keydown", (event) => {

  if (event.altKey === true) {
    keys.a = true;
  }
  if (event.key === "z") {
    keys.s = true;
  }

if(keys.a && keys.s){
  console.log("both the keys pressed at once")
}

});
