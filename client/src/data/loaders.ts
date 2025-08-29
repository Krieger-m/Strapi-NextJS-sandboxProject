import qs from 'qs';
import { fetchAPI } from '@/utils/fetch-api';
import { getStrapiURL } from '@/utils/get-strapi-url';


    //! landing page section
const landingPageQuery = qs.stringify({
  populate:{
    blocks:{ 
      on:{ 
          "blocks.hero":{ 
            populate:{ 
              links: true, 
              image:{ fields: ["alternativeText", "url"] } 
              } 
            },
          "blocks.section-heading": true,
          "blocks.card-grid":{ 
            populate:{
                  cards: true,
                }
              },
          "blocks.content-with-image": {
            populate:{
                  link: true,
                  image:{ fields: [ "alternativeText", "url"]},
                }
              },
              "blocks.markdown": true,
              "blocks.person-card": {
              populate:{
                image:{ fields: [ "alternativeText", "url"]}, 
              }
          },
          "blocks.faqs":{
            populate:{
                  faq: true,
                }
          },
          "blocks.newsletter": true,
        } 
      }
    }
  }
);
    
export async function getLandingPage(){
    const path = '/api/landing-page';
    const HOST =  getStrapiURL();
    const url = new URL(path, HOST);

    url.search = landingPageQuery;

    return await fetchAPI(url.href, { method: 'GET' });
}
    

    //! global section
const globalQuery = qs.stringify({
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
});

export async function getGlobal(){
    const path = '/api/global';
    const HOST = getStrapiURL();
    const url = new URL(path, HOST);

    url.search = globalQuery;

    return await fetchAPI(url.href, { method: 'GET' });
}

    //! pages section
const pagesQuery = qs.stringify({
  populate:{
    blocks:{ 
      on:{ 
        "blocks.hero":{ 
          populate:{ 
            links: true, 
            image:{ fields: ["alternativeText", "url"] } 
          } 
        },
        "blocks.section-heading": true,
        "blocks.card-grid":{ 
          populate:{
            cards: true,
          }
        },
        "blocks.content-with-image": {
          populate:{
            link: true,
            image:{ fields: [ "alternativeText", "url"]},
          }
        },
        "blocks.markdown": true,
        "blocks.person-card": {
          populate:{
            image:{ fields: [ "alternativeText", "url"]}, 
          }
        },
        "blocks.faqs":{
          populate:{
            faq: true,
          }
        },
        "blocks.newsletter": true,
      } 
    }
  }
});

export async function getPages(){
    const path = '/api/global';
    const HOST = getStrapiURL();
    const url = new URL(path, HOST);

    url.search = globalQuery;

    return await fetchAPI(url.href, { method: 'GET' });
}