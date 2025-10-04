'use server';
/**
 * @fileOverview Generates a pre-filled shopping list or project plan based on a user's prompt describing their hardware needs.
 *
 * - getStartedFromPrompt - A function that takes a prompt and returns a shopping list or project plan.
 * - GetStartedFromPromptInput - The input type for the getStartedFromPrompt function.
 * - GetStartedFromPromptOutput - The return type for the getStartedFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetStartedFromPromptInputSchema = z.object({
  prompt: z
    .string()
    .describe("A prompt outlining the user's hardware needs (e.g., 'plumbing supplies for a bathroom renovation')."),
});
export type GetStartedFromPromptInput = z.infer<typeof GetStartedFromPromptInputSchema>;

const GetStartedFromPromptOutputSchema = z.object({
  shoppingList: z
    .string()
    .describe('A pre-filled shopping list or project plan based on the user prompt.'),
});
export type GetStartedFromPromptOutput = z.infer<typeof GetStartedFromPromptOutputSchema>;

export async function getStartedFromPrompt(input: GetStartedFromPromptInput): Promise<GetStartedFromPromptOutput> {
  return getStartedFromPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getStartedFromPromptPrompt',
  input: {schema: GetStartedFromPromptInputSchema},
  output: {schema: GetStartedFromPromptOutputSchema},
  prompt: `You are a helpful assistant that generates shopping lists or project plans based on user input.

  Generate a detailed shopping list or project plan based on the following prompt:

  Prompt: {{{prompt}}}
  `,
});

const getStartedFromPromptFlow = ai.defineFlow(
  {
    name: 'getStartedFromPromptFlow',
    inputSchema: GetStartedFromPromptInputSchema,
    outputSchema: GetStartedFromPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
