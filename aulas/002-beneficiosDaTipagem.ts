type User = {
    firstName: string
    lastName: string
}

const fullName = (user: User): string => {
    return `${user.firstName} ${user.lastName}`
}