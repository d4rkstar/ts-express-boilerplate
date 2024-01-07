import { Router, Request, Response } from 'express';

import { setTimeout } from "node:timers/promises";

export class SampleRouter {
  public static init(router: Router): Router {
    router.get('/sample/say-hello', SampleRouter.sayHello);
    router.get('/sample/say-hello-async', SampleRouter.sayHelloAsync);
    return router;
  }

  private static sayHello(_req: Request, res: Response): void {
    res.status(200).send("Hello!");
  }

  private static async sayHelloAsync(_req: Request, res: Response): Promise<void> {
    await setTimeout(1);
    res.status(200).send("Done");
  }
}
