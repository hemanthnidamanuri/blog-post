type UUID = string;

export interface User {
    id: UUID;
    name: string;
    userPicture?: string
    dateOfBirth? : Date;
    phoneNumber?: string;
    country?: string;
    pinCode?: string | number
}

export interface Blog {
    title: String;
    subtitle?:string;
    content: String;
    picture: String;
    user: User;
    date_creation: Date | string;
    date_updated: Date | string | null;
    likes: number
}

export interface Search {
    search_text: string;
}