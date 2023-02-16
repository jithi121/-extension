addEventListener("keydown", (event) => {

  if (event.altKey === true) {
    keys.a = true;
  }
  if (event.key === "z") {
    keys.s = true;
  }

if(keys.a && keys.s){
  console.log("both the keys pressed at once");
}

});

// browser.browserAction.onClicked.addListener(() => {
//   browser.browserAction.setIcon({
//     tabId: tab.id,
//     path: "images/icons8-system-task-16.png",
//     "16": "images/icons8-system-task-16-dark.png",
//     "32": "images/icons8-system-task-32-dark.png",
//     "48": "images/icons8-system-task-48-dark.png",
//     "128": "images/icons8-system-task-64-dark.png"
//   });
// });

