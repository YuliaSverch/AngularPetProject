enum Category {
    A,
}

// Можно расширить модель Product
export interface CartProducts {
    Id: number
    Name: string,
    Description: string,
    Price: number,
    Category: Category,
    IsAvailable: boolean,
    Quantity?: number
}
