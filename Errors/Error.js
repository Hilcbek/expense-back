export let ErrorInfo = (status,message) => {
    let error = new Error();
    error.message = message;
    error.status = status;
    return error;
}