import React, { useRef } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import videoSrc from '../assets/quicksort_final.mp4'
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

const Quicksort = () => {
    const navigate = useNavigate()
    
    const onSorting = () => {
        navigate('/sorting', {replace: true})
    }

    const aspectRatio = 40 / 9;

    const codeSnippet = `
    def quick(arr):
    l = len(arr)
    if l<=1:
        return arr
    else:
        less = []
        more = []
        equal = []
        pivot = arr[0]
        for item in arr:
            if item<pivot:
                less.append(item)
            elif item>pivot:
                more.append(item)
            else:
                equal.append(item)
        arr = quick(less) + equal + quick(more)
        return arr

arr = [2,3,4,13,32,5,1,32,2,4,3,21,23]
print(quick(arr))
    `;

    const cQuick = `
    #include <iostream>

    // Function to partition the array and return the pivot index
    int partition(int arr[], int low, int high) {
        int pivot = arr[high]; // Choosing the last element as the pivot
        int i = low - 1; // Index of the smaller element
    
        for (int j = low; j <= high - 1; j++) {
            // If current element is smaller than the pivot
            if (arr[j] < pivot) {
                i++; // Increment index of smaller element
                std::swap(arr[i], arr[j]);
            }
        }
        std::swap(arr[i + 1], arr[high]);
        return i + 1;
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
            <h3>Quick Sort</h3>
            <p id="qlist">1. Pick an element as pivot. The partition array around picked pivot.​</p>
            <p id="qlist">2. Elements smaller than pivot shifted to left of pivot and elements larger than shifted to right.</p>
            <p id="qlist">3. After partioning around each pivot, recursively perform the same alorithm on the elements smaller than original pivot and element larger than the pivot.</p>
            <div className="video-container" style={{ paddingTop: `${100 / aspectRatio}%` }}>
                <video className="video-element" autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h4>Python Implementation, Quick sort</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Quick Sort code</h4>
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

            <h4 id="cpy">C++ Implementation, Quick sort</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Quick sort C++</h4>
                        <button onClick={copyCodeToClipboard}>Copy</button>
                    </div>
                    <textarea
                        ref={codeRef}
                        style={{ position: 'absolute', left: '-9999px', top: '0', opacity: '0' }}
                        value={codeSnippet}
                        readOnly
                    />
                    <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                        {cQuick}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div style={{ paddingTop: '60px' }}>
                <Button type="primary" onClick={onSorting}>Back to sorting</Button>
            </div>
        </div>
    )
}

export default Quicksort;