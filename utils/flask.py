from utils.demand import demand
from utils.solveModel import solveModel
from utils.file_work import write_outpu


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
        n_intervals = int(request.form['n_intervals'])

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


def create_demand_excel(variable, params1, params2):
    params = []

    if variable == 'uniform' or variable == 'gamma' or variable == 'normal' or variable == 'binary' or variable == 'scenaries':
        params.append(params1)
        params.append(params2)

    elif variable == 'exponential' or variable == 'geometric':
        params.append(params1)

    else:
        print("")

    return params


def get_results(n, a, b, l, variable, params):
    d = demand(variable, params, n)

    try:
        vars_q, vars_t = solveModel(n, l, a, b, d)
    except:
        vars_q = []
        vars_t = []

    write_output(n, a, b, l, variable, vars_q, vars_t)

    return vars_q, vars_t
