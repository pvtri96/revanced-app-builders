import * as childProcess from "node:child_process";
import * as fs from 'node:fs';
import { Downloader } from "nodejs-file-downloader";

export function exec(command: string, options?: { cwd?: string }) {
    console.log(options?.cwd ?? process.cwd(), command);
    childProcess.execSync(command, { stdio: 'inherit', cwd: options?.cwd })
}

export async function download(url: string, dir: string, fileName: string) {
    const downloader = new Downloader({
        url,
        directory: dir,
        fileName,
        skipExistingFileName: true
    });

    try {
        await downloader.download();
    } catch (error) {
        console.log(error);
    }
};