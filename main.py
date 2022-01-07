from visual.flask import *
from utils.demand import demand
from utils.solveModel import solveModel
from utils.excel_work import get_values_from_excel

from flask import Flask, redirect, request, render_template
import webbrowser

excel_file = 'input.xls'

app = Flask(__name__)


@app.route('/', methods=["GET"])
def home():
    return render_template('home.html')


@app.route('/index', methods=["GET", "POST"])
def index():

    if request.method == 'POST':
        print(request.form)
        if request.form['excel'] == 'false':

            print("cafe")
            n, l, a, b, variable = find_val_to_model(request)

            params = create_demand(request, variable)

            d = demand(variable, params, n)

            try:
                vars_q, vars_t = solveModel(n, l, a, b, d)
            except:
                vars_q = []
                vars_t = []

            return render_template('results.html', vars_q=vars_q, vars_t=vars_t, n=n, l=l, a=a, b=b, variable=variable)

        else:

            n = int(get_values_from_excel(excel_file, 0))
            a, b = get_values_from_excel(excel_file, 1)
            l = get_values_from_excel(excel_file, 2)
            variable, params1, params2 = get_values_from_excel(excel_file, 3)

            params = create_demand_excel(variable, params1, params2)

            d = demand(variable, params, n)

            try:
                vars_q, vars_t = solveModel(n, l, a, b, d)

            except:
                vars_q = None
                vars_t = None

            return render_template('results.html', vars_q=vars_q, vars_t=vars_t, n=n, l=l, a=a, b=b, variable=variable)

    return render_template('index.html')


@app.route('/about', methods=["GET"])
def about():
    return render_template('about.html')


""" @app.errorhandler(404)
def page_not_found(error):
    return render_template("pagina_no_encontrada.html"), 404 """


if __name__ == '__main__':
    # el debug en true es para poder recargar los cambios
    _host = 'localhost'
    _port = 3006
    webbrowser.open(f'http://{_host}:{_port}', new=2)
    app.run(host=_host, port=_port, debug=True)
