import './App.css';
import Header from './Header'
import Footer from './Footer'
import { useState, useEffect } from 'react';
import Options from './Options';
import Output from './Output';

function App() {

  const[paragraphs , setParagraphs] = useState([]);
    const[tag , setTag] = useState('p');
    const[inputValue , setInputValue] = useState(1);
    const[includeHTML , setIncludeHTML] = useState("Yes");
    
    useEffect(() => {
        const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;
        const getData = async() => {
          const result = await fetch(url);
          const resultfinal = await result.json();
          setParagraphs(resultfinal);
        }  
        getData();
      },[inputValue])

  return (
    <div className="App">
        <Header />
        <Options 
          paragraphs={paragraphs}
          includeHTML={includeHTML}
          setIncludeHTML={setIncludeHTML}
          inputValue={inputValue}
          setInputValue={setInputValue}
          tag={tag}
          setTag={setTag}
        />
        <Output 
          paragraphs={paragraphs}
          includeHTML={includeHTML}
          tag={tag}
        />
        <Footer />
    </div>
  );
}

export default App;
