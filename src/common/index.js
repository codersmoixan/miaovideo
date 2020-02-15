
export function debounce(fn, awaitTime) {
    let timer = null
    return () => {
        if(!timer) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn()
                timer = null
            }, awaitTime)
        }
    }
    // let prev = 0

}