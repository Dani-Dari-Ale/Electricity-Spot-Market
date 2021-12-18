from utils.solveModel import solveModel

# entrada 
N = 4
L = [
    [-1,  0,  0,-1],
    [-1, -1, -1, 0],
    [-1, -1, -1, 0],
    [-1, -1, -1,-1]
    ]

a = [1,4,4,4]
b = [1,4,4,4]

D = [0,0,0,1]






if __name__ == "__main__":
    solveModel(N,L,a,b,D)