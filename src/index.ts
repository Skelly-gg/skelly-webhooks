import { webhookServer } from "./server";
import { IDota2Post } from "./dota2";

const host = "127.0.0.1";
const port = 3510;
webhookServer.listen(port, host);
console.log(`Listening at http://${host}:${port}`);

export { webhookServer, IDota2Post };
