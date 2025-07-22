import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { validateBody } from "./middleware/validation";
import { contactFormRateLimit, apiRateLimit } from "./middleware/rate-limit";

export async function registerRoutes(app: Express): Promise<Server> {
  // Apply general API rate limiting
  app.use("/api", apiRateLimit);

  // Contact form submission
  app.post("/api/contact", 
    contactFormRateLimit,
    validateBody(insertContactSubmissionSchema),
    async (req, res) => {
    try {
      const submission = await storage.createContactSubmission(req.body);
      
      // Here you would typically send an email
      // For now, we'll just store the submission
      console.log("New contact submission:", submission);
      
      res.json({ 
        message: "Votre demande a été envoyée avec succès. Nous vous recontacterons bientôt.",
        id: submission.id 
      });
    } catch (error) {
      console.error("Error creating contact submission:", error);
      res.status(500).json({ 
        message: "Erreur interne du serveur" 
      });
    }
  }
);

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
