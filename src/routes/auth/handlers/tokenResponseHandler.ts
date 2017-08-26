import {
    Request,
    IReply
} from 'hapi';

const tokenResponseHandler = (request: Request, reply: IReply) => {
/*    // TODO: Eat cookies. Temp for dev
    var cookie_options = {
        ttl: null, // expires a year from today
        encoding: 'none',    // we already used JWT to encode
        isSecure: true,      // warm & fuzzy feelings
        isHttpOnly: true,    // prevent client alteration
        clearInvalid: false, // remove invalid cookies
        strictHeader: true,   // don't allow violations of RFC 6265
        path: '/'
    }*/

    return reply()
        .header("Authorization", request.pre.token);
//        .state('token', request.pre.token, cookie_options)
//        .redirect('/api/status');
};

export { tokenResponseHandler };
