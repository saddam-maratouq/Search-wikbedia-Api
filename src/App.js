
import {React, useState,useEffect,useRef} from 'react'
import axios from 'axios';
import usePrevState from './hocks/usePrevState'


export default function App() {


const [term,SetTerm] = useState('java')  
const [result,SetReaslt] = useState([])  
const prevtermState  = usePrevState(term)  




// console.log('re-render');

useEffect(() => {

  const Search = async () => { 


    let params = {
      action : 'query',
      list : 'search',
      origin:'*',
      format:'json',
      srsearch : term ,
    }

    const request =  await axios.get('https://en.wikipedia.org/w/api.php',{params} ) // { params : {}}  


    SetReaslt(request.data.query.search);

  };     

  if (!result.length) {
    
    if (term) {
    
      Search(); 
    } 
  }

  else if (prevtermState !== term ) {

    const timeSearch = setTimeout(() => {
      
      if (term) {
    
      Search(); 
    } 

    }, 1000);

    return () => { clearTimeout(timeSearch) }
  }
  

 

  
},[term,result.length,prevtermState]) 





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