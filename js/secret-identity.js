import { getAPIData } from './api.js'
import { profileContainer } from './dom.js'

async function main(){
    const data = await getAPIData()

    profileContainer.innerHTML = `
        <div class="new-identity-card">
            <div class="new-identity-info">
                <div class="info-column">
                    <h2>Fullname:</h2>
                    <span>${data.person_data.results[0].name.first + ' ' + data.person_data.results[0].name.last}</span>
                    <h2>Age:</h2>
                    <span>${data.person_data.results[0].dob.age}</span>
                    <h2>Gender:</h2>
                    <span>${data.person_data.results[0].gender}</span>    
                </div>
                <div class="info-column">
                    <h2>Email:</h2>
                    <span>${data.person_data.results[0].email}</span>
                    <h2>Address:</h2>
                    <span>${data.person_data.results[0].location.country + ', ' + data.person_data.results[0].location.state}</span>
                    <h2>Phone:</h2>
                    <span>${data.person_data.results[0].phone}</span>
                </div>
            </div>
            <div class="new-identity-img">
                <img src="${data.person_data.results[0].picture.large}" alt="">
            </div>
        </div>
    `
}

main()