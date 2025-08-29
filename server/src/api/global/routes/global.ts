/**
 * global router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::global.global');

    // greetings from the router
console.log("\t-> global-router says hello ...");
