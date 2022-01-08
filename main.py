from utils.flask import *
from utils.file_work import get_values_from_excel

from flask import Flask, request, render_template
import webbrowser


# VARIABLES
_host = 'localhost'
_port = 3000

a= True


# APP
app = Flask(__name__)


# ROUTES
@app.route('/', methods=["GET"])
def home():
    return render_template('home.html')


@app.route('/index', methods=["GET", "POST"])
def index():

    if request.method == 'POST':

        if request.form['excel'] == 'false':

            n, l, a, b, variable = find_val_to_model(request)

            params = create_demand(request, variable)

            vars_q, vars_t = get_results(n, a, b, l, variable, params)
            return render_template('results.html', vars_q=vars_q, vars_t=vars_t, n=n, l=l, a=a, b=b, variable=variable)

        else:

            n = int(get_values_from_excel(0))
            a, b = get_values_from_excel(1)
            l = get_values_from_excel(2)
            variable, params1, params2 = get_values_from_excel(3)

            params = create_demand_excel(variable, params1, params2)

            vars_q, vars_t = get_results(n, a, b, l, variable, params)
            return render_template('results.html', vars_q=vars_q, vars_t=vars_t, n=n, l=l, a=a, b=b, variable=variable)

    return render_template('index.html')


@app.route('/about', methods=["GET"])
def about():
    return render_template('about.html')


@app.errorhandler(404)
def page_not_found(error):
    return render_template("pagina_no_encontrada.html"), 404


if __name__ == '__main__':
    webbrowser.open(f'http://{_host}:{_port}', new=2)

    # el debug en true es para poder recargar los cambios
    app.run(host=_host, port=_port, debug=False)