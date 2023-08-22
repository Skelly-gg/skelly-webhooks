/**
 * Sample Skelly webhook server.
 *
 * (C) Skelly, 2023
 */
import http from "http";
import crypto from "crypto";

export const webhookServer = http.createServer(function (request, response) {
  /*console.log(" ---- ");
  console.log(request.method);
  console.log(request.url);
  console.log(request.body);*/
  //console.log(request.headers);

  if (request.method === "OPTIONS") {
    console.log("OPTIONS");
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    });
    response.end();
  } else if (request.method === "POST") {
    //console.log("POST");
    var body = "";
    request.on("data", function (data) {
      body += data;
      //console.log("Partial body: " + body);
    });
    request.on("end", function () {
      /*console.log("Headers: " + JSON.stringify(request.headers));
      console.log(
        "Signature: " + JSON.stringify(request.headers["skelly-signature"])
      );*/
      const signature = crypto
        .createHmac("sha256", "23EF34ES")
        .update(body)
        .digest("base64");
      const signatureValid = signature !== request.headers["skelly-signature"];

      /*console.log(`Signature is ${signatureValid ? "valid" : "invalid"}`);*/

      //crypto.createHash("HMAC-SHA256").update(JSON.stringify(body)); //.digest("base64");
      //console.log("Signature check: " + comparison);
      //console.log("Message: ", body);
      console.log(JSON.stringify(JSON.parse(body), null, 2));
      response.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
      });
      response.end();
    });
  }
});
