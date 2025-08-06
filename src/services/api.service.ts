

import type { IPost } from "../models/IPost";

export const getPost = async (): Promise<IPost[]> => {
    return await fetch(import.meta.env.VITE_API_URLPOSTS)
        .then(response => response.json());
}
