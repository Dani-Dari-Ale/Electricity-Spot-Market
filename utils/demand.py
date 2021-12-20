from enum import Enum
from random_variables import *
<<<<<<< HEAD
=======

>>>>>>> 4bed6e120b2c0a6bf5ed22b0ce6d4eb99163c7e8

class distribution(Enum):
    UNIFORM = 'uniform',
    EXP = 'exponential',
    GAMMA = 'gamma',
    NORMAL = 'normal',
    BINARY = 'binary',
    GEOMETRIC = 'geometric',
    ESCENARIES = 'escenaries'


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
        return escenaries(params[0], params[1]).get()

    demands = []
    for _ in range(N):
        demands.append(dist.get())
<<<<<<< HEAD
        
    return demands
=======

    return demands
>>>>>>> 4bed6e120b2c0a6bf5ed22b0ce6d4eb99163c7e8
