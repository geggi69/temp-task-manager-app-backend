import { z } from 'zod';
import type { CreateTaskBody } from '../types/task';

export const createTaskBodySchema = z.object({
	text: z.string(),
	description: z.string().optional(),
	completed: z.boolean().optional(),
	isHighImpact: z.boolean().optional(),
}) satisfies z.ZodType<CreateTaskBody>;
