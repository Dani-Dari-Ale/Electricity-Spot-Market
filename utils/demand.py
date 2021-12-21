from enum import Enum
from utils.random_variables import *

class distribution(Enum):
    UNIFORM = 'uniform',
    EXP = 'exponential',
    GAMMA = 'gamma',
    NORMAL = 'normal',
    BINARY = 'binary',
    GEOMETRIC = 'geometric',
    ESCENARIES = 'scenaries'


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
        dist = escenaries(params[0], params[1])

    demands = []
    for _ in range(N):
        demands.append(dist.get())

    return demands