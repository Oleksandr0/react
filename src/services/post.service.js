
import {urls} from "../configs/urls";

export const postService = {
    getByUserId: (id) => fetch(`https://jsonplaceholder.typicode.com${urls.posts}?userId=${id}`).then(value => value.json())
}