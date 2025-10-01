import { menuOptions, navBar } from './dom.js'

export function dropdownMenu(){
    menuOptions.classList.toggle('show')
    navBar.classList.toggle('focus-border')
}