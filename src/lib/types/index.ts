export type RequestObject = {
    method ?: "get" | "post",
    url : string,
    body ?: object
    params ?: object
    contentType ?: string
};

export type InputEvent = {
    type : string
    value : string | null
  };