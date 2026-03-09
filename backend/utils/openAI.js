import dotenv from "dotenv"

dotenv.config()

let getOpenAIAPIResponse=async(message)=>{
    try{
        let response=await fetch("https://api.openai.com/v1/chat/completions",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body:JSON.stringify({
                model:"gpt-4o-mini",
                messages: [{
                        role: "user",
                        content:message
                    
                }]

            })
        })

        let result=await response.json()
        if(response.ok){
            console.log(result.choices[0].message.content)
            return result.choices[0].message.content

        }

    }
    
    catch(e){
        console.log(e)
    }


}
export default getOpenAIAPIResponse;