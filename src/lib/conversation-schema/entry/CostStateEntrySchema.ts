import { z } from "zod";

// "cost-state" entries are per-session cost and duration snapshots written by
// Claude Code v2.1.x headless runs. Only the stable fields are typed; the
// per-model usage map is kept as is. They are not rendered.
export const CostStateEntrySchema = z.looseObject({
  type: z.literal("cost-state"),
  sessionId: z.string(),
  totalCostUSD: z.number(),
  modelUsage: z.record(z.string(), z.unknown()),
});

export type CostStateEntry = z.infer<typeof CostStateEntrySchema>;
