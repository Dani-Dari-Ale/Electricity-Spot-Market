from gekko import GEKKO


def solveModel(N, L, a, b, D):
    m = GEKKO(remote=False)  # Initialize gekko
    vars_q = assignVar_q(m, N)
    vars_t = assignVar_t(m, L)

    conditionals(m, L, vars_q, vars_t, D)
    m.Obj(obj_function(vars_q, a, b))
    m.options.IMODE = 3  # Steady state optimization
    m.solve()

    return vars_q, vars_t


# funcion objetivo
def obj_function(q, a, b):
    f = 0
    for i in range(len(q)):
        f += a[i]*q[i] + b[i]*q[i]**2
    return f


# restricciones
def conditionals(m: GEKKO, L: list, assignVar_q: list, assignVar_t: list, D: list):
    count = len(L)
    for i in range(count):
        m.Equation(assignVar_q[i] - sum_T_Out(i, assignVar_t,
                   L) + sum_T_In(i, assignVar_t, L) >= D[i])


# Generacion de lista con las q_i
def assignVar_q(m: GEKKO, count: int):
    varList_q = []
    for i in range(count):
        varList_q.append(m.Var(lb=0))
    return varList_q


# Generacion de matriz con las t_ij donde (i,j) es una arista de L a partir de la matriz L
def assignVar_t(m: GEKKO, L: list):
    rows = columns = len(L)
    varList_t = []
    for i in range(rows):
        t_row = []
        for j in range(columns):
            if L[i][j] >= 0:
                t_row.append(m.Var(lb=0))
            else:
                t_row.append(-1)
        varList_t.append(t_row)
    return varList_t


# energia que sale del nodo i
def sum_T_Out(node, assignVar_t, L):
    count = len(L)
    sum = 0
    for j in range(count):
        termicalLoss = L[node][j]
        if(termicalLoss >= 0):
            tvar = assignVar_t[node][j]
            sum += tvar + (termicalLoss / 2) * tvar**2
    return sum


#  energia que entra al nodo i
def sum_T_In(node, assignVar_t, L):
    count = len(L)
    sum = 0
    for i in range(count):
        termicalLoss = L[i][node]
        if(termicalLoss >= 0):
            tvar = assignVar_t[i][node]
            sum += tvar - (termicalLoss / 2) * tvar**2
    return sum


def solutionType(n, l, a, b, d):
    b_positive = True
    L_positive = True
    result = ""
    for b_val in b:
        if b_val <= 0:
            b_positive = False
    for i_axis in l:
        for j_axis in i_axis:
            if j_axis == 0:
                L_positive = False

    if L_positive:
        result += "Optimum solution for vectors q and t"

    elif b_positive:
        result += "Optimum solution for vector q and vector t may be unbounded optimum"
    else:
        result += "May be unbounded optimum for vectors q and t"

    return result


def no_solution():
    return ("No solution in Model")
