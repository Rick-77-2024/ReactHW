

import type { IComment } from "../models/IComment.ts";

export const getComment = async (): Promise<IComment[]> => {
    return await fetch(import.meta.env.VITE_API_URLCOMMENTS)
        .then(response => response.json());
}
