let element: any = document.getElementById('code');

onmessage = (event) => {
    let data = event.data.pluginMessage;
    console.log("got this from the plugin code", data)
    element.innerHTML = data.text
}

