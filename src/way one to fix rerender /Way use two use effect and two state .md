

// in this way we use 2 use effect with 2 use State to make state not to reneder ... best web performance  
// but the best way the new way which I will use it in this app 


import {React, useState,useEffect} from 'react'
import axios from 'axios';


export default function App() {


const [term,SetTerm] = useState('java')  
const [debounceSearch,SetdebounceSearch] = useState(term) 
const [result,SetReaslt] = useState([]) 



useEffect(() => { 
 const timeOut = setTimeout(() => {

  SetdebounceSearch(term)
  
 }, 1200); 

  return () => clearTimeout(timeOut)
    
}, [term])  

console.log('re-render');

useEffect(() => {

  const Search = async () => { 


    let params = {
      action : 'query',
      list : 'search',
      origin:'*',
      format:'json',
      srsearch : debounceSearch ,
    }

    const request =  await axios.get('https://en.wikipedia.org/w/api.php',{params} ) // { params : {}}  


    SetReaslt(request.data.query.search);

  };    

  if (term) {
    
        Search(); 
  }

  
},[debounceSearch]) 





//en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=
// url&utf8=&format=json&origin=&srlimit=20&srsearch=SEARCH_QUERY_GOES_HERE

// useEffect(() => {

//   const Search = async () => { 


//     let params = {
//       action : 'query',
//       list : 'search',
//       origin:'*',
//       format:'json',
//       srsearch : term ,
//     }

//     const request =  await axios.get('https://en.wikipedia.org/w/api.php',{params} ) // { params : {}} 

//     SetReaslt(request.data.query.search);
  
//   }  

//   if (term) {
    
//     Search(); 
//   }
// }, [term]) 


const fetchResult = result.map(el => (
  <tr key={el.pageid} >
  <th scope='row'>1</th>
  <td>{el.title}</td>
  <td> <span dangerouslySetInnerHTML={{__html: el.snippet}} /></td>   
  </tr>
)) 


  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='my-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Search Input
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1' 
              value={term} 
              onChange={(e) => SetTerm(e.target.value)}  
            />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Title</th>
                <th scope='col'>Desc</th>
              </tr>
            </thead>
            <tbody>
            {fetchResult}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}