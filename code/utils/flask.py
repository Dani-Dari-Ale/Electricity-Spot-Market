from utils.demand import demand
from utils.solveModel import solveModel, no_solution, solutionType
from utils.file_work import write_output


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


def create_params(request, variable):
    params = []

    if variable == 'uniform' or variable == 'gamma' or variable == 'normal' or variable == 'binary':
        params.append(int(request.form['params0']))
        params.append(float(request.form['params1']))

    elif variable == 'exponential' or variable == 'geometric':
        params.append(float(request.form['params0']))

    elif variable == 'scenarios':
        n_scenarios = int(request.form['n_scenarios'])
        n = int(request.form['n'])

        params1 = []
        params2 = []
        for i in range(n_scenarios):
            params1_aux = []
            for j in range(n):
                params1_aux.append(float(request.form[f'd{i+1}{j+1}']))
            params1.append(params1_aux)

        for k in range(n_scenarios):
            params2.append(float(request.form[f'p{k+1}']))

        params.append(params1)
        params.append(params2)

    else:
        print("")

    return params


def create_params_excel(variable, params1, params2):
    params = []

    if variable == 'uniform' or variable == 'gamma' or variable == 'normal' or variable == 'binary' or variable == 'scenarios':
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

        solutionString = solutionType(n, l, a, b, d)
    except:
        vars_q = []
        vars_t = []
        solutionString = no_solution()

    write_output(n, a, b, l, variable, d, vars_q, vars_t, solutionString)

    return vars_q, vars_t, d, solutionString


def parse_probs(variable, params):
    msg = "ok"

    # Discrete
    if variable == 'geometric':
        if params[0] < 0 or params[0] > 1:
            msg = "p must be between 0 and 1"

    elif variable == 'binary':
        if params[0] < 0:
            msg = "n must be bigger than 0"
        if params[1] < 0 or params[1] > 1:
            msg = "p must be between 0 and 1"

    # Continua
    elif variable == 'uniform':
        if params[0] > params[1]:
            msg = "a must be bigger than b"

    elif variable == 'gamma':
        if params[1] < 0:
            msg = "lambda must be bigger than 0"

    elif variable == 'normal':
        if params[1] < 0:
            "O^2 must be bigger than 0"

    elif variable == 'exponential':
        msg = "ok"

    # Scenarios
    elif variable == 'scenarios':
        sum_probs = 0
        for prob in params[1]:
            sum_probs += prob
            if prob < 0 or prob > 1:
                msg = "p must be between 0 and 1"
        if sum_probs != 1:
            msg = "Probabilities must add up to 1"

    else:
        msg = "This variable type dont exist"

    return msg
