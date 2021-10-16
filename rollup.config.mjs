import { readFileSync, rmdirSync } from "fs";
import { join } from "path";
import { makeRollupConfig } from "@foxkit/internal";

// clean dist dir
rmdirSync(join(process.cwd(), "dist"), { recursive: true });

const pkg = JSON.parse(
  readFileSync(join(process.cwd(), "package.json"), "utf8")
);
const config = makeRollupConfig(pkg);

export default config;
