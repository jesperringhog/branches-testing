import { createHtml } from "../htmlUtils";
import type { ApiResponse } from "../models/ApiResponse"
import { get } from "./baseService";

export const getMovies = async () => {
    const response = await get<ApiResponse>("http://omdbapi.com?apikey=3cf50f5c&s=matrix");
    createHtml(response.Search);
}
