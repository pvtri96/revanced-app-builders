import { APKMirrorDownloader } from "apkmirror-downloader";
import * as fs from "node:fs";
import * as path from "node:path";
import { APPS } from "./constants";

const targetDir = path.join(process.cwd(), "target")
const apkmd = new APKMirrorDownloader(
    { outDir: targetDir, dpi: "nodpi", arch: "arm64-v8a" },
);

for (const app of APPS) {
    const fileDest = path.join(targetDir, app.downloadedFile);
    if(fs.existsSync(fileDest)) {
        console.log("File already downloaded at",fileDest, "skipping...");
        continue;
    }
    await apkmd.download(
        { org: app.org, repo: app.repo },
        { type: "apk", version: app.version, arch: app.arch, overwrite: false, outFile: app.downloadedFile },
    );
}