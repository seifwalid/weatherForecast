import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const AirQuality = () => {
  const [data, setData] = useState({}); // Use an empty object as default
  const url = `http://localhost:5071/api/air`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="HomeContainer">
            {data ? (
              <div>
                <h2>Current Air Quality Data</h2>
                
                <div className="groupContainer">
                  <div className="miniContainer">
                  <div className="feels">
                        <p className="bold">{data.current?.pm10} μg/m³</p>
                      <p>PM10</p>
                    </div> 
                    </div>
                    <div className="miniContainer">
                      <div className="feels">
                            <p className="bold">{data.current?.pm2_5} μg/m³</p>
                          <p>PM2.5</p>
                        </div> 
                    </div>
                    <div className="miniContainer">
                      <div className="feels">
                            <p className="bold">{data.current?.carbon_monoxide} μg/m³</p>
                          <p>Carbon Monoxide</p>
                        </div> 
                    </div>
                </div>
                <div className="groupContainer">
                  <div className="miniContainer">
                  <div className="feels">
                        <p className="bold">{data.current?.nitrogen_dioxide} μg/m³</p>
                      <p>Nitrogen Dioxide</p>
                    </div> 
                </div>
                <div className="miniContainer">
                  <div className="feels">
                        <p className="bold">{data.current?.sulphur_dioxide} μg/m³</p>
                      <p>Sulphur Dioxide</p>
                    </div> 
                </div>
                <div className="miniContainer">
                  <div className="feels">
                        <p className="bold">{data.current?.ozone} μg/m³</p>
                      <p>Ozone</p>
                    </div> 
                </div>
                </div>
                
              </div>
            ) : null}
          </div>
    </div>
    
  );
};

export default AirQuality;
