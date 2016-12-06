var fs = require('fs');
var rl = require('readline').createInterface({
  input: fs.createReadStream('crimedata.csv')
});
var array3 = new Array(16).fill(0);
var array4 = new Array(16).fill(0);
var firstrow=true;
rl.on('line', function(line) {
  var arr = line.split(new RegExp(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));

  if (firstrow)
{
  firstrow=false;
}
else
{

  if(arr[17]=="2001" && arr[8]=="false" && arr[5]=="ASSAULT")
  {

    array3[0]++;
  }
     if (arr[17] == "2001" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[0]++;
    }
    if (arr[17] == "2002" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[1]++;
    }
    if (arr[17] == "2002" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[1]++;
    }
    if (arr[17] == "2003" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[2]++;
    }
    if (arr[17] == "2003" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[2]++;
    }
    if (arr[17] == "2004" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[3]++;
    }
    if (arr[17] == "2004" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[3]++;
    }
    if (arr[17] == "2005" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[4]++;
    }
    if (arr[17] == "2005" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[4]++;
    }
    if (arr[17] == "2006" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[5]++;
    }
    if (arr[17] == "2006" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[5]++;
    }
    if (arr[17] == "2008" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[6]++;
    }
    if (arr[17] == "2008" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[6]++;
    }
    if (arr[17] == "2008" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[7]++;
    }
    if (arr[17] == "2008" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[7]++;
    }
    if (arr[17] == "2009" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[8]++;
    }
    if (arr[17] == "2009" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[8]++;
    }
    if (arr[17] == "2010" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[9]++;
    }
    if (arr[17] == "2010" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[9]++;
    }
    if (arr[17] == "2011" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[10]++;
    }
    if (arr[17] == "2011" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[10]++;
    }
    if (arr[17] == "2012" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[11]++;
    }
    if (arr[17] == "2012" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[11]++;
    }
    if (arr[17] == "2013" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[12]++;
    }
    if (arr[17] == "2013" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[12]++;
    }
    if (arr[17] == "2014" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[13]++;
    }
    if (arr[17] == "2014" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[13]++;
    }
    if (arr[17] == "2015" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[14]++;
    }
    if (arr[17] == "2015" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[14]++;
    }
    if (arr[17] == "2016" && arr[8] == "false" && arr[5]=="ASSAULT") {
      array3[15]++;
    }
    if (arr[17] == "2016" && arr[8] == "true" && arr[5]=="ASSAULT") {
      array4[15]++;
    }
}
});
var result = [];

function change() {
  var obj = {};

  var year = 2001;

  for (var i = 0; i < 16; i++) {

    obj = {

      Year: year,

      ArrestTrue: array4[i],

      ArrestFalse: array3[i]

    }

    result.push(obj);

    year++;

  }

  return result;

}

rl.on("close", function() {

  console.log(array3);
  var data = JSON.stringify(change());

  fs.writeFile("file5.json", data, function(err) {

    if (err) {

      return console.log(err);

    }
    console.log("The file was saved!");

  });


});
