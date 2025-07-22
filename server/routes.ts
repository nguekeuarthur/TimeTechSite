import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

// Rate limiting helper (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  userLimit.count++;
  return true;
}
export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    const clientIp = req.ip || req.connection.remoteAddress || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ 
        message: "Trop de demandes. Veuillez réessayer dans quelques minutes." 
      });
    }
    
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Here you would typically send an email
      // For now, we'll just store the submission
      console.log("New contact submission:", submission);
      
      res.json({ 
        message: "Votre demande a été envoyée avec succès. Nous vous recontacterons bientôt.",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Données invalides", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating contact submission:", error);
        res.status(500).json({ 
          message: "Erreur interne du serveur" 
        });
      }
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        message: "Erreur interne du serveur" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });
  const httpServer = createServer(app);
  return httpServer;
}
