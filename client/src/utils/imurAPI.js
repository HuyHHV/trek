export default async function imurAPI(img) {
    const data = await fetch("https://api.imgur.com/3/image/", {
                method: "post",
                headers: {
                    Authorization: "Client-ID d40fd7d86c357ee"
                },
                body: img
            });
    const jsondata = await data.json();
    const URL = data.data.link ;  
    return URL
}