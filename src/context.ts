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
            type: "append",
            path: "src/context/index.ts",
            templateFile: "./templates/index.hbs",
        },
        {
            type: "add",
            path: "src/context/{{pascalCase name}}.tsx",
            templateFile: "./templates/context.hbs",
        },
    ],
}

export default context
