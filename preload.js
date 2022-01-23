const { contextBridge } = require("electron");

const path = require("path");
const fs = require("fs");
const sha1 = require("sha1");

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }
  
    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})

contextBridge.exposeInMainWorld("path", path);
contextBridge.exposeInMainWorld("fs", fs);
contextBridge.exposeInMainWorld("sha1", sha1);