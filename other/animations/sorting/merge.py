import pygame
import random
import time

# Constants
WIDTH = 800
HEIGHT = 600
BAR_WIDTH = 40
NUM_BARS = WIDTH // BAR_WIDTH
MAX_HEIGHT = HEIGHT - 50
BACKGROUND_COLOR = (30, 30, 30)
BAR_COLOR = (70, 130, 180)
SWAP_COLOR = (255, 99, 71)

# Initialize Pygame
pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Insertion Sort Animation")
arr = [random.randint(10, MAX_HEIGHT) for _ in range(NUM_BARS)]

# Draw the bars
def draw_bars(arr, highlight_indices=None):
    screen.fill(BACKGROUND_COLOR)
    for i, height in enumerate(arr):
        color = SWAP_COLOR if highlight_indices and i in highlight_indices else BAR_COLOR
        pygame.draw.rect(screen, color, (i * BAR_WIDTH, HEIGHT - height, BAR_WIDTH - 2, height))
    pygame.display.flip()

# Merge Sort w/ yields
def merge(arr, left, mid, right):
    left_part = arr[left:mid+1]
    right_part = arr[mid+1:right+1]

    i, j, k = 0, 0, left
    while i < len(left_part) and j < len(right_part):
        if left_part[i] <= right_part[j]:
            arr[k] = left_part[i]
            i += 1
        else:
            arr[k] = right_part[j]
            j += 1
        k += 1
        yield arr, [k - 1]  # Highlight the merged index

    while i < len(left_part):
        arr[k] = left_part[i]
        i += 1
        k += 1
        yield arr, [k - 1]  # Highlight the merged index

    while j < len(right_part):
        arr[k] = right_part[j]
        j += 1
        k += 1
        yield arr, [k - 1]  # Highlight the merged index

# Merge Sort function that yields during merges
def merge_sort(arr, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    
    if left < right:
        mid = (left + right) // 2
        
        # Recursive calls to sort both halves
        yield from merge_sort(arr, left, mid)
        yield from merge_sort(arr, mid + 1, right)
        
        # Merge both halves
        yield from merge(arr, left, mid, right)

# Control state: Wait for click
started = False
clock = pygame.time.Clock()

sort_gen = merge_sort(arr)  # Initialize generator
running = True
completed = False  # Check sorting for done

# Main loop
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN and not started:
            started = True
        elif event.type == pygame.MOUSEBUTTONDOWN and completed:
            running = False

    if started and not completed:
        try:
            state = next(sort_gen)
            arr, highlight_indices = state
            draw_bars(arr, highlight_indices)
        except StopIteration:
            draw_bars(arr)
            completed = True
    clock.tick(5)  # Animation speed

pygame.quit()
