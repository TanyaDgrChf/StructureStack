import pygame
import random

# Constants
WIDTH = 800
HEIGHT = 600
BAR_WIDTH = 40
NUM_BARS = WIDTH // BAR_WIDTH
MAX_HEIGHT = HEIGHT - 50
BACKGROUND_COLOR = (30, 30, 30)
BAR_COLOR = (70, 130, 180)
RANGE_COLOR = (255, 165, 0)
SEARCH_COLOR = (255, 99, 71)

# Initialize Pygame
pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Binary Search Animation")

# Create a sorted array
arr = sorted([random.randint(10, MAX_HEIGHT) for _ in range(NUM_BARS)])

# Draw bars
def draw_bars(arr, range_indices=None, highlight_indices=None):
    screen.fill(BACKGROUND_COLOR)
    for i, height in enumerate(arr):
        color = (
            SEARCH_COLOR
            if highlight_indices and i in highlight_indices
            else RANGE_COLOR
            if range_indices and i in range_indices
            else BAR_COLOR
        )
        pygame.draw.rect(screen, color, (i * BAR_WIDTH, HEIGHT - height, BAR_WIDTH - 2, height))
    pygame.display.flip()

# Binary Search function with yields
def binary_search(arr, item):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        yield low, high, mid
        if arr[mid] < item:
            low = mid + 1
        elif arr[mid] > item:
            high = mid - 1
        else:
            break

# Control state: Wait for click
started = False
clock = pygame.time.Clock()

# Get the generator for the binary search
search_gen = binary_search(arr, random.choice(arr))

running = True
completed = False

# Main loop
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN and not started:
            started = True

    if started and not completed:
        try:
            low, high, mid = next(search_gen)
            draw_bars(arr, range_indices=range(low, high + 1), highlight_indices=[mid])
        except StopIteration:
            completed = True
            draw_bars(arr)

    clock.tick(1)

pygame.quit()
