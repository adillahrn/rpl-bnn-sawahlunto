import { Request, Response, NextFunction } from 'express';
import { auth } from '../auth/auth';

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const session = await auth.api.getSession({
            headers: req.headers
        });

        if (!session) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Add session to request
        (req as any).user = session.user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
