const BASE_URL = "https://pixabay.com/api";
const KEY = "36946759-7e5fc12dbc6128b490595b505";
const searchQuery = "animals";
// https://pixabay.com/api/?key=36946759-7e5fc12dbc6128b490595b505&q=yellow+flowers&image_type=photo
// export function FetchImages(page, query) {
//   const API_KEY = '34332611-52435d07ae30b60a07e51363a';

//   return fetch(
//     `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => response.json());
// }

// export const getImage = async ({ searchQuery }) => {
    export const getImage = async () => {
     const params = new URLSearchParams({
    image_type: "photo",
    key: KEY,
    q: searchQuery,
     }); 
    
    const response = await fetch(`${BASE_URL}/?${params}`);

    if (!response.ok) {
        throw new Error("Smth went wrong");
    }

    return response.json();
}