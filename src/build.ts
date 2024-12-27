import * as path from "node:path";
import { APPS, IMAGE_NAME } from "./constants";
import { exec } from "./utils";

console.log("Start patching the apks...");

for(const app of APPS) {
    exec(`docker run --rm -v ${path.join(process.cwd(), "target")}:/tmp ${IMAGE_NAME} patch --patches /tmp/patches.rvp /tmp/${app.downloadedFile} -o /tmp/patched.${app.downloadedFile}`);
}