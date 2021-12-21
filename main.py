
from flask import Flask
from flask import request
from flask import render_template

from utils.solveModel import solveModel
from utils.demand import demand

from visual.flask import *

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

if __name__ == '__main__':
    # el debug en true es para poder recargar los cambios
    app.run(debug=True, port=3000)