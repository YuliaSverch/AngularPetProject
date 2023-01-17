enum Category {
    A,
}

export interface CartProducts {
    Id: number
    Name: string,
    Description: string,
    Price: number,
    Category: Category,
    IsAvailable: boolean,
    Quantity?: number
}
