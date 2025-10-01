import { getAPIData } from './api.js'
import { welcomeAgentNum, qText, qAuthor } from './dom.js'
import { userInputVariable } from './simulate-login.js'

welcomeAgentNum.innerText = userInputVariable

async function main(){
    const data = await getAPIData()

    qText.innerText = data.quotes[0].q
    qAuthor.innerText = data.quotes[0].a
}

main()