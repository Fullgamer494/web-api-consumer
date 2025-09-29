const API_QUOTES = '/zen/api/random'
const API_FBI = 'https://api.fbi.gov/wanted/v1/list'
const API_FAKE_PERSON = 'https://randomuser.me/api/'


async function getAPIData(){
    try{
        const requestQuote = fetch(API_QUOTES)
        const requestFBI = fetch(API_FBI)
        const requestFakePerson = fetch(API_FAKE_PERSON)

        const [answQuote, answFBI, answFakePerson] = await Promise.all([
            requestQuote,
            requestFBI,
            requestFakePerson
        ])

        if(!answQuote.ok || !answFBI.ok || !answFakePerson.ok){
            throw new Error('One of the request failed')
        }
        
        const [quotes, wanted, person_data] = await Promise.all([
            answQuote.json(),
            answFBI.json(),
            answFakePerson.json()
        ])

        return {quotes, wanted, person_data}
    } catch(error){
        return {quotes: null, wanted: null, person_data: null}
    }
}