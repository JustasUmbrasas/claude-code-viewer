import { z } from "zod";

// "atis-latch" entries are session metadata written by Claude Code v2.1.x
// (e.g. {"type":"atis-latch","atis":"","sessionId":"..."}). They carry no
// conversation content and are not rendered.
export const AtisLatchEntrySchema = z.object({
  type: z.literal("atis-latch"),
  atis: z.string(),
  sessionId: z.string(),
});

export type AtisLatchEntry = z.infer<typeof AtisLatchEntrySchema>;
