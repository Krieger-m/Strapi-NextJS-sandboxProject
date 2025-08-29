/**
 * `landing-page-populate` middleware
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
      '\t-> custom landing-page-population middleware function executing ...\n'+
      '\t*******************************************************************'
    );

      // overwrites population request with default-parameters
    ctx.query.populate = populate;
    
      // object data is being printed here
    console.log('\nctx.query: \n');
    printCtxQuery(ctx);
    console.log('\n')

      //!

    strapi.log.info('In landing-page-populate middleware.');

    await next();
  };
};

/*
? maybe we could also set this in the frontend via the 'qs-library' 
? but i already defined everything here so i dont know whats 
? the best practice for that. i will leave it like this, maybe 
? there is an enlightment waiting later on :D
    frontend project reference: 'client\src\app\page.tsx'
*/