namespace * audiblemagic

/*
 * The sender will know which URL and HTTP headers are associated with each server type
 */
enum ServerType
{
    LOOKUP_SERVER   = 0,	
    METADATA_SERVER = 1 	
}

exception ServerException 
{
    1: i32 	errorCode,
    2: string 	errorMessage,
    3: bool 	permanent		// If true, then don't retry
}

service AudibleMagic
{
    /* 
     * Takes in a binary request, serverType enum and debugID.
     * Posts the request using the specified ServerType and returns the binary response from the server.
     */
    binary PostRequest(1: binary request, 2: ServerType serverType, 3: i64 debugID) throws(1: ServerException err);
}
