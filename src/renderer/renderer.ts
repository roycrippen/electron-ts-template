// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import { ipcRenderer } from "electron";

ipcRenderer.on("ping", (_: Event, msg: string) => {
  // tslint:disable-next-line: no-console
  console.log(msg);
  ipcRenderer.send("pong", "pong message!");
});

const interpret = (event: any) => {
  if (event.key === " ") {                            // Space
    // tslint:disable-next-line: no-console
    console.log("key code , Space");
  } else if (event.key === "Enter" && !event.shiftKey) {  // 13 = Enter
    // tslint:disable-next-line: no-console
    console.log("key code 13, Enter");
  } else if (event.key === ";" && !event.shiftKey) { // 186 = ';'
    // tslint:disable-next-line: no-console
    console.log("key code 186, ';'");
  }
};

// tslint:disable-next-line: variable-name
const _global = global as any;
_global.repl = interpret;
