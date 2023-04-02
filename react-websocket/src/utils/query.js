export const params = (query) => {
    let url = '';
    for (let i in query) {
        url = url + i + "=" + query[i] + '&'
    }
    return url.slice(0, -1);
}