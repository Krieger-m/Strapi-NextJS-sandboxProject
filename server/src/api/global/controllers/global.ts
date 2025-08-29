/**
 * global controller
 */


import { factories } from '@strapi/strapi'


export default factories.createCoreController('api::global.global');


    // greetings from the controller
console.log("\t\t\t-> global-controller says hello ...");
