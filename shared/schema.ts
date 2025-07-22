import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
}).refine(
  (data) => data.username.length >= 3,
  { message: "Le nom d'utilisateur doit contenir au moins 3 caractères" }
).refine(
  (data) => data.password.length >= 8,
  { message: "Le mot de passe doit contenir au moins 8 caractères" }
);

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
}).refine(
  (data) => data.firstName.trim().length > 0,
  { message: "Le prénom est requis" }
).refine(
  (data) => data.lastName.trim().length > 0,
  { message: "Le nom est requis" }
).refine(
  (data) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email),
  { message: "Format d'email invalide" }
).refine(
  (data) => data.message.trim().length >= 10,
  { message: "Le message doit contenir au moins 10 caractères" }
);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
