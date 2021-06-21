import {NodePlopAPI} from "node-plop"

import hook from "./hook"

const generator = (plop: NodePlopAPI): void => {
    plop.setDefaultInclude({generators: true})
    plop.setGenerator("hook", hook)
}

export default generator
