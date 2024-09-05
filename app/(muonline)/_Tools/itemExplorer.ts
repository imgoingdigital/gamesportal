import index from "../_Components/LoginForm";

const xml2js = require('xml2js');
const fs = require('fs')
const parser = new xml2js.Parser({ attrkey: "ATTR" });

const itemListPath = "D:/Servers/MUOnline/S-19/Files/Data/Item/ItemList.xml"
let xml_string = fs.readFileSync(itemListPath, "utf8");



export interface IItemListEntry extends IXmlData{
  ModelFile: string
}

export interface IXmlData{
  Index: string
  Name: string
}

export interface IITemList{
  ItemList : {
    Category: IXmlData[]
  }

}

 export function getCategories() {
  return parser.parseString(xml_string,  function (err: null, result:IITemList) {
    if (err === null) {
      console.log("RES:")
      console.log(result.ItemList.Category);
    } else {
      console.log("Error:")
      console.log(err);
    }
  
    return result
  });

}