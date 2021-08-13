//jshint esversion: 8
import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw Error("The url is not able to fetch data");
                })
                .then((data) => {
                    console.log(data);
                    setData(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setIsLoading(false);
                    setError(error.msg);
                });
        }, 1000);
    }, [url]);

    return {
        data,
        isLoading,
        error,
    };
}

export default useFetch;
