import * as dotenv from 'dotenv';
import App from "../App";
import {createAppSandbox} from "./lib/sandbox";
import { Express } from "express";

export let sandbox: sinon.SinonSandbox;
export let app: Express;

beforeAll(
  () => {
      dotenv.config();
      sandbox = createAppSandbox();
      if (app === undefined) {
          app = (new App()).express;
      }
  });

afterAll(() => {
    sandbox.restore();
});
