/**
 * `landing-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';


  //! default population-object
const populate = '*';


export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {

    strapi.log.info('In landing-page-populate middleware.');

    await next();
  };
};

