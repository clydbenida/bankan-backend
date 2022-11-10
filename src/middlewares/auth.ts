import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');

export function validateToken (req: Request, res: Response, next: NextFunction) {
  try {

    // jwt.verify()
    next()
  } catch (e) {
    
  }
}