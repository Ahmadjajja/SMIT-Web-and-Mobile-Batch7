function checkURL() {
    console.log(window.location.href)
    console.log(window.location.hostname)
    console.log(window.location.pathname)
    window.location.replace("https://github.com/Ahmadjajja")
    history.go(2)
}