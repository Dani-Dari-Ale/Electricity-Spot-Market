function create() {
  var n = document.getElementById("n").value;

  if (n > 0) {
    create_matrix(1, n, "a_matrix");
    create_matrix(1, n, "b_matrix");
    create_matrix(n, n, "l_matrix");

    document.getElementById("created_matrix").value = "true";
  } else {
    alert("Shoose N bigger than 0");
  }
}

function create_matrix(row, col, matrix_name) {
  var table = '<table border="0">';

  table += matrix_name;
  table += "<tr><td></td>";
  for (j = 0; j < col; j++) {
    table += "<td>" + (j + 1) + "</td>";
  }
  table += "</tr>";

  for (i = 0; i < row; i++) {
    table += "<tr>";
    table += "<td>" + (i + 1) + "</td>";
    for (j = 0; j < col; j++) {
      table +=
        "<td>" +
        '<input type="text" required="true" value="-1" size="1" name="' +
        matrix_name +
        i +
        j +
        '">' +
        "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById(matrix_name).innerHTML = table;
}

function create_params() {
  var variable = document.getElementById("variable").value;

  if (variable == "uniform") {
    params =
      '<input type="text" required="true" size="1" placeholder="a" name="params0">';
    params +=
      '<input type="text" required="true" size="1" placeholder="b" name="params1">';
    document.getElementById("params").innerHTML = params;
  } else if (variable == "exponential") {
    params =
      '<input type="text" required="true" size="1" placeholder="lambda" name="params0">';
    document.getElementById("params").innerHTML = params;
  } else if (variable == "gamma") {
    params =
      '<input type="text" required="true" size="1" placeholder="n" name="params0">';
    params +=
      '<input type="text" required="true" size="1" placeholder="lambda" name="params1">';
    document.getElementById("params").innerHTML = params;
  } else if (variable == "normal") {
    params =
      '<input type="text" required="true" size="1" placeholder="miu" name="params0">';
    params +=
      '<input type="text" required="true" size="1" placeholder="O^2" name="params1">';
    document.getElementById("params").innerHTML = params;
  } else if (variable == "binary") {
    params =
      '<input type="text" required="true" size="1" placeholder="n" name="params0">';
    params +=
      '<input type="text" size="1" placeholder="p" min="0" max="1" name="params1">';
    document.getElementById("params").innerHTML = params;
  } else if (variable == "geometric") {
    params =
      '<input type="text" required="true" size="1" placeholder="p" min="0" max="1" name="params0">';
    document.getElementById("params").innerHTML = params;
  } else if (variable == "scenaries") {
    params =
      '<input type="text" required="true" size="13" placeholder="number of sceneries" id="n_intervals" name="n_intervals">';
    params +=
      '<input type="button" required="true" id="btn_create_intervals" value="create sceneries" onclick="create_intervals(event)"/>';
    document.getElementById("params").innerHTML = params;
  }
}

function create_intervals(event) {
  var n_intervals = document.getElementById("n_intervals").value;
  if (n_intervals == "") {
    event.preventDefault();
    alert("Shoose a number bigger than 0 for intervals");
    return false;
  }
  create_matrix(2, n_intervals, "type demand in first line and probability in the second one");
  document.getElementById("scenarie_val").value = true;
}

function parse_data(event) {
  var variable = document.getElementById("variable").value;
  var created_matrix = document.getElementById("created_matrix").value;
  var scenarie_val = document.getElementById("scenarie_val").value;

  if (variable == "none") {
    event.preventDefault();
    alert("Set variable type");
    return false;
  } else if (created_matrix == "false") {
    event.preventDefault();
    alert("Create matrix A, B and L");
    return false;
  } else if (variable == "scenaries" && scenarie_val == "false") {
    event.preventDefault();
    alert("Create intervals");
    return false;
  }
}

function parse_data_from_excel() {
  document.getElementById("excel").value = "true";
  console.log("State of excel changed");
}
