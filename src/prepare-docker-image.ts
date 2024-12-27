import * as path from 'node:path';
import { IMAGE_NAME, REVANCED_CLI_VERSION, REVANCED_PATCHES_VERSION } from "./constants";

import { download, exec } from "./utils";

const dockerDir = path.join(process.cwd(), "docker")

const revancedCliFileUrl = `https://github.com/ReVanced/revanced-cli/releases/download/v${REVANCED_CLI_VERSION}/revanced-cli-${REVANCED_CLI_VERSION}-all.jar`;
const revancedCliFileDest = path.join(dockerDir, ".build")
console.log("Pulling revanced-cli from", revancedCliFileUrl, "into", revancedCliFileDest);
await download(revancedCliFileUrl, revancedCliFileDest, `revanced-cli-${REVANCED_CLI_VERSION}.jar`);

console.log("Preparing the docker image...");
exec(`docker build . -t ${IMAGE_NAME}`, { cwd: dockerDir })