var fs = require('fs');
var rl = require('readline').createInterface({
  input: fs.createReadStream('crimedata.csv')
});
var array1=new Array(16).fill(0);
var array2=new Array(16).fill(0);
rl.on('line', function(line) {

    var arr = line.split(new RegExp(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/))


  if (arr[17] == "2001") {

if (arr[6] == "$500 AND UNDER")
{
  array1[0]++;

      }
      if (arr[6] == "OVER $500") {
        array2[0]++
      }
    }

  if (arr[17] == "2002") {

    if (arr[6] == "$500 AND UNDER") {
    array1[1]++;
    }

  if (arr[6] == "OVER $500") {
  array2[1]++;
  }


}
if (arr[17] == "2003") {

  if (arr[6] == "$500 AND UNDER") {
  array1[2]++;
  }

if (arr[6] == "OVER $500") {
array2[2]++;
}


}
if (arr[17] == "2004") {

  if (arr[6] == "$500 AND UNDER") {
    array1[3]++;
  }
  if (arr[6] == "OVER $500") {
  array2[3]++;
  }
}
if (arr[17] == "2005") {

  if (arr[6] == "$500 AND UNDER") {
  array1[4]++;
  }
  if (arr[6] == "OVER $500") {
array2[4]++;

  }
}
if (arr[17] == "2006") {

  if (arr[6] == "$500 AND UNDER") {
array1[5]++;
  }
  if (arr[6] == "OVER $500") {

array2[5]++;
  }
}
if (arr[17] == "2007") {

  if (arr[6] == "$500 AND UNDER") {
    array1[6]++;
  }
  if (arr[6] == "OVER $500") {
    array2[6]++;
  }
}

if (arr[17] == "2008") {

  if (arr[6] == "$500 AND UNDER") {
  array1[7]++;
  }
  if (arr[6] == "OVER $500") {
    array2[7]++;

  }
}
if (arr[17] == "2009") {

  if (arr[6] == "$500 AND UNDER") {
    array1[8]++;
  }
  if (arr[6] == "OVER $500") {
  array2[8]++;
  }
}

if (arr[17] == "2010") {

  if (arr[6] == "$500 AND UNDER") {
  array1[9]++;
  }
  if (arr[6] == "OVER $500") {
    array2[9]++;
  }
}
if (arr[17] == "2011") {

  if (arr[6] == "$500 AND UNDER") {
    array1[10]++;
  }
  if (arr[6] == "OVER $500") {
  array2[10]++;
  }
}

if (arr[17] == "2012") {


  if (arr[6] == "$500 AND UNDER") {
    array1[11]++;
  }
  if (arr[6] == "OVER $500") {
    array2[11]++;
  }
}
if (arr[17] == "2013") {

  if (arr[6] == "$500 AND UNDER") {
  array1[12]++;
  }
  if (arr[6] == "OVER $500") {
  array2[12]++;
  }
}
if (arr[17] == "2014") {

  if (arr[6] == "$500 AND UNDER") {
    array1[13]++;
  }
  if (arr[6] == "OVER $500") {
    array2[13]++;

  }
}
if (arr[17] == "2015") {

  if (arr[6] == "$500 AND UNDER") {
  array1[14]++;
  }
  if (arr[6] == "OVER $500") {
array2[14]++;

  }
}
if (arr[17] == "2016") {

  if (arr[6] == "$500 AND UNDER") {
  array1[15]++;
  }
  if (arr[6] == "OVER $500") {
  array2[15]++;

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

      over500: array1[i],

      under500: array2[i]

    }

    result.push(obj);

    year++;

  }

  return result;

}

rl.on("close", function() {

  var data = JSON.stringify(change());

  fs.writeFile("file8.json", data, function(err) {

    if (err) {

      return console.log(err);

    }
    console.log("The file was saved!");

  });

});
