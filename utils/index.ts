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