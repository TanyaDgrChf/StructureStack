import React, { useRef } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import videoSrc from "../assets/selectionsort_final.mp4";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';


const Selectionsort = () => {
    const navigate = useNavigate()
    
    const onSorting = () => {
        navigate('/sorting', {replace: true})
    }

    const aspectRatio = 40 / 9;

    const codeSnippet = `
    def selection(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i+1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]

        
arr = [64, 25, 12, 22, 11]
selection(arr)
print("Sorted array is:", arr)
    `;

    const cSelection = `
    #include <iostream>

    // To sort arr in increasing order
void selectionSort(int arr[], int size) {
	int i, start, min_index, temp;

	for (start = 0; start < size-1; start++) {
		// each iteration of the for loop is one pass

		// find the index of minimum element 
		min_index = start;
		for (i = start+1; i < size; i++)
			if (arr[i] < arr[min_index]) 
				min_index = i;

		// swap minimum element with element at start index
		temp = arr[start];
		arr[start] = arr[min_index];
		arr[min_index] = temp;
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
            <h3>Selection Sort</h3>
            <p id="slist">1. Divides the input array into two subarrays: sorted and unsorted.​</p>
            <p id="slist">2. It repeatedly selects the minimum (or maximum) element from the unsorted subarray</p>
            <p id="slist">3. Swaps the min or max with the first unsorted element</p>
            <div className="video-container" style={{ paddingTop: `${100 / aspectRatio}%` }}>
                <video className="video-element" autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h4>Python Implementation, Selection sort</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Selection Sort code</h4>
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

            <h4 id="cpy">C++ Implementation, Selection sort</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Selection sort C++</h4>
                        <button onClick={copyCodeToClipboard}>Copy</button>
                    </div>
                    <textarea
                        ref={codeRef}
                        style={{ position: 'absolute', left: '-9999px', top: '0', opacity: '0' }}
                        value={codeSnippet}
                        readOnly
                    />
                    <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                        {cSelection}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div style={{ paddingTop: '60px' }}>
                <Button type="primary" onClick={onSorting}>Back to sorting</Button>
            </div>
        </div>
    
    )
}

export default Selectionsort;