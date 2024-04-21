import React, { useRef } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import videoSrc from '../assets/insertion_final.mp4'
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

const Insertionsort = () => {
    const navigate = useNavigate()
    
    const onSorting = () => {
        navigate('/sorting', {replace: true})
    }

    const aspectRatio = 40 / 9;

    const codeSnippet = `
    arr = [2,3,4,13,32,5,1,32,2,4,3,21,23]


    def insertion_sort(arr):
        l = len(arr)
        for i in range(1, l):
            temp = arr[i]
            j = i
            while j>0 and arr[j-1] > temp:
                arr[j] = arr[j-1]
                j -= 1
            arr[j] = temp
    `;

    const cInsert = `
    #include <iostream>

    void insertionSort(int arr[], int size) {
        for (int i = 1; i < size; ++i) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && key < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
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
            <h3>Insertion Sort</h3>
            <p id="ilist">1. Assume first element is sorted​</p>
            <p id="ilist">2. Each element in the unsorted region is inserted one at a time to its correct position within the sorted region</p>
            <p id="ilist">3. Process is repeated until all elements inserted into right place</p>
            <div className="video-container" style={{ paddingTop: `${100 / aspectRatio}%` }}>
                <video className="video-element" autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h4>Python Implementation, Insertion sort</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Insertion Sort Code</h4>
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
            <h4 id="cpy">C++ Implementation, Insertion sort</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Insertion Sort C++</h4>
                        <button onClick={copyCodeToClipboard}>Copy</button>
                    </div>
                    <textarea
                        ref={codeRef}
                        style={{ position: 'absolute', left: '-9999px', top: '0', opacity: '0' }}
                        value={cInsert}
                        readOnly
                    />
                    <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                        {cInsert}
                    </SyntaxHighlighter>
                </div>
            </div>

            <div style={{ paddingTop: '60px' }}>
                <Button type="primary" onClick={onSorting}>Back to sorting</Button>
            </div>
            
        </div>
    ) 
}

export default Insertionsort;