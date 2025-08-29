/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';


  //! my ctxQuery function 
  // this prints out a representation of the population object
const printCtxQuery = (ctx)=>{
  return console.dir(
    ctx.query,
    {depth: null}
  );
};

  //! my population object
  // specifies what data is sent by default to populate our frontend
const populate = '*';
// const populate = {
//   banner: {
//     populate: { link: true },
//   },
//   header: {
//     populate: {
//       logo: { populate: { image: { fields: ["alternativeText", "url"] } } },
//       navItems: true,
//       cta: true,
//     },
//   },

//   footer: {
//     populate: {
//       logo: { populate: { image: { fields: ["alternativeText", "url"] } } },
//       navItems: true,
//       socialLinks: {
//         populate: { image: { fields: ["alternativeText", "url"] } },
//       },
//     },
//   },
// };


export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
      //! my modified code 

    console.log('\n'+
      '\t-> custom global-population middleware function executing ...\n'+
      '\t*************************************************************'
    );

      // overwrites all user requests from the frontend to present only the predefined data
    ctx.query.populate = populate;
    
      // object data is being printed here
    console.log('\nctx.query: \n');
    printCtxQuery(ctx);
    console.log('\n')

      //!

    strapi.log.info('In global-populate middleware.');

    await next();
  };
};

  // greetings from the middleware
console.log("\t\t\t-> global-middleware says hello ...")



/*
! this is the object notation for the endpoint query parameters

{
  populate: {
  
    banner:{
      populate:{link: true}
    },
    header:{
      populate:{
        logo: {
          populate:{
            image:{
              fields: ["alternativeText","url"]
            }
          }
        },
        navItems: true,
        cta: true
      }
    },
    
    footer: {
      populate:{
        logo: {
          populate:{
            image:{
              fields: ["alternativeText","url"]
            }
          }
        },
        navItems: true,
        socialLinks: {
          populate:{
            image:{
              fields: ["alternativeText","url"]
            }
          }
        }
      }
    }
  }
}


! it translates to the URL query in lhs-syntax

/api/global?populate[banner][populate][link]=true&populate[header][populate][logo][populate][image][fields][0]=alternativeText&populate[header][populate][logo][populate][image][fields][1]=url&populate[header][populate][navItems]=true&populate[header][populate][cta]=true&populate[footer][populate][logo][populate][image][fields][0]=alternativeText&populate[footer][populate][logo][populate][image][fields][1]=url&populate[footer][populate][navItems]=true&populate[footer][populate][socialLinks][populate][image][fields][0]=alternativeText&populate[footer][populate][socialLinks][populate][image][fields][1]=url

*/

