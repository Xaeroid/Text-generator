import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Options = (props) => {

  return (
    <div className='options'>
        <div className='paragraphs'>
            <p>Paragraphs: </p>
            <input type="number" min="1" max="15" value={props.inputValue}
                onChange={(e) => props.setInputValue(e.target.value)}
            />
        </div>
        <div className='tags'>
            <p>Tags: </p>
            <select defaultValue={props.tag} onChange={(e) => props.setTag(e.target.value)}>
                <option value="p">&lt;p&gt;</option>
                <option value="h1">&lt;h1&gt;</option>
                <option value="h2">&lt;h2&gt;</option>
                <option value="h3">&lt;h3&gt;</option>
                <option value="h4">&lt;h4&gt;</option>
                <option value="h5">&lt;h5&gt;</option>
                <option value="h6">&lt;h6&gt;</option>
                <option value="span">&lt;span&gt;</option>
            </select>
        </div>
        <div className='include'>
            <p>Include HTML</p>
            <select defaultValue={props.includeHTML}
                onChange={(e) => props.setIncludeHTML(e.target.value)}
            >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
        </div>
        <div className='copy'>
            <CopyToClipboard
                text={props.paragraphs.map((sentence) => props.includeHTML === "Yes" ? `<${props.tag}>${sentence}</${props.tag}>` : sentence)}
            >
                <button className='copy-to-clipboard'onClick={() => {alert("Copied to Clipboard")}}>Copy to clipboard</button>
    
            </CopyToClipboard>
            
        </div>
    </div>
  )
}

export default Options
