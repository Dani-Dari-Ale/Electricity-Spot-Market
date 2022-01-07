function create() {
  var n = document.getElementById("n").value;

  if (n > 0) {
    create_matrix(1, n, "a_matrix");
    create_matrix(1, n, "b_matrix");
    create_matrix(n, n, "l_matrix");
  } else {
    alert("Elija un N mayor que 0");
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
      '<input type="text" required="true" size="1" placeholder="intervalos" id="n_intervals" name="n_intervals">';
    params +=
      '<input type="button" required="true" id="btn_create_intervals" value="crear intervalos" onclick="crear_intervalos()"/>';
    document.getElementById("params").innerHTML = params;
  }
}

function crear_intervalos() {
  var n_intervals = document.getElementById("n_intervals").value;
  console.log(n_intervals);
  create_matrix(2, n_intervals, "intervals");
}

function check_results(event) {
  var variable = document.getElementById("variable").value;

  if (variable == "none") {
    event.preventDefault();
    alert("Establezca un tipo de variable");
    return false;
  }
}

function check_results_from_excel() {
  document.getElementById("excel").value = "true";
  console.log("Se cambio el estado del excel");
}
