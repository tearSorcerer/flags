// Learning about Node.js: https://hectorcorrea.com/blog/2013-01-15/introduction-to-node-js

var http = require("http");
var fs = require("fs");
var masterListOfFlags = JSON.stringify(require('./master-list-all-flags-2.json'));
var africaFlags = JSON.stringify(require('./africa-all-flags.json'));
var europeFlags = JSON.stringify(require('./europe-all-flags.json'));
var northAmericaFlags = JSON.stringify(require('./north-america-all-flags.json'));
var southAmericaFlags = JSON.stringify(require('./south-america-all-flags.json'));
var port = 3000;
var serverUrl = "127.0.0.1";
var counter = 0;

const CONST_HEADER_ALL_FLAGS = "All-Flags";
const CONST_HEADER_AFRICAN_FLAGS = "Africa-Flags";
const CONST_HEADER_EUROPE_FLAGS = "Europe-Flags";
const CONST_HEADER_NORTH_AMERICA_FLAGS = "North-America-Flags";
const CONST_HEADER_SOUTH_AMERICA_FLAGS = "South-America-Flags";

var server = http.createServer(function (req, res) {
  counter++;
  console.log("Request: " + req.url + " (" + counter + ")");

  if (req.url == "/") {
    fs.readFile("sample.html", function (err, text) {
      res.setHeader("Content-Type", "text/html");
      res.setHeader(CONST_HEADER_ALL_FLAGS, masterListOfFlags);
      res.setHeader(CONST_HEADER_AFRICAN_FLAGS, africaFlags);
      res.setHeader(CONST_HEADER_EUROPE_FLAGS, europeFlags);
      res.setHeader(CONST_HEADER_NORTH_AMERICA_FLAGS, northAmericaFlags);
      res.setHeader(CONST_HEADER_SOUTH_AMERICA_FLAGS, southAmericaFlags);
      
      // refactor above to only have different headers, not one master
      // don't want dupes...unless it doesn't really matter. 

      // also could alter ./master-list-all-flags-2.json to 
      // have more flushed out objects so i could do better client
      // side filtering. 
      res.end(text);
    });

  

    // What a sync version would look like: 
    // const fileContent = fs.readFileSync("sample.html");
    // res.setHeader("Content-Type", "text/html");
    // res.end(fileContent);

    return;
  }

  // learning how to include css came from: https://stackoverflow.com/questions/74889134/css-style-not-applied-in-html-page-served-by-node-server-without-express
  if (req.url.endsWith(".css")) { 
    fs.readFile("leStyles.css", function (err, text) {
        res.setHeader("Content-Type", "text/css");
        res.end(text);
    });

    return;
  }

  if (req.url.includes("?")) {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1> Why does localstorage clear do this? </h1>");

    return;
  }


  // if (req.url === 'allFlags.json') {
  //   fs.readFile("allFlags.json", function(err, text) {
  //     res.setHeader("Content-Type", "text/json");
  //     res.end(text)
  //   })
  // }

  res.setHeader("Content-Type", "text/html");
  res.end("<p> Bruh, you are not supposed to be here " + counter + ". </p>");
});

console.log("Starting web server at " + serverUrl + ": " + port);
server.listen(port, serverUrl);
