export const UserRoleEnum = {
    ADMIN: "admin",
    USER: "user",
}

export const AvailableRoles = Object.values(UserRoleEnum)

export const OrderStatusEnum = {
    PENDING: 'pending',
    PAID: 'paid',
    CANCELLED: 'cancelled',
    SHIPPED: 'shipped'
}

export const AvailableOrderStatus = Object.values(OrderStatusEnum)

export const PaymentStatusEnum = {
    CREATED: 'created',
    SUCCESSFUL: 'successful',
    FAILED: 'failed',
    REFUNDED: 'refunded'
}

export const AvailablePaymentStatus = Object.values(PaymentStatusEnum)

// Payments currency ENUM
export const PaymentCurrencyEnum = {
    INR: 'INR'
}
export const AvailablePaymentCurrency = Object.values(PaymentCurrencyEnum)