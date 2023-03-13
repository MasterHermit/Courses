import { myAxios } from "../helper";

export const loadAllPosts = (pageNumber, pageSize) => {
    return myAxios
        .get(
            `/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`
        )
        .then((response) => response.data);
};