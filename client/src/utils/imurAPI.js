export default async function imurAPI(img) {
    const formdata = new FormData() ;
    formdata.append("image", img)
    try{
        const data = await fetch("https://api.imgur.com/3/image/", {
                    method: "POST",
                    headers: {
                        Authorization: "Client-ID 1ef0f4b425eac0d"
                    },
                    body: img
                });
        const jsondata = await data.json();
        const URL = jsondata.data.link ;  
        console.log(URL);
        return URL
    }
    catch(error) {
        console.log(JSON.stringify(error, null, 2));
    }
}