export interface File {
    id: string;
    download_url: string;
    thumbnail: string;
    profile: string;
    name: string;
    type: string;
    size: number;
    created_at: Date;
    folder: string | null;
}

export interface Folder {
    id: string;
    created_at: Date | string;
    parent: string | null;
    name: string;
    children: Folder[] | undefined;
}
