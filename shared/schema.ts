import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const biometricData = pgTable("biometric_data", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  method: text("method").notNull(), // 'Face', 'Signature', 'DNA'
  template: text("template").notNull(),
  accuracy: decimal("accuracy").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const authenticationAttempts = pgTable("authentication_attempts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  method: text("method").notNull(),
  status: text("status").notNull(), // 'success', 'failed', 'blocked'
  ipAddress: text("ip_address").notNull(),
  confidence: decimal("confidence"),
  location: text("location"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const systemHealth = pgTable("system_health", {
  id: serial("id").primaryKey(),
  component: text("component").notNull(),
  status: text("status").notNull(), // 'healthy', 'warning', 'error', 'protected'
  uptime: text("uptime").notNull(),
  responseTime: text("response_time").notNull(),
  load: integer("load").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const neuralAIPolicies = pgTable("neural_ai_policies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  version: text("version").notNull(),
  status: text("status").notNull(), // 'Active', 'Draft', 'Deprecated'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const securityAlerts = pgTable("security_alerts", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(),
  severity: text("severity").notNull(), // 'Low', 'Medium', 'High', 'Critical'
  description: text("description").notNull(),
  source: text("source").notNull(), // 'Internal', 'External'
  status: text("status").notNull(), // 'Open', 'Investigating', 'Resolved'
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertBiometricDataSchema = createInsertSchema(biometricData).omit({
  id: true,
  createdAt: true,
});

export const insertAuthenticationAttemptSchema = createInsertSchema(authenticationAttempts).omit({
  id: true,
  timestamp: true,
});

export const insertSystemHealthSchema = createInsertSchema(systemHealth).omit({
  id: true,
  timestamp: true,
});

export const insertNeuralAIPolicySchema = createInsertSchema(neuralAIPolicies).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertSecurityAlertSchema = createInsertSchema(securityAlerts).omit({
  id: true,
  timestamp: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertBiometricData = z.infer<typeof insertBiometricDataSchema>;
export type BiometricData = typeof biometricData.$inferSelect;

export type InsertAuthenticationAttempt = z.infer<typeof insertAuthenticationAttemptSchema>;
export type AuthenticationAttempt = typeof authenticationAttempts.$inferSelect;

export type InsertSystemHealth = z.infer<typeof insertSystemHealthSchema>;
export type SystemHealth = typeof systemHealth.$inferSelect;

export type InsertNeuralAIPolicy = z.infer<typeof insertNeuralAIPolicySchema>;
export type NeuralAIPolicy = typeof neuralAIPolicies.$inferSelect;

export type InsertSecurityAlert = z.infer<typeof insertSecurityAlertSchema>;
export type SecurityAlert = typeof securityAlerts.$inferSelect;
