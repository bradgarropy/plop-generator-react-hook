const context = {
    description: "⚛ react context",
    prompts: [
        {
            type: "input",
            name: "name",
            message: "context name",
        },
    ],
    actions: [
        {
            type: "add",
            path: "src/context/{{pascalCase name}}/{{pascalCase name}}.ts",
            templateFile: "./templates/context.hbs",
        },
    ],
}

export default context
