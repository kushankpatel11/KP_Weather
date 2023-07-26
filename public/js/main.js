 const cityName = document.getElementById('cityName');
 const city_name = document.getElementById('city_name')
 const submitBtn = document.getElementById('submitBtn');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');

const data_hide = document.querySelector('.middle_layer');

 const getInfo = async (event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText='Write city name';
        data_hide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d288e45b9bd79171e4275f3e8f8ad742`;
            const res = await fetch(url);
            const data = await response.json();
            const arrData = [data];  
            // console.log(data);

            city_name.innerText = `${arrdata[0].name}, ${arrData[0].sys.country} `;
             temp_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = 
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = 
                    "<i class='fas fa-Cloud' style='color: #f1f2f6;'></i>";
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML = 
                    "<i class='fas fa-Rain' style='color: #a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML = 
                    "<i class='fas fa-sun' style='color: #f1f2f6;'></i>";
            }

            data_hide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText = 'Write city name';
            data_hide.classList.add('data_hide');

        }
    }
 }

 submitBtn.addEventListener('click', getInfo);