/**
 * `page-populate` middleware
 */

import type { Core } from '@strapi/strapi';


  //! ctxQuery function 
  // this prints out a representation of the population object
const printCtxQuery = (ctx)=>{
  return console.dir(
    ctx.query,
    {depth: null}
  );
};

  //! custom population-object
  // predefined endpoint parameters (json)
const populate = '*';
// const populate = {
//   blocks:{ 
//     on:{ 
//       "blocks.hero":{ 
//         populate:{ 
//           links: true, 
//           image:{ fields: ["alternativeText", "url"] } 
//         } 
//       },
//       "blocks.section-heading": true,
//       "blocks.card-grid":{ 
//         populate:{
//           cards: true,
//         }
//       },
//       "blocks.content-with-image": {
//         populate:{
//           link: true,
//           image:{ fields: [ "alternativeText", "url"]},
//         }
//       },
//       "blocks.markdown": true,
//       "blocks.person-card": {
//         populate:{
//           image:{ fields: [ "alternativeText", "url"]}, 
//         }
//       },
//       "blocks.faqs":{
//         populate:{
//           faq: true,
//         }
//       },
//       "blocks.newsletter": true,
//     } 
//   }
// }


export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
      //! my modified code 

    console.log('\n'+
      '\t-> custom page-population middleware function executing ...\n'+
      '\t***********************************************************'
    );

      // overwrites population request with default-parameters
    ctx.query.populate = populate;
    
      // object data is being printed here
    console.log('\nctx.query: \n');
    printCtxQuery(ctx);
    console.log('\n')

      //!

    strapi.log.info('In page-populate middleware.');

    await next();
  };
};
