/**
 * global service
 */


import { factories } from '@strapi/strapi';


export default factories.createCoreService('api::global.global');


    // greetings from the service
console.log("\t\t\t-> global-service says hello ...")
