import * as fs from "node:fs";
import * as path from "node:path";
import { APPS, IMAGE_NAME } from "./constants";
import { exec } from "./utils";

console.log("Start patching the apks...");

if (fs.existsSync(path.join(process.cwd(), "dist"))) {
    console.log("dist dir exists, removing...");
    fs.rmdirSync(path.join(process.cwd(), "dist"));
}

fs.mkdirSync(path.join(process.cwd(), "dist"));

for (const app of APPS) {
    const fileName = `patched.${app.downloadedFile}`
    exec(`docker run --rm \
        -v ${path.join(process.cwd(), "target")}:/tmp \
        ${IMAGE_NAME} patch --patches /tmp/patches.rvp \
        /tmp/${app.downloadedFile} -o /tmp/${fileName} \
    `);

    fs.copyFileSync(path.join(process.cwd(), "target", fileName), path.join(process.cwd(), "dist", fileName));
}
