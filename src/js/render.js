const view = document.querySelector("view");
const title = document.getElementById("title");

// ENV VARIABLES
let env = {
    app_name: "blocks.io",
    version: "1.0.0",
    author: "Mateis",
    view: "Home"
}

// View Manipulations
env.view = view.getAttribute("name");
sessionStorage.setItem("view", view.getAttribute("name"));
title.innerText = `${env.app_name} - ${view.getAttribute("name")}`


// Vue & Vuetify Initialization
