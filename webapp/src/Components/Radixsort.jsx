import React, { useRef } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

const Radixsort = () => {
    const navigate = useNavigate()
    
    const onSorting = () => {
        navigate('/sorting', {replace: true})
    }

    const aspectRatio = 40 / 9;

    const codeSnippet = `
    def counting_sort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        index = arr[i] // exp
        count[index % 10] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1
    while i >= 0:
        index = arr[i] // exp
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1

    i = 0
    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr):
    max_num = max(arr)
    exp = 1
    while max_num // exp > 0:
        counting_sort(arr, exp)
        exp *= 10

arr = [170, 45, 75, 90, 802, 24, 2, 66]
radix_sort(arr)
print(arr)
    `;

    const cRadix = `
    #include <iostream>

    // Function to find the maximum element in the array
    int getMax(int arr[], int n) {
        int max = arr[0];
        for (int i = 1; i < n; ++i) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    // Function to perform counting sort based on a particular digit
    void countingSort(int arr[], int n, int exp) {
        int output[n];
        int count[10] = {0};
    
        // Count the occurrences of each digit
        for (int i = 0; i < n; ++i) {
            count[(arr[i] / exp) % 10]++;
        }
    
        // Calculate cumulative count
        for (int i = 1; i < 10; ++i) {
            count[i] += count[i - 1];
        }
    
        // Build the output array
        for (int i = n - 1; i >= 0; --i) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }
    
        // Copy the output array to the original array
        for (int i = 0; i < n; ++i) {
            arr[i] = output[i];
        }
    }
    
    // Radix Sort function
    void radixSort(int arr[], int n) {
        int max = getMax(arr, n);
    
        // Perform counting sort for every digit
        for (int exp = 1; max / exp > 0; exp *= 10) {
            countingSort(arr, n, exp);
        }
    }
    `
    const codeRef = useRef(null);

    // Function to copy code snippet to clipboard
    const copyCodeToClipboard = () => {
        if (codeRef.current) {
            codeRef.current.select();
            document.execCommand('copy');
            // Deselect the text after copying
            window.getSelection().removeAllRanges();
        }
    };
    return(
        <div>
            <h3>Radix Sort</h3>
            <p id="rlist">1. Digits-Based Sorting​</p>
            <ul id="radlist">
                <li>Radix sort sorts the elements of an array based on their digits, from the least significant digit (rightmost) to the most significant digit (leftmost).</li>
                <li>It performs this sorting iteratively, starting from the least significant digit and moving towards the most significant digit.</li>
            </ul>
            <p id="rlist">2. Counting Sort for Each Digit</p>
            <ul id="radlist">
                <li>For each digit position (units, tens, hundreds, etc.), radix sort uses a stable sorting algorithm like counting sort to sort the elements based on that digit.</li>
                <li>Counting sort is applied to each digit position independently, creating a partially sorted array based on that digit.</li>
            </ul>
            <p id="rlist">3. Combine the sorted digits</p>
            <ul id="radlist">
                <li>After sorting the elements based on all digits (from least significant to most significant), the array becomes fully sorted..</li>
                <li>By performing sorting iteratively on each digit position, radix sort creates a sorted list by progressively sorting the elements based on their digits..</li>
            </ul>
            <h4>Python Implementation, Radix sort</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Radix Sort code</h4>
                        <button onClick={copyCodeToClipboard}>Copy</button>
                    </div>
                    <textarea
                        ref={codeRef}
                        style={{ position: 'absolute', left: '-9999px', top: '0', opacity: '0' }}
                        value={codeSnippet}
                        readOnly
                    />
                    <SyntaxHighlighter language="python" style={vscDarkPlus}>
                        {codeSnippet}
                    </SyntaxHighlighter>
                </div>
            </div>
            <h4 id="cpy">C++ Implementation, Radix sort</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Radix sort C++</h4>
                        <button onClick={copyCodeToClipboard}>Copy</button>
                    </div>
                    <textarea
                        ref={codeRef}
                        style={{ position: 'absolute', left: '-9999px', top: '0', opacity: '0' }}
                        value={codeSnippet}
                        readOnly
                    />
                    <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                        {cRadix}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div style={{ paddingTop: '60px' }}>
                <Button type="primary" onClick={onSorting}>Back to sorting</Button>
            </div>
        </div>
    )
}

export default Radixsort;