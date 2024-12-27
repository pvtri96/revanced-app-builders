
export const REVANCED_CLI_VERSION = "5.0.0";
export const REVANCED_PATCHES_VERSION = "5.7.2";
export const IMAGE_NAME = "revanced-apps-builder";

export interface App {
    version: string;
    org: string;
    repo: string;
    arch?: string;
    downloadedFile: string;
}

export const APPS: App[] = [
    {
        org: "google-inc",
        repo: "youtube",
        version: "19.47.53",
        downloadedFile: "com.google.android.youtube.apk"
    },
    {
        org: "google-inc",
        repo: "photos",
        version: "7.11.0.705590205",
        downloadedFile: "com.google.android.photos.apk"
    },
    {
        org: "redditinc",
        repo: "reddit",
        version: "2024.17.0",
        downloadedFile: "com.reddit.frontpage.apk"
    },
    {
        org: "instagram",
        repo: "instagram-instagram",
        version: "361.0.0.46.88",
        downloadedFile: "com.instagram.android.apk"
    }
]