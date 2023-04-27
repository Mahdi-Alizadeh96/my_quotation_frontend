export type RequestObject = {
    method ?: "get" | "post",
    url : string,
    body ?: object
    params ?: object
    contentType ?: string
};