import * as path from "node:path";
import { REVANCED_PATCHES_VERSION } from "./constants";
import { download } from "./utils";

const patchesFileUrl = `https://github.com/ReVanced/revanced-patches/releases/download/v${REVANCED_PATCHES_VERSION}/patches-${REVANCED_PATCHES_VERSION}.rvp`
const patchesFileDest = path.join(process.cwd(), "target")
console.log("Pulling revanced patches from", patchesFileUrl, "into", patchesFileDest);
await download(patchesFileUrl, patchesFileDest, `patches.rvp`);
