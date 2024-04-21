import React, { useRef } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import videoSrc from '../assets/linearsearch_final.mp4';

const Linearsearch = () => {
    const navigate = useNavigate()
    
    const onSearch = () => {
        navigate('/searching', {replace: true})
    }
    const aspectRatio = 40 / 9;

    const codeSnippet = `
    def linear_search(array, value):
    for i in range(len(array)):
      if array[i] == value:
        print(f'Value found in array at index {i+1}')
    if value not in array:
      print(-1)
  
  linear_search([1,3,4,7,2],11)
  linear_search([1,3,4,7,2],1)
    `;

    const cLinear = `
    #include <iostream>
    // To search for key in arr using linear search
    // Return index if found; otherwise return -1
    int linearSearch(int arr[], int size, int key) {
        int i;
    
        for (i=0; i<size; i++)
            if (key == arr[i])
                return i;
        return -1;    
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
            <h3>Linear Search / Sequential Search</h3>
            <p id="slist">For unsorted data</p>
            <ul id="radlist">
                <li>Start from the first item of the array</li>
                <li>If the item is equal to the search target, the search target is found</li>
                <li>Otherwise, proceed to next item</li>
                <li>Repeat comparing and moving to next element until either</li>
                <li>search target is found, or​ last item is searched, which means search target is not found</li>
            </ul>

            <div className="video-container" style={{ paddingTop: `${100 / aspectRatio}%` }}>
                <video className="video-element" autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <h4>Python Implementation, Linear search, iterative</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Linear search code</h4>
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

            <h4 id="cpy">C++ Implementation, Linear search, iterative</h4>
            <div style={{ paddingLeft: '50px' }}>
                <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <h4 style={{ margin: 0 }}>Linear search C++</h4>
                        <button onClick={copyCodeToClipboard}>Copy</button>
                    </div>
                    <textarea
                        ref={codeRef}
                        style={{ position: 'absolute', left: '-9999px', top: '0', opacity: '0' }}
                        value={codeSnippet}
                        readOnly
                    />
                    <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                        {cLinear}
                    </SyntaxHighlighter>
                </div>
            </div>

            <div style={{ paddingTop: '60px' }}>
                <Button type="primary" onClick={onSearch}>Back to searching</Button>
            </div>
        </div>
    )
}

export default Linearsearch;