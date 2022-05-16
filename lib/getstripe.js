import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe= () =>{
    if(!stripePromise) {
        stripePromise = loadStripe("pk_test_51L01PWSBad2Xziua8kdjBcTJIEkCJBxViy4zKmXZbTBZyvzMInv1QZDaDesaTmBfsn42BTkz6JRmxCAeFBjM92Sm00AlEDMlP3");
    }
    return stripePromise;
}

export default getStripe;