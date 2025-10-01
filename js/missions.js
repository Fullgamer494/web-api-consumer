import { getAPIData } from './api.js'
import { crimiGrid } from './dom.js'

async function main(){
    const data = await getAPIData()
    const most_wanted = data.wanted.items

    console.log(most_wanted)

    most_wanted.forEach((element) => {
        crimiGrid.innerHTML += `
            <div class="criminal-card">
                <div class="criminal-img">
                    <img src="${element.images[0].original != most_wanted[0].images[0].original && element.images[0].original != most_wanted[1].images[0].original && element.images[0].original != most_wanted[11].images[0].original? element.images[0].original : '../src/most-wanted-default.jpg'}" alt="">
                </div>
                <div class="criminal-info">
                        <h2>${element.title}</h2>
                        <p>${element.details != null? element.details.slice(0, 150) + "..." : "Be careful, agent, this son of a bitch is very dangerous and elusive. We haven't been able to get many details on the bastard."}</p>
                    </div>
            </div>
        `
    });
}

main()