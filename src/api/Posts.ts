import * as http from "./HttpClient";
import {Paged} from "../type/Paged";
import {Post} from "../type/Post";

export function get(page = 1, size = 20): Promise<Paged<Post>> {
    return http.get("posts", {params: {page, size}});
}
