export const EventUtil = {
    addHandler: (element, type, callback) => {
        console.log("进入事件绑定")
        if (element.addEventListener) {
            console.log(element)
            element.addEventListener(type, callback, false)
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, callback)
        } else {
            element["on" + type] = callback
        }
    },
    removeHandler: (element, type, callback) => {
        if (element.removeEventListener) {
            element.removeEventListener(type, callback, false)
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, callback)
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: (event) => {
        return event ? event : window.event;
    },
    getTarget: (event) => {
        return event.target ? event.target : event.srcElement;
    },
    preventDefault: (event) => {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

    },
    stopPropagation: (event) => {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
}

export function hasClass(target, className) {
    let classList = target.classList;
    console.log(classList)
    for (let i = 0; i < classList.length; i++) {
        if (classList[i] == className) {
            return true;
        }
    }
    return false;
}