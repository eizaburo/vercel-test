import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'eizaburo',
    apiKey: process.env.API_KEY,
});