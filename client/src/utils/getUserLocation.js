const getLocation = () => {
    if (!navigator.geolocation)    
    return alert("Your brower does not support this feature, please try Chrome or Firefox for better experience");

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
        
    });
};

const checkin = async() => {
    try {
        const location = await getLocation();
    }
    catch(error) {
        console.log(error)
        if (error.PERMISSION_DENIED) {
            alert("Check-in unsuccessful, user has denined the request for geolocation")
        }
    }
};


export default getLocation