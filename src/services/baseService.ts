export const get = async <T>(url: string) => {
    const apiResponse = await fetch(url);
    const data: T = await apiResponse.json();
    return data;
}