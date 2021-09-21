import {NodePlopAPI} from "node-plop"

import context from "./context"

const generator = (plop: NodePlopAPI): void => {
    plop.setDefaultInclude({generators: true})
    plop.setGenerator("context", context)
}

export default generator
