import xml from './books.xml';
import jsontoxml from 'jsontoxml'

const xmlToJson = JSON.stringify(xml, null, ' ');
const jsonToXml = jsontoxml(xmlToJson);

console.log('xmltojson', xmlToJson);
console.log('jsontoxml', jsonToXml);
