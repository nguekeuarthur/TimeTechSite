import { z } from "zod";

// Common validation schemas
export const emailSchema = z
  .string()
  .email("Format d'email invalide")
  .min(1, "L'email est requis");

export const nameSchema = z
  .string()
  .min(2, "Le nom doit contenir au moins 2 caractères")
  .max(50, "Le nom ne peut pas dépasser 50 caractères")
  .regex(/^[a-zA-ZÀ-ÿ\s-']+$/, "Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes");

export const messageSchema = z
  .string()
  .min(10, "Le message doit contenir au moins 10 caractères")
  .max(1000, "Le message ne peut pas dépasser 1000 caractères");

export const phoneSchema = z
  .string()
  .optional()
  .refine(
    (val) => !val || /^[\+]?[0-9\s\-\(\)]{10,}$/.test(val),
    "Format de téléphone invalide"
  );

// Contact form validation
export const contactFormSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  company: z.string().max(100, "Le nom de l'entreprise ne peut pas dépasser 100 caractères"),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: messageSchema,
  phone: phoneSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;