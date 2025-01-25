// Boilerplate Code for HTTP Status Code API
import express from 'express'
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/
app.get('/status-info',(req,res)=>{
  const code = req.query.code;
  let message;
  switch(code){
    case "200":
      message = "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
      break;
    case "201":
      message = "The request was successful, and a new resource was created as a result."
      break;
    case "204":
      message =  "The request was successful, but there is no additional content to send back."
      break;
    case "400":
      message = "The server cannot process the request due to client-side errors (e.g., malformed syntax)."
      break;
    case "401":
      message = "The client must authenticate itself to receive the requested response."
      break;
    case "403":
      message = "The client does not have permission to access the requested resource."
      break;
    case "404":
      message = "The requested resource could not be found on the server."
      break;
    case "405":
      message = "The HTTP method used is not supported for the requested resource."
      break;
    case "429":
      message = "The client has sent too many requests in a given timeframe, and rate-limiting has been applied."
      break;
    case "500":
      message = "The server encountered an unexpected condition that prevented it from fulfilling the request."
      break;
    case "502":
      message = "The server received an invalid response from an upstream server while trying to fulfill the request."
      break;
    case "503":
      message = "The server is temporarily unavailable (e.g., overloaded or down for maintenance)."
      break;
    case "504":
      message =  "The server did not receive a timely response from an upstream server."
      break;
    default:
      message = "Give valid code"
      break;
  }
  res.json({
    status : `${code}`,
    message : message
  })
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
