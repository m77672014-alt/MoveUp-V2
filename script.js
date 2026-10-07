let xp = 0
let maxXp = 100
let level = 1

let completedMissions = []
let savedmissions = localStorage.getItem("completedMissions")

let savedXp = localStorage.getItem("xp")

if (savedXp !== null) {
    xp = Number(savedXp)
}

const xpText = document.getElementById("xp")
const xpBar = document.getElementById("xpBar")
const xpRemaining = document.getElementById("xpRemaining")
xpText.textContent = xp
xpBar.value = xp


const mission1 = document.getElementById("mission1")
const mission2 = document.getElementById("mission2")
const mission3 = document.getElementById("mission3")

if (savedmissions !== null) {
    completedMissions = JSON.parse(savedmissions)
}else {
    completedMissions = []
}

if (completedMissions.includes("mission1")) {
    mission1.disabled = true
}
if (completedMissions.includes("mission2")) {
    mission2.disabled = true
}
if (completedMissions.includes("mission3")) {
    mission3.disabled = true
}

mission1.addEventListener("click", function() {
    xp += 20
    localStorage.setItem("xp", xp)
    xpText.textContent = xp
    xpBar.value = xp
    mission1.disabled = true
    let savedXp = localStorage.getItem("xp");

    completedMissions.push("mission1")

    localStorage.setItem(
    "completedMissions",
    JSON.stringify(completedMissions)
)
})


mission2.addEventListener("click", function() {
    xp += 20
    localStorage.setItem("xp", xp)
    xpText.textContent = xp
    xpBar.value = xp
    mission2.disabled = true
    let savedXp = localStorage.getItem("xp");

    completedMissions.push("mission2")

    localStorage.setItem(
    "completedMissions",
    JSON.stringify(completedMissions)
)
})


mission3.addEventListener("click", function() {
    xp += 20
    localStorage.setItem("xp", xp)
    xpText.textContent = xp
    xpBar.value = xp
    mission3.disabled = true
    let savedXp = localStorage.getItem("xp");

    completedMissions.push("mission3")

    localStorage.setItem(
    "completedMissions",
    JSON.stringify(completedMissions)
)
})