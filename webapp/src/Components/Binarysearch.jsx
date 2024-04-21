import React, { useRef } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import videoSrc from '../assets/binarysearch_final.mp4';

const Binarysearch = () => {
    const navigate = useNavigate()
    
    const onSearch = () => {
        navigate('/searching', {replace: true})
    }
    const aspectRatio = 40 / 9;

    const codeSnippet = `
    def binary_search(array, value):
    low = 0
    high = len(array) - 1
    while low <= high:
      mid = (low+high) // 2
      if array[mid] == value:
        return True
      elif array[mid] < value:
        low = mid + 1
      else:
        high = mid - 1
    return False
  
  print(binary_search([1,3,4,7,2],11))
  print(binary_search([1,3,4,7,2],1))
    `;

    const cBinary = `
    #include <iostream>

bool binarySearch(int arr[], int size, int target) {
  int left = 0;
  int right = size - 1;

  while (left <= right) {
    // Calculate the middle index without overflow
    int mid = left + (right - left) / 2;

    // Check if target is found
    if (arr[mid] == target) {
      return true;
    } else if (arr[mid] < target) {
      // Search in the right half
      left = mid + 1;
    } else {
      // Search in the left half
      right = mid - 1;
    }
  }

  // Target not found
  return false;
}`

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
        <h3>Binary search</h3>
        <p id="slist">Only for sorted data</p>
        <ul id="radlist">
            <li>Assuming array sorted in ascending order</li>
            <li>Use length of array to be searched to find middle item</li>
            <li>Check if search target is larger or smaller, or equal to the middle item</li>
            <li>If equal, the search target is found</li>
            <li>If larger, repeat the comparing with middle item with the half of the list after the middle</li>
            <li>If smaller, repeat the comparing with middle item with the half of the list before the middle</li>
            <li>Repeat until either:</li>
            <li>search target is equal to middle item, which means found, or​ there are no more elements in the region of the array to be searched, which means not found</li>
        </ul>

        <div className="video-container" style={{ paddingTop: `${100 / aspectRatio}%` }}>
                <video className="video-element" autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>

        <h4>Python Implementation, Binary search , iterative</h4>
        <div style={{ paddingLeft: '50px' }}>
            <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <h4 style={{ margin: 0 }}>Binary search code</h4>
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

        <h4 id="cpy">C++ Implementation, Binary search, iterative</h4>
        <div style={{ paddingLeft: '50px' }}>
            <div style={{ width: '600px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <h4 style={{ margin: 0 }}>Binary search C++</h4>
                    <button onClick={copyCodeToClipboard}>Copy</button>
                </div>
                <textarea
                    ref={codeRef}
                    style={{ position: 'absolute', left: '-9999px', top: '0', opacity: '0' }}
                    value={codeSnippet}
                    readOnly
                />
                <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                    {cBinary}
                </SyntaxHighlighter>
            </div>
        </div>

        <div style={{ paddingTop: '60px' }}>
            <Button type="primary" onClick={onSearch}>Back to searching</Button>
        </div>
    </div>
    )
}

export default Binarysearch;