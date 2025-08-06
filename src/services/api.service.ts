
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { IPost } from "../models/IPost.ts";

export const getPost = async (): Promise<IPost[]> => {
    return await fetch(import.meta.env.VITE_API_URLPOST)
        .then(response => response.json());
}
