import * as Client from "../../packages/daoforge";
import { assertEnv } from "../utils/envAssert";

assertEnv();

export default new Client.Client({
  networkPassphrase: import.meta.env.PUBLIC_SOROBAN_NETWORK_PASSPHRASE,
  contractId: import.meta.env.PUBLIC_DAOFORGE_CONTRACT_ID,
  rpcUrl: import.meta.env.PUBLIC_SOROBAN_RPC_URL,
  // Allow insecure HTTP connections only in development to prevent MITM attacks in production
  allowHttp: import.meta.env.DEV,
});
