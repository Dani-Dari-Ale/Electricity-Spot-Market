import random as r
import math

# continuas
def uniform(a,b):
    U = r.random()
    return (b-a)*U + a


def exponential(_lambda):
    U = r.random()
    return -(1/_lambda)*math.log(U)


def gamma(n,_lambda):
    Un = math.prod([r.random() for _ in range(n)])
    return -(1/_lambda)*math.log(Un)


def normal(miu, o_2):
    while True:
        Y = exponential(1)
        U = r.random()
        if U <= math.exp((-1/2)*(Y-1)**2): break
    
    U = r.random()
    Z = Y if U < 0.5 else -Y

    # Z = (X - miu)/o ~ N(0,1) => X = Zo + miu ~ N(miu,o^2)
    return Z*math.sqrt(o_2) + miu


# discretas
def Bin(n,p):
    X = 0
    for _ in range(n):
        U = r.random()
        if U <= p:
            X += 1
        else: X += 0
    return X

def Geo(p):
    U = r.random()
    return math.ceil(math.ln(U) / math.ln(1-p))


# por escenarios
def escenaries(probabilities, demands):
    def order(p,d):
        for i in range(len(p)):
            for j in range(i+1,len(p)):
                if p[i] > p[j]:
                    p[i],p[j] = p[j],p[i]
                    d[i],d[j] = d[j],d[i]

    order(probabilities, demands)

    u = r.random()
    sum_p, i = 0, len(probabilities)

    # recorre el array en reverso, comenzado con la
    # probabilidad mayor
    while i >= 0:
        i -= 1
        sum_p += probabilities[i]
        if u <= sum_p:
            return demands[i]
    
escenaries ([0.3, 0.2, 0.5, 0.1],[0,1,2,3])
