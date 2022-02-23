import { execSync } from "child_process";

const temp = () => JSON.parse(Buffer.from(execSync("temp")).toString());

export default { temp };
