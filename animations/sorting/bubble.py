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

# Bubble Sort w/ yields
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(1, n - i):
            if arr[j - 1] > arr[j]:
                arr[j - 1], arr[j] = arr[j], arr[j - 1]
                yield j - 1, j

# Control state: Wait for click
started = False
clock = pygame.time.Clock()

sort_gen = bubble_sort(arr)  # Initialize generator
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
            highlight_index = next(sort_gen)
            draw_bars(arr, highlight_indices=highlight_index)
        except StopIteration:
            draw_bars(arr)
            completed = True

    clock.tick(5)  # Animation speed

pygame.quit()
