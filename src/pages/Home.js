import React, { useState, useEffect} from 'react'
import fireDb from "../firebase";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

  const [data, setData] = useState({});

  useEffect(()=>{
    fireDb.child("contacts").on("value", (snapshot)=>{
      if(snapshot.val() !== null){
        setData({...snapshot.val()});
      }else{
        setData({});
      }
    });

    return () => {
      setData({});
    }
  }, []);

  return (
    <div style={{ marginTop: "100px"}}>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center"}}>No.</th>
              <th style={{ textAlign: "center"}}>Name</th>
              <th style={{ textAlign: "center"}}>Email</th>
              <th style={{ textAlign: "center"}}>Contact</th>
              <th style={{ textAlign: "center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((id,index)=>{
              return(
                <tr key={id}>
                  <th scope="row">{ index + 1}</th>                  
                  <th>{data[id].name}</th>                  
                  <th>{data[id].email}</th>                  
                  <th>{data[id].contact}</th>                  
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Home