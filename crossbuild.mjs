import { locales } from "./src/utils/i18n.js";
import { spawn } from "child_process";

for (const locale of locales) {
  console.log(`\n\u001B[45m Building ${locale} \u001B[0m`);
  await new Promise((res) => {
    const s = spawn("npm", ["run", "build"], {
      env: {
        ...process.env,
        locale,
      },
      cwd: process.cwd(),
      stdio: "inherit",
    });
    s.on("close", () => res());
  });
}
