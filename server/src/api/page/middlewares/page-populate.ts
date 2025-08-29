/**
 * `page-populate` middleware
 */

import type { Core } from '@strapi/strapi';


  //! custom population-object
  // default populate-all
const populate = '*';


export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    

    strapi.log.info('In page-populate middleware.');

    await next();
  };
};
