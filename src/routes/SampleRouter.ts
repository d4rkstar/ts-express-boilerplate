import { Router } from 'express';
import { Request, Response } from 'express-serve-static-core';

export class SampleRouter {
  public static init(router: Router): Router {
    router.get('/sample', SampleRouter.sayHello);
    return router;
  }

  private static sayHello(_req: Request, res: Response): Response {
    return res.status(200).send("Hello!");
  }
}
