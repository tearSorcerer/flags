## TODO: 

+ ~~Look into flag changing multiple times when refreshing~~
+ read this: https://medium.com/swinginc/adding-type-safety-to-your-javascript-an-overview-to-better-code-abe42a799145


## Research to be done:

+ https://hacks.mozilla.org/2015/03/understanding-inline-box-model/
+ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
+ https://stackoverflow.blog/2022/06/02/a-beginners-guide-to-json-the-data-format-for-the-internet/
+ https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call/16825593#16825593
+ https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick
+ https://w3bits.com/css-image-hover-zoom/
+ https://stackoverflow.com/a/12417336

## Singe Use Code

Code I used for Extracting all flags from https://flagsapi.com/#countries

```code
//const allFlags = document.getElementsByClassName("mb0 bold"); // only gives flags

// const allFlagsMoreInfo = document.getElementsByClassName("item_country"); // more info about flags

// console.log(allFlagsMoreInfo);

text = '['
for (let i = 0; i < 256; i++) {

  let flagsource = allFlagsMoreInfo[i].children[0].currentSrc ?? 'no flag';
  let flagShortName = allFlagsMoreInfo[i].children[1].textContent;
  let flagFullName = allFlagsMoreInfo[i].children[2].textContent;
  
  text += '{'
  text += '\"img\" :' +'\"' + flagsource + '\"';
  
  text += ', ';
  
  text += '\"name\":' +'\"' + flagFullName + '\"';
  
  text += ',';

  text += '\"shortName\":' +'\"' + flagShortName + '\"';
  
  text += '}'
  
  if (i !== 255) text += ',';
  
}

text += ']';

console.log(text);
```

## Single Use code:

The following is the code I used for extracting the flags from: https://flagicons.lipis.dev/


```

text = '['
for (let i = 0; i < allFlags.length; i++) {
  
  text += '{'
  text += '\"img\" :' +'\"' + allFlags[i].children[1].src + '\"';
  
  text += ', ';
  
  text += '\"name\":' +'\"' + allFlags[i].children[0].title + '\"';
  
  text += '}'
  
  if (i !== (allFlags.length -1)) text += ',';
  
}

text += ']';

console.log(text)

```