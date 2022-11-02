import * as dotenv from 'dotenv';
import App from "../App";
import {createAppSandbox} from "./lib/sandbox";

export let sandbox: sinon.SinonSandbox;
export let app: App;

beforeAll(
  () => {
      dotenv.config();
      sandbox = createAppSandbox();
      if (app === undefined) {
          app = new App();
      }
  });

afterAll(() => {
    sandbox.restore();
});