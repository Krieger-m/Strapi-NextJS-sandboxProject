
  //! my customized starting page 
// contains route and data. later on in the process it will be used to get the data from our strapi-api-endpoints

import '@/styles/newStyles.css'
import { getGlobal, getLandingPage } from '@/data/loaders';
import { HeroSection } from '@/components/blocks/Hero';
import { SectionHeading } from '@/components/blocks/SectionHeading';

import Image from "next/image";
import Link from "next/link";


  //! my landingPageLoader function
// is responsible for calling the getHomePage function 
async function landingPageLoader(){
  const data = await getLandingPage();
      // console.log('\n\t>>> data log from landingPageLoader function <<<\n');
      // console.log(data.data);
      // console.log('\n\t>>> end of transmission... <<<');

    // spreads received data into new data-object and returning it
  return { ...data.data }; ////'Hello this is a test to see if it works.'}
}
  

  //! my globalLoader function
// is responsible for calling the getHomePage function 
async function globalLoader(){
  const data = await getGlobal();
      // console.log('\n\t>>> data log from landingPageLoader function <<<\n');
      // console.log(data.data);
      // console.log('\n\t>>> end of transmission... <<<');

    // spreads received data into new data-object and returning it
  return { ...data.data }; ////'Hello this is a test to see if it works.'}
}

const  TestTitle =(landingPageData:any) =>{
  return (
    <section >
      <div className='title-box'>
        <h1 className='head bigger'>{ landingPageData.title }</h1>
        <br/>
        <h3>{ landingPageData.description }</h3>
        <br/>
        {/* <p>{landingPageBlocks.for}</p> */}
      </div>
    </section>
  );
}


  //! my custom homeRoute
//logs the 'data' to the console and renders a div with h1 element to the page to see if the setup works
export default async function HomeRoute() {
    
  // landingPageLoader fuction-call
  const landingPageData = await landingPageLoader();
  
  // getGlobal fuction-call
  const globalData = await globalLoader();

  // get blocks from data
  const landingPageBlocks = landingPageData?.blocks || [];


   
  console.log('\n\t>>> data log from homeRoute function <<<\n');
  console.log(landingPageBlocks);
  console.log('\t>>> end of transmission... <<<\n');
  
  return (
    <div>
      <TestTitle {...globalData}/>
      <TestTitle  {...landingPageData}/>
      
      <HeroSection {...landingPageBlocks[0]}/> 
      <SectionHeading {...landingPageBlocks[1]}/>
    </div>
  );
}

/*
? we would also be able to define the object-notation query here
? and convert it to lhs-syntax using the qs npm library ...
? i already have defined all the default-population object in the
? api-endpoints so there is nothing else i can receive from the request ... 
? i guess we'll see
    see strapi api-project: 'src\api\landing-page\middlewares\landing-page-populate.ts' and so on
*/
