import { Request, Response, NextFunction } from "express";

interface RateLimitOptions {
  windowMs: number;
  maxRequests: number;
  message?: string;
  skipSuccessfulRequests?: boolean;
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function createRateLimit(options: RateLimitOptions) {
  const {
    windowMs,
    maxRequests,
    message = "Trop de demandes. Veuillez réessayer plus tard.",
    skipSuccessfulRequests = false
  } = options;

  return (req: Request, res: Response, next: NextFunction) => {
    const clientIp = req.ip || req.connection.remoteAddress || 'unknown';
    const now = Date.now();
    const userLimit = rateLimitMap.get(clientIp);

    // Clean up expired entries periodically
    if (Math.random() < 0.01) { // 1% chance to clean up
      for (const [ip, data] of rateLimitMap.entries()) {
        if (now > data.resetTime) {
          rateLimitMap.delete(ip);
        }
      }
    }

    if (!userLimit || now > userLimit.resetTime) {
      rateLimitMap.set(clientIp, { count: 1, resetTime: now + windowMs });
      return next();
    }

    if (userLimit.count >= maxRequests) {
      return res.status(429).json({ message });
    }

    userLimit.count++;

    // If skipSuccessfulRequests is true, decrement on successful response
    if (skipSuccessfulRequests) {
      const originalSend = res.send;
      res.send = function(body) {
        if (res.statusCode < 400) {
          userLimit.count = Math.max(0, userLimit.count - 1);
        }
        return originalSend.call(this, body);
      };
    }

    next();
  };
}

// Common rate limit configurations
export const contactFormRateLimit = createRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5,
  message: "Trop de demandes de contact. Veuillez réessayer dans 15 minutes.",
  skipSuccessfulRequests: true
});

export const apiRateLimit = createRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100,
  message: "Trop de requêtes API. Veuillez réessayer plus tard."
});