import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
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

  const httpServer = createServer(app);
  return httpServer;
}
