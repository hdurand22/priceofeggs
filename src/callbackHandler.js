export async function callbackHandler(req, res, next) {
    // Parse out auth code sent back from Kroger auth server
    let params = URL.parse(req.url, true).query;
    if (!params.code) {
        res.sendStatus(400);
        return;
    }
    let token = await tokenService.getByAuth(params.code);
}