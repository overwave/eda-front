import * as http from "./HttpClient";
import {Paged} from "../type/Paged";
import {Post} from "../type/Post";

export function get(page?: number, size?: number): Promise<Paged<Post>> {
    return http.get("posts/", {params: {page, size}});
}
