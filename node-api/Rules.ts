import {OGParser,TwitterParse} from './Parsers';

// import json from './RulesJSON.json';

abstract class AbstractRule{
    parserList:any = [];

    abstract initApi():void;
    abstract initParsers():void;
    abstract runScrapper():void;
}


class AmazonCom extends AbstractRule {
    initParsers(): void {
        throw new Error('Method not implemented.');
    }
    runScrapper(): void{
        throw new Error('Method not implmented');
    }
    initApi(): void {
        throw new Error('Method not implemented.');
    }
    readonly pageDataDefinition:any = {
        TITLE:true,
        Author:true,
        DatePublished:false
    };
}


class DefaultCom extends AbstractRule {
    readonly pageDataDefinition:any = {
        TITLE:true,
        Author:true,
        DatePublished:false
    };

    initApi(){
        //init some API
    }

    initParsers(){
        //some Parsers
        this.parserList.push(new OGParser());
        this.parserList.push(new TwitterParse());

    }

    runScrapper(){
        //some custom scrapper
    }
} 


module.exports = {
    DefaultCom,
    AmazonCom    
};

// interface CustomNodeJsGlobal extends NodeJS.global {
//     myExtraGlobalVariable: number;
//     // You can declare anything you need.
// }

// globalThis['Rules'] = {DefaultCom,AmazonCom};








