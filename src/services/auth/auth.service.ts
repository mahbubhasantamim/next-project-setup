import { IResponse } from "../../types/response.type"
import { ApiService } from "../api.service"
import { ICurrentUser, ITokens } from "./auth.dto"

export const AuthService = {
    refreshToken: async () => {
        const result = await ApiService.post<IResponse<ITokens>>("/v1/auth/token")
        return result.data.response
    },
    // get the user profile full details
    getLoggedInUser: async () => {
        const result = await ApiService.post<IResponse<ICurrentUser>>("/v1/user")
        return result.data.response
    },

    logoutUser: async () => {
        await ApiService.post("/v1/auth/logout")
    },
}
