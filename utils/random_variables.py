import random as r
import math

# continuas


class uniform:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def get(self):
        U = r.random()
        return (self.b-self.a)*U + self.a


class exponential:
    def __init__(self, _lambda):
        self._lambda = _lambda

    def get(self):
        U = r.random()
        return -(1/self._lambda)*math.log(U)


class gamma:
    def __init__(self, n, _lambda):
        self.n = n
        self._lambda = _lambda

    def get(self):
        Un = math.prod([r.random() for _ in range(int(self.n))])
        return -(1/self._lambda)*math.log(Un)


class normal:
    def __init__(self, mu, o_2):
        self.mu = mu
        self.o_2 = o_2

    def get(self):
        exp = exponential(1)
        while True:
            Y = exp.get()
            U = r.random()
            if U <= math.exp((-1/2)*(Y-1)**2):
                break

        U = r.random()
        Z = Y if U < 0.5 else -Y

        # Z = (X - miu)/o ~ N(0,1) => X = Zo + miu ~ N(miu,o^2)
        return Z*math.sqrt(self.o_2) + self.mu


# discretas
class binary:
    def __init__(self, n, p):
        self.n = n
        self.p = p

    def get(self):
        X = 0
        for _ in range(int(self.n)):
            U = r.random()
            if U <= self.p:
                X += 1
            else:
                X += 0
        return X


class geometric:
    def __init__(self, p):
        self.p = p

    def get(self):
        U = r.random()
        return math.ceil(math.log(U) / math.log(1-self.p))


# por escenarios
class escenaries:
    def __init__(self, demands, probs):
        self.probabilities = probs
        self.demands = demands
        self.order()

    def order(self):
        for i in range(len(self.probabilities)):
            for j in range(i+1, len(self.probabilities)):
                if self.probabilities[i] > self.probabilities[j]:
                    self.probabilities[i], self.probabilities[j] = self.probabilities[j], self.probabilities[i]
                    self.demands[i], self.demands[j] = self.demands[j], self.demands[i]

    def get(self):
        u = r.random()
        sum_p, i = 0, len(self.probabilities)

        # recorre el array en reverso, comenzado con la
        # probabilidad mayor
        while i >= 0:
            i -= 1
            sum_p += self.probabilities[i]
            if u <= sum_p:
                return self.demands[i]
