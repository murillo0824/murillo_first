let objectArray_g = [];

function getCSVFile(csv_path) {
  var xhr = new XMLHttpRequest();
  let csv_data;
  xhr.onload = function () {
    // createArray(xhr.responseText);
    csv_data =xhr.responseText;
    console.log(csv_data);

  };
  console.log(csv_data);
  xhr.open("get", csv_path, true);
  xhr.send(null);
}

function createArray(csvData) {
  var tempArray = csvData.split("\n");
  var csvArray = new Array();

  var key_arry = [];
  var obj = {};
  var objArray = [];
  for (var i = 0; i < tempArray.length; i++) {
    csvArray[i] = tempArray[i].split(",");
  }
  // console.log(csvArray);
  csvArray.forEach((value, index) => {
    obj = {};
    if (index == 0) {
      value.forEach((keys) => {
        key_arry.push(keys);
      });
    } else {
      value.forEach((inner, i) => {
        obj[key_arry[i]] = inner;
      });
      objArray.push(obj);
    }
  });
  objectArray_g = objArray;
  // console.log(key_arry);
  console.log(objArray);
}

function returnTrue() {
  return true;
}

getCSVFile("../csv/base_csv.csv");
