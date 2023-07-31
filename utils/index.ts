import { IArticle } from "@/types";
import { serialize } from "next-mdx-remote/serialize";

export const formatDate = (dateString:string) =>{
    const date = new Date(dateString).toLocaleDateString('en-US',{
        weekday:'short',
        year:'numeric',
        month:'long',
        day: 'numeric'
    })
    return date;
}

export const formatSlug = (slug:string) =>{

    if (typeof(slug) === 'string'){ 
        return slug.split('-').join(' ');
    }
    
    return '';
}

export const capitaliseFirstLetter = (string:string):string =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export const debounce = (func:(query:string)=>void, timeout=50) => {
    let timer: NodeJS.Timeout;

    const debouncedFunc = (...args:any) => {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this,args)
        }, timeout);
    }

    return debouncedFunc;
}


export const serializeMarkdown = async (item: IArticle) => {
    const body = await serialize(item.attributes.body as string);
    return {
        ...item,
        attributes: {
            ...item.attributes,
            body,
        },
    };
};