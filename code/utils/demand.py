from enum import Enum

from pytest import Instance
from utils.random_variables import *


class distribution(Enum):
    UNIFORM = 'uniform',
    EXP = 'exponential',
    GAMMA = 'gamma',
    NORMAL = 'normal',
    BINARY = 'binary',
    GEOMETRIC = 'geometric',
    SCENARIOS = 'scenarios'


# generacion de la demanda
def demand(_distribution, params, N):
    dist = None
    if _distribution == distribution.UNIFORM.value[0]:
        dist = uniform(params[0], params[1])

    elif _distribution == distribution.EXP.value[0]:
        dist = exponential(params[0])

    elif _distribution == distribution.GAMMA.value[0]:
        dist = gamma(params[0], params[1])

    elif _distribution == distribution.NORMAL.value[0]:
        dist = normal(params[0], params[1])

    elif _distribution == distribution.BINARY.value[0]:
        dist = binary(params[0], params[1])

    elif _distribution == distribution.GEOMETRIC.value[0]:
        dist = geometric(params[0])

    else:
        # LOS PARAMETROS DE ESCENARIO AHORA SON UNA LISTA DE LISTA DE DEMANDAS Y UNA LISTA DE PROBABILIDADES
        dist = scenarios(params[0], params[1])
    
    # se construye la lista de demandas si la distribucion no es por escenarios
    # en caso contrario se devuelve la lista de demandas seleccionada segun las probabilidades
    return [dist.get() for _ in range(N)] if not isinstance(dist,scenarios) else dist.get()
