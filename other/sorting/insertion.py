arr = [2,3,4,13,32,5,1,32,2,4,3,21,23]


def insertion_sort(arr):
    l = len(arr)
    for i in range(1, l):
        temp = arr[i]
        j = i
        while j>0 and arr[j-1] > temp:
            arr[j] = arr[j-1]
            j -= 1
        arr[j] = temp

