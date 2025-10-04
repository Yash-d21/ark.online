'use server';
/**
 * @fileOverview Provides AI-powered market insights to retailers, including trending products and optimal pricing strategies.
 *
 * - getMarketInsightsForRetailers - A function that retrieves market insights for retailers.
 * - MarketInsightsForRetailersInput - The input type for the getMarketInsightsForRetailers function.
 * - MarketInsightsForRetailersOutput - The return type for the getMarketInsightsForRetailers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MarketInsightsForRetailersInputSchema = z.object({
  retailerArea: z
    .string()
    .describe('The geographic area or region where the retailer operates.'),
  hardwareCategory: z
    .string()
    .describe('The specific category of hardware products the retailer sells.'),
});
export type MarketInsightsForRetailersInput = z.infer<typeof MarketInsightsForRetailersInputSchema>;

const MarketInsightsForRetailersOutputSchema = z.object({
  trendingProducts: z
    .array(z.string())
    .describe('A list of trending hardware products in the retailer area.'),
  optimalPricingStrategy: z
    .string()
    .describe(
      'A pricing strategy recommendation for the retailer, based on market trends and competitor pricing.'
    ),
  overallDemandForecast: z
    .string()
    .describe(
      'An overall forecast of the demand for hardware in the specified area.'
    ),
});
export type MarketInsightsForRetailersOutput = z.infer<typeof MarketInsightsForRetailersOutputSchema>;

export async function getMarketInsightsForRetailers(
  input: MarketInsightsForRetailersInput
): Promise<MarketInsightsForRetailersOutput> {
  return marketInsightsForRetailersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'marketInsightsForRetailersPrompt',
  input: {schema: MarketInsightsForRetailersInputSchema},
  output: {schema: MarketInsightsForRetailersOutputSchema},
  prompt: `You are an AI assistant providing market insights for hardware retailers.

  Based on the retailer's area: {{{retailerArea}}}, and the hardware category: {{{hardwareCategory}}},
  provide the following information:

  - A list of trending hardware products in the area.
  - An optimal pricing strategy recommendation, based on market trends and competitor pricing.
  - An overall forecast of demand for hardware in the specified area.

  Format your response as a JSON object matching the schema description.  Do not include any additional information or introductory/closing remarks.
  `,
});

const marketInsightsForRetailersFlow = ai.defineFlow(
  {
    name: 'marketInsightsForRetailersFlow',
    inputSchema: MarketInsightsForRetailersInputSchema,
    outputSchema: MarketInsightsForRetailersOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
