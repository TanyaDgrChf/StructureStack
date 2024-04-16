def bubble(arr):
    l = len(arr)
    for i in range(0, l-1):
        swapped = False
        for j in range(0, l-1-i):
            if arr[j] > arr[j+1]:
                swapped = True
                arr[j], arr[j+1] = arr[j+1], arr[j]
        if swapped == False:
            break


arr = [2,3,4,13,32,5,1,32,2,4,3,21,23]
bubble(arr)
print(arr)

