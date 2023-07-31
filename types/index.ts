export interface ICategory {
    id: number;
    attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
    Title: string;
    Slug: string;
}

export interface Repo {
    name: string
    stargazers_count: number
  }

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface IResourceMeta {
    pagination: IPagination;
}

export interface IImageDataAttributes {
    id: number;
    attributes: {
        formats: {
            thumbnail: {
                url: string;
            }
        };
        url: string;
    }
    
}

export interface IImageData {
    data: IImageDataAttributes[];
}

export interface IAuthor {
    data: {
        attributes: {
            firstname: string;
            lastname: string;
            avatar:{
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string;
                            },
                            large:{
                                url: string
                            },
                            small:{
                                url: string
                            }
                            
                        
                        }
                    };
                }
            }
        };
    }
}

export interface IAtriclesAttributes{
    Title:string;
    body: string;
    Slug: string;
    Image: IImageData;
    createdAt: string;
    author:IAuthor;
    shortDescription: string;
}

export interface IArticle{
    id:number;
    attributes: IAtriclesAttributes;
}

export interface ICollectionResponse<T> {
    data: T;
    meta: IResourceMeta;
}


export type TDirection = number;


export interface IQueryOptions {
    filters: any;
    sort: any;
    populate: any;
    pagination: {
        page: number;
        pageSize: number;
    };
}


export interface IQueryOptions{
    sort:any,
    filters:any,
    pagination:{
        page:number,
        pageSize:number
    }
    populate:any
}