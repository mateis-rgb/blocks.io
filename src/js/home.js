let vm = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data() {
        return {
            links: [
                { name: "Home", id: "index" },
                { name: "About", id: "about" },
            ],
            projects: [
                // { name: "Projet 1", description: "projet test", src: "/storage/projet1", language: "vue", email: "test@d.fr", password: "39dfa55283318d31afe5a3ff4a0e3253e2045e43" },
            ],
            dialog: false,
            dialog_seeProject: false,

            // Form INFORMATIONS
            name: null,
            desc: null,
            language: null,
            email: null,
            password: null,

            initiallyOpen: ['public'],
            files: {
                html: 'mdi-language-html5',
                js: 'mdi-nodejs',
                json: 'mdi-code-json',
                md: 'mdi-language-markdown',
                pdf: 'mdi-file-pdf',
                png: 'mdi-file-image',
                txt: 'mdi-file-document-outline',
                xls: 'mdi-file-excel',
            },
            tree: [],
            items: [
                { name: '.git', },
                { name: 'node_modules', },
                {
                    name: 'public',
                    children: [
                        {
                            name: 'static',
                            children: [{ name: 'logo.png', file: 'png' }],
                        },
                        { name: 'favicon.ico', file: 'png' },
                        { name: 'index.html', file: 'html' },
                    ],
                },
                { name: '.gitignore', file: 'txt' },
                { name: 'babel.config.js', file: 'js' },
                { name: 'package.json', file: 'json' },
                { name: 'README.md', file: 'md' },
                { name: 'vue.config.js', file: 'js' },
                { name: 'yarn.lock', file: 'txt', },
            ],
        }
    },
});

fs.readFile(path.join(path.resolve(), "/src/config/projects.json"), "utf-8", (err, data) => {
    if (err) throw err;
    vm.$data.projects = JSON.parse(data);
});

function newProject () {
    let name = vm.$data.name;
    let desc = vm.$data.desc;
    let lang = vm.$data.language;
    let email = vm.$data.email;
    let password = sha1(vm.$data.password);

    let newProject = {
        name: name, 
        description: desc,
        src: `/storage/${name}`,
        language: lang, 
        email: email, 
        password: password
    }

    vm.$data.projects.push(newProject)

    fs.readFile(path.join(path.resolve(), "/src/config/projects.json"), "utf-8", (err, data) => {
        if (err) throw err;
        let projects = eval(data);
        
        projects.push(newProject);
        
        let finalProject = JSON.stringify(projects, "", "\t");

        fs.writeFile(path.join(path.resolve(), "/src/config/projects.json"), finalProject, "utf-8", (err) => {
            if (err) throw err;
        });
    });

    vm.$data.name = null;
    vm.$data.desc = null;
    vm.$data.lang = null;
    vm.$data.email = null;
    vm.$data.password = null;
}