import {hello} from './util'

hello()
figma.showUI(__html__, {width: 500, height: 500})

figma.ui.onmessage = (message) => {
    console.log("got this from the UI", message)
}

figma.on("selectionchange", () => {
    run();
});

function run() {
    let selectionElement: any = figma.currentPage.selection[0]
    console.log(selectionElement)
    for (let one of selectionElement.children) {
        console.log(one);
        console.log(one.name, one.type)

        switch (one.type) {
            case 'RECTANGLE':
                console.log(`<div>${one.name}</div>`)
                figma.ui.postMessage({
                    text: one.name,
                });
                break;
        }
    }
}
