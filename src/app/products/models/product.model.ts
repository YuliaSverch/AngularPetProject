enum Category {
    A,
}

export interface ProductModel {
    Id: number
    Name: string,
    Description: string,
    Price: number,
    Category: Category,
    IsAvailable: boolean
}
