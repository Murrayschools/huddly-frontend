import { useEffect, useState } from "react";

function CameraChartData(props) {
    const [response, setResponse] = useState( {connectedToServer: false} );

    useEffect(() => {
      props.socket.on('FromAPI', (data) => {
        try {
          let parsedData = JSON.parse(data);
          setResponse( parsedData );
        } catch (error) {
          console.log(error)
        }
        
      });

      props.socket.on('connect_error', () => {
        setResponse( {connectedToServer: false} )
      });
    }, [props.socket, response])

    return (
      <>
        <p className="footer-text">
            {Object.entries(response).map(([key, val]) => {
              return (
                `| ${key}: ${val} | `
              );
            })}
        </p>
      </>
    );
}

export default CameraChartData;