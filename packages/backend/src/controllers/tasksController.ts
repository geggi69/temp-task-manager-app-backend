import { Request, Response } from 'express';
import { createTaskBodySchema } from '../schemas/task';
import { createTask as addTask } from '../store/taskStore';

/**
 * Temporary helper so the starter app runs before learners implement the API.
 * Replace or reuse this after Copilot generates validation logic.
 */
function notImplemented(res: Response, feature: string): void {
  res.status(501).json({
    error: 'not_implemented',
    message: `${feature} is intentionally left for the Copilot exercise`,
  });
}

export function listTasks(_req: Request, res: Response): void {
  // Lean starter behavior: return an empty list so the UI and GET route can run.
  // Copilot task: replace this with store.getTasks() when implementing the API.
  res.json([]);
}

export function createTask(req: Request, res: Response): void {
  const result = createTaskBodySchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({
      error: 'validation_error',
      message: 'Request body validation failed',
      details: result.error.issues,
    });
    return;
  }

  res.status(201).json(addTask(result.data));
}

export function patchTask(_req: Request, res: Response): void {
  // TODO for Copilot: validate req.params with taskIdParamSchema.safeParse,
  // validate req.body with patchTaskBodySchema.safeParse, call store.updateTask,
  // return 200 for success, 400 for validation failure, and 404 when missing.
  notImplemented(res, 'PATCH /api/tasks/:id');
}

export function removeTask(_req: Request, res: Response): void {
  // TODO for Copilot: validate req.params with taskIdParamSchema.safeParse,
  // call store.deleteTask, return 204 for success and 404 when missing.
  notImplemented(res, 'DELETE /api/tasks/:id');
}
