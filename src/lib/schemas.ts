import { z } from 'zod';

export const authFormSchema = (type: string) => z.object({        
    firstName: type === 'login'
      ? z.string().optional()
      : z.string()
          .min(3, { message: "First name must be at least 3 characters" })
          .max(50, { message: "First name can't exceed 50 characters" })
          .regex(/^[a-zA-Z\s'-]+$/, { message: "First name can only contain letters, spaces, hyphens, and apostrophes" }), 

    lastName: type === 'login'
      ? z.string().optional()
      : z.string()
          .min(3, { message: "Last name must be at least 3 characters" })
          .max(50, { message: "Last name can't exceed 50 characters" })
          .regex(/^[a-zA-Z\s'-]+$/, { message: "Last name can only contain letters, spaces, hyphens, and apostrophes" }),            

    username: type === 'login'
      ? z.string().optional()
      : z.string()
          .nonempty({ message: "Username is required" })
          .min(3, { message: "Username must be at least 3 characters" })
          .max(20, { message: "Username can't exceed 20 characters" })
          .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" })
          .regex(/^[^\d].*$/, { message: "Username cannot start with a number" })
          .regex(/^[^\W_].*$/, { message: "Username cannot start with a special character" })
          .regex(/^[^\s].*$/, { message: "Username cannot start with a space" }),
                   
      email: z.string()
        .nonempty({ message: "Email is required" })
        .email({ message: "Invalid email address" }),
  
      password: type === 'login'
        ? z.string().min(1, { message: "Password is required" }) 
        : z.string()
            .nonempty({ message: "Password is required" })
            .min(8, { message: "Password must be at least 8 characters" })
            .max(50, { message: "Password can't exceed 50 characters" })
            .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
            .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
            .regex(/\d/, { message: "Password must contain at least one number" })
            .regex(/[\W_]/, { message: "Password must contain at least one special character" }),
  
      confirmPassword: type === 'login'
        ? z.string().optional()
        : z.string()
            .nonempty({ message: "Password confirmation is required" })
            .min(8, { message: "Password must be at least 8 characters" })
            .max(50, { message: "Password can't exceed 50 characters" }),
    }).superRefine((data, ctx) => {
      if (type !== 'login' && data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['confirmPassword'],
          message: "Passwords do not match",
        });
      }
});


export type AuthFormSchema = z.infer<ReturnType<typeof authFormSchema>>;