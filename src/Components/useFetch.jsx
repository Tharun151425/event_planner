import React from 'react'
import { useState, useEffect } from 'react'
import './useFetch.css'

const useFetch = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        fetch(`https://api.npoint.io/9045c260b1565daa9e15`).then(r => r.json()).then(d => setData(d));
        console.log(data);
    }, [])
    return (
        <div className="foods">
            <h1>FOOD ITEMS</h1>
            <div className="container">
                {data && data.map((e, index) =>
                (
                    <div className="element">
                        <h2 className="name">{e.name}</h2>
                        <img src={e.image} alt="" className="image" />
                        <div className="info">
                            <div className="section">
                                <h3 className="subheading">BENEFITS : </h3>
                                <p>{e.benefits}</p>
                            </div>
                            <div className="section">
                                <h3 className="subheading">IMPORTANCE : </h3>
                                <p>{e.importance}</p>
                            </div>
                            <div className="section">
                                <h3 className="subheading">BEST TIME TO INTAKE : </h3>
                                <p>{e.best_time_to_intake}</p>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default useFetch
