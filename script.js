
function submitForm(){
    let input= document.getElementById('userInput')
    let msg =  document.getElementById("displaymsg");
    let imageElement = document.getElementById('imag');
    if (input.value !==''){
    let city_name = input.value
    let ky ="insert key"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${ky}`
    document.getElementById("reset").reset()
    fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error('error')
            }
            return response.json()
        })

        .then(data =>{

            let details = data
            document.getElementById('cityName').innerText = details.name
            document.getElementById('country_name').innerText = details.sys.country
            document.getElementById('main').innerText = details.weather[0].main
            document.getElementById('description').innerText = details.weather[0].description
            imageElement.src = `https://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`;
            msg.innerText = `${details.name} weather details succesfully updated`

        })
        .catch (error=>{
            document.getElementById('cityName').innerText = ''
            document.getElementById('country_name').innerText = ''
            document.getElementById('main').innerText = ''
            document.getElementById('description').innerText = ''
            imageElement.src = ''
            msg.innerText = 'Error! Try again'

        })
    }else{
        document.getElementById('cityName').innerText = ''
        document.getElementById('country_name').innerText = ''
        document.getElementById('main').innerText = ''
        document.getElementById('description').innerText = ''
        imageElement.src = ''
        msg.innerText = 'input cannot be empty.Please Enter  city name.'
    }

};