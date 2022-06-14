import { Compiler } from "webpack"
import { Plugin } from "./types"

const NAME = "js-config"

export default class JSConfig implements Plugin {
  apply(compiler: Compiler): void {
    compiler.hooks.environment.tap(NAME, () => {
      console.log("----------- environment")
    })

    compiler.hooks.afterEnvironment.tap(NAME, () => {
      console.log("------------ after environment")
    })

    compiler.hooks.entryOption.tap(NAME, (context, entry) => {
      console.log("------------ entry option", context, entry)
      return false
    })

    compiler.hooks.afterPlugins.tap(NAME, compiler => {
      console.log("------------ after plugin")
    })
  }
}
