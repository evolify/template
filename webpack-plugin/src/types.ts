import { Compiler } from "webpack"
export interface Plugin {
  apply(compiler: Compiler): void
}
