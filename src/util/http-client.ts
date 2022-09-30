const LOCAL = {
    VERB: {
        DELETE: 'DELETE',
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT'
    },
    HEADER: {
        AUTHORIZATION: 'Authorization',
        CONTENT_TYPE: 'Content-Type',
        ACCEPT: 'Accept',
    },
    CONTENT_TYPE: {
        JSON: 'application/json',
        FORMDATA: 'multipart/form-data'
    }
}

/**
 * GET VERB
 * @param url 
 */
async function get(url: string) {
    try {
        const response = (await fetch(url, {
            method: LOCAL.VERB.GET,
            headers: {
                'author': '38',
            }
        })).json()
        return response
    } catch (err) {
        return err
    }
}

/**
 * POST VERB
 * @param url 
 * @param data 
 */
async function post(url: string, data = {}) {
    try {
        const response = (await fetch(url, {
            method: LOCAL.VERB.POST,
            headers: {
                [LOCAL.HEADER.CONTENT_TYPE]: LOCAL.CONTENT_TYPE.JSON,
                [LOCAL.HEADER.ACCEPT]: LOCAL.CONTENT_TYPE.JSON
            },
            body: JSON.stringify(data)
        })).json()
        return response;

    } catch (err) {
        return err
    }
}

/**
 * DELETE VERB
 * @param url 
 */
async function del(url: string) {
    try {
        const response = (await fetch(url, {
            method: LOCAL.VERB.DELETE,
            headers: {
                [LOCAL.HEADER.CONTENT_TYPE]: LOCAL.CONTENT_TYPE.JSON,
                [LOCAL.HEADER.ACCEPT]: LOCAL.CONTENT_TYPE.JSON
            }
        }))
        return response
    } catch (err) {
        return err
    }
}

/**
 * PUT VERB
 * @param url endpoint url
 * @param data FileApi file
 * @param tokenType tokenType to access request
 * @returns 
 */
async function put(url: string, data: FormData) {
    try {
        const response = (await fetch(url, {
            method: LOCAL.VERB.PUT,
            body: data
        }))
        return response
    } catch (err) {
        return err
    }
}

export { del, get, post, put }
