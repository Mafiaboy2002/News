
import React,{useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data,setData] = useState([]);
  const getNews =()=>{
   axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=deedc72c5a484428baad5763cdf70054")
   .then((response)=>{
  //  console.log(response);
   setData(response.data.articles)
   })
  }
  return (
    <>
    <div class="header" >
  <h1 style={{color:'#fff',paddingLeft:'3rem'}}>News</h1>
  </div>
    <div className="container my-3">
      <button className='btn btn-secondary' onClick={getNews}>Get News</button>
    </div>

    <div className="container">
      <div className="row">
        {
          data.map((value)=>{
            return(
              <div className="col">
              <div className="card" style={{width: '18rem'}}>
              <img src={value.urlToImage} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">{value.description}</p>
                <a href="#" className="btn btn-secondary">See More</a>
              </div>
            </div>
            </div>
            );
          })

          
        }
      </div>
    </div>
    </>
  );
}

export default App;
