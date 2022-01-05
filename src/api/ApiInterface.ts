import { Time } from "@angular/common";

export type Loan = {
    id: number
    description: string
    loanType: string
    period: number
    downPaymentAmount: number
    loanAmount: number
    ownerId: number
}