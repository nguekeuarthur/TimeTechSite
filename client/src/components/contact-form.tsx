import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import type { InsertContactSubmission } from "@shared/schema";

export function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      try {
        const response = await apiRequest("POST", "/api/contact", data);
        return response.json();
      } catch (error) {
        console.error("Contact form submission error:", error);
        throw error;
      }
    },
    onSuccess: (data) => {
      toast({
        title: "Message envoyé !",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-gray-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 glass-effect">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-primary">Prénom</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="Votre prénom"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-primary">Nom</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="Votre nom"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-primary">Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    {...field} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                    placeholder="votre@email.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-primary">Entreprise</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                    placeholder="Nom de votre entreprise"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-primary">Type de projet</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors">
                      <SelectValue placeholder="Sélectionnez un type de projet" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Application Web">Application Web</SelectItem>
                    <SelectItem value="Application Mobile">Application Mobile</SelectItem>
                    <SelectItem value="E-commerce">E-commerce</SelectItem>
                    <SelectItem value="API & Backend">API & Backend</SelectItem>
                    <SelectItem value="Consulting">Consulting</SelectItem>
                    <SelectItem value="Autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-primary">Décrivez votre projet</FormLabel>
                <FormControl>
                  <Textarea 
                    {...field} 
                    rows={5}
                    placeholder="Parlez-nous de votre vision, vos objectifs, et comment nous pouvons vous aider..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={contactMutation.isPending}
            className="w-full gradient-bg hover:scale-105 text-white py-4 rounded-md font-medium transition-all duration-300 glow-accent shadow-lg disabled:opacity-50 disabled:scale-100"
          >
            {contactMutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
