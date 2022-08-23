import { useState, useCallback, useEffect } from "react";

//uswQuery immidiate imvoke the api
export const useQuery = (fetchAction, { onSuccess, onError, wait, refetchInterval } = {}) => {
  const [dataState, setDataState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetch, setIsRefetch] = useState(false);
  const [isSilenceLoading, setIsSilenceLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);


  const fetchActionData = useCallback(async () => {

    const { data } = await fetchAction();

    if (onSuccess) {
      onSuccess(data);
    }

    setDataState(data);
    setIsSuccess(true);

  }, []);

  const fetchData = useCallback(async (isSilence) => {
    try {
      setIsLoading(!isSilence);
      setIsSilenceLoading(isSilence);
      setIsSuccess(false);

      await fetchActionData();

    } catch (error) {
      //TODO make the error more generic with error builder
      setError(error);
    }

  }, []);

  //We can use fetchData(true), but this is more clean
  const silenceFetchData = useCallback(() => fetchData(true), []);

  const handleRefresh = useCallback(async ({ isSilence } = {}) => {
    setIsRefetch(true);
    await fetchData(isSilence);
    setIsRefetch(false);
  }, []);

  //Query will be called in non silence mode for the first time
  useEffect(() => {
    if (!wait) {
      fetchData();
    }
  }, [wait]);

  //Polling
  useEffect(() => {
    if (refetchInterval) {
      const interval = setInterval(() => {
        silenceFetchData();
      }, refetchInterval);

      return () => clearInterval(interval);
    }
  }, [refetchInterval]);

  return {
    isLoading, isRefetch,
    isSilenceLoading,
    isSuccess,
    error,
    handleRefresh,
    data: dataState,
    setData: setDataState,
  }
}
