import React from "react";

const useAppWrite = (fn) => {
    const [data,setData] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(true);
  
    React.useEffect(()=>{
      const fetchData = async() => {
        setIsLoading(true);
        try {
          const res = await fn();
          setData(res)
        } catch (error) {
          Alert.alert("error", error.message)
        }finally{
          setIsLoading(false)
        }
      }
      fetchData()
    },[]);

    const refetch = () => fetchData();
  
    return { data,isLoading,refetch }
}
export default useAppWrite