import * as z from "Zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})