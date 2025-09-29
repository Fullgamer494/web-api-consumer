welcomeAgentNum.innerText = userInputVariable


async function main(){
    const data = await getAPIData()

    qText.innerText = data.quotes[0].q
    qAuthor.innerText = data.quotes[0].a
}

main()