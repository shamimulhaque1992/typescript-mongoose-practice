(req: Request, res: Response, next: NextFunction) => {
    res.send(`First Server by TypeScript`);
    next();
  }