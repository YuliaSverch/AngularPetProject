enum Category {
    A,
}

export interface ProductModel {
    Name: string,
    Description: string,
    Price: number,
    Category: Category,
    IsAvailable: boolean
}
