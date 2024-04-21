import React, { useRef } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from "react-router-dom";
import videoSrc from '../assets/mergesort_final.mp4';
import { Button } from 'antd';

const Mergesort = () => {
    const navigate = useNavigate()
    
    const onSorting = () => {
        navigate('/sorting', {replace: true})
    }

    const aspectRatio = 40 / 9;

    const codeSnippet = `
    def merge(arr):
    n = len(arr)
    if n<2:
        return arr
    left = merge(arr[0:n//2])
    right = merge(arr[n//2:])

    return combine(left, right)

def combine(left, right):
    merged = []
    while len(left)>0 and len(right)>0:
        if left[0] > right[0]:
            merged.append(right[0])
            right.pop(0)
        else:
            merged.append(left[0])
            left.pop(0)
    for item in left:
        merged.append(item)
    for item in right:
        merged.append(item)
    return merged

arr = [2,3,4,13,32,5,1,32,2,4,3,21,23]
print(merge(arr))
    `;

    const cMerge = `
    #include <iostream>

    // Merge two subarrays of arr[]
    // First subarray is arr[l..m]
    // Second subarray is arr[m+1..r]
    void merge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;
    
        // Create temporary arrays
        int L[n1], R[n2];
    
        // Copy data to temporary arrays L[] and R[]
        for (int i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
    
        // Merge the temporary arrays back into arr[l..r]
        int i = 0; // Initial index of first subarray
        int j = 0; // Initial index of second subarray
        int k = l; // Initial index of merged subarray
    
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
    
        // Copy the remaining elements of L[], if any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
    
        // Copy the remaining elements of R[], if any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    
    // l is for left index and r is for right index of the sub-array of arr to be sorted
    void mergeSort(int arr[], int l, int r) {
        if (l < r) {
            // Same as (l+r)/2, but avoids overflow for large l and h
            int m = l + (r - l) / 2;
    
            // Sort first and second halves
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
    
            // Merge the sorted halves
            merge(arr, l, m, r);
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
            <h3>Merge Sort</h3>
            <p id="mlist">1. Find the middle point to divide the array into 2 halves​</p>
            <p id="mlist">2. Recursively perform same algorithm as (1.) on first half and second half.</p>
            <p id="mlist">3. Merge the two halves sorted into one single sorted array.</p>
            <div className="video-container" style={{ paddingTop: `${100 / aspectRatio}%` }}>
                <video className="video-element" autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h4>Python Implementation, Merge sort</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Merge Sort code</h4>
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

            <h4 id="cpy">C++ Implementation, Merge sort</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Merge sort C++</h4>
                        <button onClick={copyCodeToClipboard}>Copy</button>
                    </div>
                    <textarea
                        ref={codeRef}
                        style={{ position: 'absolute', left: '-9999px', top: '0', opacity: '0' }}
                        value={codeSnippet}
                        readOnly
                    />
                    <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                        {cMerge}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div style={{ paddingTop: '60px' }}>
                <Button type="primary" onClick={onSorting}>Back to sorting</Button>
            </div>
        </div>
    )
}

export default Mergesort;