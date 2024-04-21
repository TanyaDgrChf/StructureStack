import React, { useRef } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import videoSrc from '../assets/bubble_final2.mp4'
import '../../src/VideoComponent.css'; 
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

const Bubblesort = () => {
    const navigate = useNavigate()
    
    const onSorting = () => {
        navigate('/sorting', {replace: true})
    }

    const aspectRatio = 40 / 9;

    const codeSnippet = `
def bubble(arr):
    l = len(arr)
    for i in range(0, l-1):
        swapped = False
        for j in range(0, l-1-i):
            if arr[j] > arr[j+1]:
                swapped = True
                arr[j], arr[j+1] = arr[j+1], arr[j]
        if not swapped:
            break

arr = [2,3,4,13,32,5,1,32,2,4,3,21,23]
bubble(arr)
print(arr)
    `;
    const cBubble = `
    #include <iostream>
    // To sort arr in increasing order
void bubbleSort(int arr[], int size) {
    int i, limit, temp;

    for (limit = size - 2; limit >= 0; limit--) {
        // limit is where the inner loop variable i should end

        for (i = 0; i <= limit; i++) {
            if (arr[i] > arr[i + 1]) { // swap arr[i] with arr[i+1]
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}
`
        // Ref for the code snippet textarea
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
            <h3>Bubble Sort optimised</h3>
            <p id="blist">1. Compare pairs of elements adjacent to each other​</p>
            <p id="blist">2. If a pair is in the wrong order, swap them</p>
            <p id="blist">3. Process is repeated until no swaps are made in a single pass through all pairs in the array</p>
            <div className="video-container" style={{ paddingTop: `${100 / aspectRatio}%` }}>
                <video className="video-element" autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h4>Python Implementation, Bubble sort optimised</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Bubble Sort Code</h4>
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

            <h4 id="cpy">C++ Implementation, Bubble sort optimised</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Bubble Sort C++</h4>
                        <button onClick={copyCodeToClipboard}>Copy</button>
                    </div>
                    <textarea
                        ref={codeRef}
                        style={{ position: 'absolute', left: '-9999px', top: '0', opacity: '0' }}
                        value={codeSnippet}
                        readOnly
                    />
                    <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                        {cBubble}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div style={{ paddingTop: '60px' }}>
                <Button type="primary" onClick={onSorting}>Back to sorting</Button>
            </div>
        </div>
    )
}

export default Bubblesort;