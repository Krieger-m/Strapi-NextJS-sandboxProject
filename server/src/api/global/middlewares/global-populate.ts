/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';


  //! my population object
const populate = '*';


export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In global-populate middleware.');

    await next();
  };
};

  // greetings from the middleware
console.log("\t\t\t-> global-middleware says hello ...")

