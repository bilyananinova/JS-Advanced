function requestValidator(obj) {

    if (obj.method !== 'GET' && obj.method !== 'POST' && obj.method !== 'DELETE' && obj.method !== 'CONNECT') {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!obj.uri || !(/^[0-9a-z.*]+$/gm).test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (obj.version !== 'HTTP/0.9' && obj.version !== 'HTTP/1.0' && obj.version !== 'HTTP/1.1' && obj.version !== 'HTTP/2.0') {
       throw new Error('Invalid request header: Invalid Version');
    }

    if (obj.message == undefined || (/[a-z0-9][^<^>^\^&^,]+/gm).test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''

}));
console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'asl<pls'

}));
console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));
