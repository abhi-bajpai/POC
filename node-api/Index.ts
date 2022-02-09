import 'module-alias/register';
import json from '@/utils/RulesJSON.json';
//import {Rules} from './Rules';

const Rules = require('./Rules');

console.log('Got the Endpoint.....');

console.log('Parsing the URL received from Query parameter......');

const Domain = 'AbcnewGoCom';// This could be smoemting like AmazonCom, WikipediaCom, etc based on domain name

// console.log('Based on Domain name, will create an instance of one of the Rules. Domain Name: ',Domain);

// const rule = new Rules[Domain]();
// console.log(new json.Rules[Domain]());
// const rule =  json.Rules[Domain];
// console.log('This is the instance created dynamically.......',rule);

// rule.runScrapper(); //using implemented methods for extracting data

// console.log( global);

const getTexts = () => {
    console.log('getTexts is executing....');
}

const index = json.Rules.findIndex((obj) => obj[Domain]);
// console.log(index);
const getTitle = json.Rules[index][Domain]?.scrapper.title;
let titleFn;
if(getTitle){
    titleFn = getTitle.fn as unknown as Function;
    titleFn();
}
