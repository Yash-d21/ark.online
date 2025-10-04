'use server';

/**
 * @fileOverview Product catalog suggestions for retailers.
 *
 * - getProductSuggestions - A function that suggests product categories and descriptions based on a product name.
 * - ProductSuggestionsInput - The input type for the getProductSuggestions function.
 * - ProductSuggestionsOutput - The return type for the getProductSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductSuggestionsInputSchema = z.object({
  productName: z.string().describe('The name of the product to get suggestions for.'),
});
export type ProductSuggestionsInput = z.infer<typeof ProductSuggestionsInputSchema>;

const ProductSuggestionsOutputSchema = z.object({
  categorySuggestions: z.array(z.string()).describe('Suggested categories for the product.'),
  descriptionSuggestions: z.array(z.string()).describe('Suggested descriptions for the product.'),
});
export type ProductSuggestionsOutput = z.infer<typeof ProductSuggestionsOutputSchema>;

export async function getProductSuggestions(input: ProductSuggestionsInput): Promise<ProductSuggestionsOutput> {
  return productSuggestionsFlow(input);
}

const productSuggestionsPrompt = ai.definePrompt({
  name: 'productSuggestionsPrompt',
  input: {schema: ProductSuggestionsInputSchema},
  output: {schema: ProductSuggestionsOutputSchema},
  prompt: `You are an AI assistant that provides suggestions for product categories and descriptions based on a given product name.

  Product Name: {{{productName}}}

  Provide a list of category suggestions and a list of description suggestions for the product. Be concise and relevant.
  Format the output as a JSON object with 'categorySuggestions' and 'descriptionSuggestions' fields.
  categorySuggestions should contain an array of relevant categories.
  descriptionSuggestions should contain an array of possible descriptions.
  `,
});

const productSuggestionsFlow = ai.defineFlow(
  {
    name: 'productSuggestionsFlow',
    inputSchema: ProductSuggestionsInputSchema,
    outputSchema: ProductSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await productSuggestionsPrompt(input);
    return output!;
  }
);
