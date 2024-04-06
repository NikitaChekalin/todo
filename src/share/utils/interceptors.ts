import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => config
const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
const onResponse = (response: AxiosResponse): AxiosResponse => response
const onResponseError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error)

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)

  return axiosInstance
}
