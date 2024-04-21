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
PIVOT_COLOR = (255, 99, 71)
SWAP_COLOR = (255, 165, 0)

# Initialize Pygame
pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Insertion Sort Animation")
arr = [random.randint(10, MAX_HEIGHT) for _ in range(NUM_BARS)]

# Draw the bars
def draw_bars(arr, pivot_index=None, highlight_indices=None):
    screen.fill(BACKGROUND_COLOR)
    for i, height in enumerate(arr):
        if i == pivot_index:
            color = PIVOT_COLOR
        elif highlight_indices and i in highlight_indices:
            color = SWAP_COLOR
        else:
            color = BAR_COLOR
        pygame.draw.rect(screen, color, (i * BAR_WIDTH, HEIGHT - height, BAR_WIDTH - 2, height))
    pygame.display.flip()
# Quick Sort w/ yields
def quick_sort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pivot = arr[high]
        i = low - 1
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
                yield arr, high, [i, j]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        yield arr, high, [i + 1, high]
        pivot_index = i + 1

        # Recursive QuickSort
        yield from quick_sort(arr, low, pivot_index - 1)
        yield from quick_sort(arr, pivot_index + 1, high) 
# Control state: Wait for click
started = False
clock = pygame.time.Clock()

sort_gen = quick_sort(arr)  # Initialize generator
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
            arr, pivot_index, highlight_indices = state
            draw_bars(arr, pivot_index, highlight_indices)
        except StopIteration:
            draw_bars(arr)
            completed = True

    clock.tick(5)  # Animation speed

pygame.quit()
