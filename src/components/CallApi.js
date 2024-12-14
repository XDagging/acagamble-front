export default function callApi(path,method, body) {
    const endpoint = "https://localhost"



    
    return new Promise(async(resolve) => {
        const bodyString = JSON.stringify(body)

        let response = ""
        
        if (method.toLowerCase() === "get") {
            response = await fetch(endpoint +  path, {
                method: method.toUpperCase(),
                mode: "cors",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
            })
        } else {
            // POST 
            response = await fetch(endpoint +  path, {
                method: method.toUpperCase(),
                mode: "cors",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
                body: bodyString
            })
        }
        


        resolve(response.json())




    })
    
    
    

    

    




}