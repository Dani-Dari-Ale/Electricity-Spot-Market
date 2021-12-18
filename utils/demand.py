from enum import Enum
from utils.random_variables import *

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
    if _distribution == distribution.UNIFORM:
        dist = uniform(params[0], params[1])

    elif _distribution == distribution.EXP:
        dist = exponential(params[0])

    elif _distribution == distribution.GAMMA:
        dist = gamma(params[0], params[1])

    elif _distribution == distribution.NORMAL:
        dist = normal(params[0], params[1])

    elif _distribution == distribution.BINARY:
        dist = binary(params[0], params[1])

    elif _distribution == distribution.GEOMETRIC:
        dist = geometric(params[0])

    else:
        return escenaries(params[0],params[1]).get()
    
    demands = []
    for _ in range(N):
        demands.append(dist.get())
        
    return demands

