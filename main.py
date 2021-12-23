import webbrowser
import pandas as pd

#df2 = pd.read_csv("ejemplo2.csv", header=None)


from flask import Flask, redirect, request, render_template

from utils.solveModel import solveModel
from utils.demand import demand

from visual.flask import *

app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def index():

    if request.method == 'POST':

        n, l, a, b, variable = find_val_to_model(request)

        params = create_demand(request, variable)

        d = demand(variable, params, n)

        try:
            vars_q, vars_t = solveModel(n, l, a, b, d)

        except:
            vars_q = None
            vars_t = None

        return render_template('results.html', vars_q=vars_q, vars_t=vars_t, n=n, l=l, a=a, b=b, variable=variable)

    return render_template('index.html')


@app.errorhandler(404)
def page_not_found(error):
    return render_template("pagina_no_encontrada.html"), 404


if __name__ == '__main__':
    # el debug en true es para poder recargar los cambios
    _host = 'localhost'
    _port = 3008
    webbrowser.open(f'http://{_host}:{_port}', new=2)
    app.run(host=_host, port=_port, debug=True)
