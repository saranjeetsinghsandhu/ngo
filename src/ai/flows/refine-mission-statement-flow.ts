'use server';
/**
 * @fileOverview An AI tool to refine and optimize NGO mission and goal statements.
 *
 * - refineMissionStatement - A function that handles the mission statement refinement process.
 * - RefineMissionStatementInput - The input type for the refineMissionStatement function.
 * - RefineMissionStatementOutput - The return type for the refineMissionStatement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineMissionStatementInputSchema = z.object({
  missionStatement: z
    .string()
    .describe('The original NGO mission or goal statement to be refined.'),
});
export type RefineMissionStatementInput = z.infer<
  typeof RefineMissionStatementInputSchema
>;

const RefineMissionStatementOutputSchema = z.object({
  refinedMissionStatement: z
    .string()
    .describe('The AI-refined mission statement, optimized for clarity and impact.'),
  suggestions: z
    .array(z.string())
    .describe(
      'A list of additional suggestions for improving the statement, such as alternative phrasing, keywords, or ways to increase emotional resonance.'
    ),
});
export type RefineMissionStatementOutput = z.infer<
  typeof RefineMissionStatementOutputSchema
>;

export async function refineMissionStatement(
  input: RefineMissionStatementInput
): Promise<RefineMissionStatementOutput> {
  return refineMissionStatementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refineMissionStatementPrompt',
  input: {schema: RefineMissionStatementInputSchema},
  output: {schema: RefineMissionStatementOutputSchema},
  prompt: `You are an expert copywriter and communications specialist for non-profit organizations. Your goal is to help an NGO administrator refine their mission and goal statements to be clear, impactful, and resonate strongly with potential donors and volunteers.

Analyze the following mission statement and provide a refined version. Focus on:
- **Clarity**: Ensure the message is easy to understand.
- **Impact**: Emphasize the positive change the NGO creates.
- **Emotional Resonance**: Use language that connects with the audience.
- **Conciseness**: Remove unnecessary words or jargon.

Additionally, provide a list of concrete suggestions for further improvement. These suggestions could include alternative phrasing, powerful keywords to consider, or tips on enhancing the emotional connection.

Original Mission Statement: """{{{missionStatement}}}"""

Provide the output in the specified JSON format, with a 'refinedMissionStatement' and an array of 'suggestions'.`,
});

const refineMissionStatementFlow = ai.defineFlow(
  {
    name: 'refineMissionStatementFlow',
    inputSchema: RefineMissionStatementInputSchema,
    outputSchema: RefineMissionStatementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
