
    //! this ensures the correct  strapi url from string or sysytem-env

    //? STRAPI_API_URL will be repaced when we deploy
export function getStrapiURL(){
    return process.env.STRAPI_API_URL ?? 'http://localhost:1337';
}