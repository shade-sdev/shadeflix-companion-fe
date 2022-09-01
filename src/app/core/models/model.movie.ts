export interface Movie {
    id: string
    tmdbId: number;
    englishName: string;
    genres: string[];
    cover: string;
    score: string;
    monitor: boolean;
    hash: string;
    downloadStatus: DownloadStatus;
}

export enum DownloadStatus {
    SCHEDULED = "Scheduled",
    DOWNLOADING = "Downloading",
    DOWNLOADED = "Downloaded",
    UPLOADING = "Uploading",
    ERROR = "Error"
}