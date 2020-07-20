
function create(req,res)
{
    
    return res.status(200).json();
    
}

function auth(req,res)
{
   return res.status(200).json( {
        access_token: "MTQ0NjOkZmQ5OTM5NDE9ZTZjNGZmZjI3",
        token_type: "bearer",
        expires_in: 3600,
        scope: "create",
        refresh_token:"VklWQSBFTCBWSU5PIQ=="
    });

}

module.exports ={ create,auth};