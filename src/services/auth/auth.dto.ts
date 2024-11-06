import { DateString } from "@/types/common.type"

// * Response Object
export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface ICurrentUser {
    id: string
    avatar: string
    code: string
    createdAt: DateString
    deletedAt: DateString
    email: string
    fullName: string
    gender: string
    isApproved: boolean
    isEmailVerified: boolean
    lastLoggedIn: DateString
    phone: string
    type: string
    updatedAt: DateString
    userId: string
    title: string
    bio: string
    photo: string
    address: string
    dob: string
    city: string
    state: string
    zip: string
    educations: string
    skills: string
    languages: string
    paymentMethod: string
    profileVisibility: boolean
}
