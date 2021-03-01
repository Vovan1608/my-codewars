/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
*/

function domainName(url) {
  return url.replace(/.+\/\/|www.|\..+/g, "");
}

// const url = "http://github.com/carbonfive/raygun";
// const url = "http://www.zombie-bites.com";
// const url = "https://www.cnet.com";
// const url = "http://google.co.jp";
const url = "www.xakep.ru";
const res = domainName(url);
console.log(res);
