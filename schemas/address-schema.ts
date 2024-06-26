import { z } from "zod"

export const addressSchema = z.object({
    id: z.string().min(2, {
        message: "Id must be at least 2 characters.",
    }),
    firstname: z.string().min(2, {
        message: "Firstname must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
        message: "Surname must be at least 2 characters.",
    }),
    mobile: z.string().min(2, {
        message: "Mobile number must be at least 2 characters.",
    }),
    address: z.string().min(2, {
        message: "Address must be at least 2 characters.",
    }),
    district: z.string().min(2, {
        message: "District must be at least 2 characters.",
    }),
    postcode: z.string().min(2, {
        message: "Postcode number must be at least 2 characters.",
    }),
})