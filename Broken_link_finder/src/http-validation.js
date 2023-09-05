import chalk from "chalk"

function link_extractor (object_link) {
    return object_link.map((link) => Object.values(link).join())
}

async function status_check(url_array){
    const status_array = await Promise
    .all(
        url_array.map(async (url) => {
            try{
                const response = await fetch(url)
                return response.status;
            } catch (error) {
                return error_no_link(error);
            }
        })
    )
    return status_array;
}

function error_no_link(error){
    if(error.cause.code === 'ENOTFOUND'){
        return 'This URL does not exist';
    }  else {
       return 'The URL exists, but something went wrong'; 
    }
}

export default async function validList(linkList){
    const links= link_extractor(linkList);
    const status = await status_check(links);
    return linkList.map((object, index) => ({
        ...object, 
        status: status[index]
        }))
    return status;
}
