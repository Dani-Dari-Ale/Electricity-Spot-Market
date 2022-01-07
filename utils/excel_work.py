import xlrd


def read_excel(file, index_leaf):
    wb = xlrd.open_workbook(file)

    leaf = wb.sheet_by_index(index_leaf)

    array = []

    for i in range(0, leaf.nrows):
        arr = []
        for j in range(0, leaf.ncols):
            arr.append(leaf.cell_value(i, j))

        array.append(arr)

    return array


def get_values_from_excel(file, index_leaf):
    excel_list = read_excel(file, index_leaf)

    try:
        if index_leaf == 0:  # N
            return excel_list[0][0]

        elif index_leaf == 1:  # A, B
            return excel_list[0], excel_list[1]

        elif index_leaf == 2:  # Lij
            return excel_list

        elif index_leaf == 3:  # variable
            variable, params1, params2 = parse_variable(excel_list)
            return variable, params1, params2
        else:
            print("There is not more leafes")

    except:
        print("Error reading excel")


def parse_variable(excel_list):
    variable = excel_list[0][0]

    # parse variable

    if variable == 'uniform':
        a = excel_list[1][0]
        b = excel_list[2][0]

        return variable, a, b

    elif variable == 'exponential':
        _lambda = excel_list[1][0]

        return variable, _lambda, 0  # este cero es para poner un valor como params2

    elif variable == 'gamma':
        n = excel_list[1][0]
        _lambda = excel_list[2][0]

        return variable, n, _lambda

    elif variable == 'normal':
        miu = excel_list[1][0]
        sigma2 = excel_list[2][0]

        return variable, miu, sigma2

    elif variable == 'binary':
        n = excel_list[1][0]
        p = excel_list[2][0]

        return variable, n, p

    elif variable == 'geometric':
        p = excel_list[1][0]

        return variable, p, 0

    elif variable == 'scenaries':
        d = excel_list[1]
        p = excel_list[2]

        return variable, d, p

    else:
        print("This variable dont exist")


#print(get_values_from_excel("../input.xls", 3))
