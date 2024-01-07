import { Router, Request, Response } from 'express';


export class BaseRouter {
    public static init(router: Router): Router {
        router.get('/ping', BaseRouter.pingResult);
        router.get('/favicon.ico', BaseRouter.favicon);

        return router;
    }

    private static favicon(req: Request, res: Response): void {
        res.status(204).send();
    }

    public static pingResult(req: Request, res: Response): void {
        res.status(204).json({});
    }
}
