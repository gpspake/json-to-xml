import xml from './books.xml';

const xmlToJson = (xml) => JSON.stringify(xml, null, ' ');

console.log('xmltojson', xmlToJson(xml));
