enum Category {
    A,
}

// необычно выглядят названия свойств с верхнего регистра
export interface CartProducts {
    Id: number
    Name: string,
    Description: string,
    Price: number,
    Category: Category,
    IsAvailable: boolean,
    Quantity?: number
}
