import { EnvConfig } from "@/config/env.config"
import { MessageConstant } from "@/constants/message.constant"
import { IErrorResponse } from "@/types/response.type"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { AuthService } from "./auth/auth.service"

export const ApiService = axios.create({
    baseURL: EnvConfig.API_URL,
    withCredentials: true,
    timeout: 10000,
    timeoutErrorMessage: MessageConstant.SLOW_INTERNET,
})

// generate new tokens interceptor
ApiService.interceptors.response.use(
    (result) => result,
    async (error: AxiosError) => {
        let isRefreshing = false
        try {
            const originalRequest = error.config as { sent: true } & AxiosRequestConfig
            const response = error?.response as AxiosResponse<IErrorResponse, unknown>
            if (
                response?.status === 401 &&
                response?.data?.errorCode === "TOKEN_EXPIRED" &&
                !originalRequest.sent
            ) {
                originalRequest.sent = true
                if (!isRefreshing) {
                    isRefreshing = true
                    await AuthService.refreshToken()
                }
                // refresh done now do the request again
                return ApiService(originalRequest)
            }
            throw error
        } catch (error) {
            //  todo: handle logout here (check if its happening automatically or not?)
            console.log("HANDLE LOGOUT: => :: ", error as Error)
            throw error
        } finally {
            isRefreshing = false
        }
    }
)
