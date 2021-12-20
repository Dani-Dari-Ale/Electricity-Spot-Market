#from ..backend.utils.solveModel import solveModel

from solveModel import solveModel
from demand import *

from flask import Flask
from flask import request
from flask import render_template


# from ..utils import solveModel

app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def index():
    print(request.form)
    if request.method == 'POST':

        n, l, a, b, variable = find_val_to_model(request)

        params = create_demand(request, variable)

        print(params)
        d = demand(variable, params, n)

        vars_q, vars_t = solveModel(n, l, a, b, d)

        print(vars_q)
        print(vars_t)
        return render_template('index.html', vars_q=vars_q, vars_t=vars_t)

    return render_template('index.html', vars_q=[], vars_t=[])


def find_val_to_model(request):
    n = request.form['n']
    n_int = int(n)
    a = []
    b = []
    for j in range(n_int):
        a_j = request.form[f'a_matrix{0}{j}']
        a.append(float(a_j))

        b_j = request.form[f'b_matrix{0}{j}']
        b.append(float(b_j))

    l = []

    for row in range(n_int):
        l_row = []
        for col in range(n_int):
            l_col = request.form[f'l_matrix{row}{col}']
            l_row.append(float(l_col))
        l.append(l_row)

    variable = request.form['variable']

    return n_int, l, a, b, variable


def create_demand(request, variable):
    params = []

    if variable == 'uniform' or variable == 'gamma' or variable == 'normal' or variable == 'binary':
        params.append(int(request.form['params0']))
        params.append(float(request.form['params1']))

    elif variable == 'exponential' or variable == 'geometric':
        params.append(float(request.form['params0']))

    elif variable == 'scenaries':
        n_intervals = float(request.form['n_intervals'])

        params1 = []
        params2 = []
        for col in range(n_intervals):
            params1.append(float(request.form[f'intervals{0}{col}']))
            params2.append(float(request.form[f'intervals{1}{col}']))

        params.append(params1)
        params.append(params2)

    else:
        print("")

    return params


if __name__ == '__main__':
    # el debug en true es para poder recargar los cambios
    app.run(debug=True, port=3000)
