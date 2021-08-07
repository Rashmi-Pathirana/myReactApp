import {useEffect, useState } from 'react'

function useFetch(url) {

    const [data, setData] = useState();

    useEffect(() => {
        fetch(url)
        .then((res)=>{
          if(!res.ok){
            throw Error('data not found');
          }else{
            return res.json();
          }
        })
        .then((data)=>{
          setData(data);
        })
        .catch((err)=> console.log(err.message));
  
    }, [url]);

   
    return ( {data} );

}
export default useFetch;
