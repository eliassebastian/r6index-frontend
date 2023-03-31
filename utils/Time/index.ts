
export const timeAgo = (value: string | number | Date) => {
    if (typeof value === 'number') {
        value = value * 1000
    }

    const seconds = Math.floor((new Date().getTime() - new Date(value).getTime()) / 1000)
    let interval = seconds / 31536000
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: 'auto' })
    //if (interval > 1) { return rtf.format(-Math.floor(interval), 'year') }
    if (interval > 1) { return 'A year ago' }
    interval = seconds / 2592000
    if (interval > 1) { return rtf.format(-Math.floor(interval), 'month') }
    interval = seconds / 86400
    if (interval > 1) { return rtf.format(-Math.floor(interval), 'day') }
    interval = seconds / 3600
    if (interval > 1) { return rtf.format(-Math.floor(interval), 'hour') }
    interval = seconds / 60
    if (interval > 1) { return rtf.format(-Math.floor(interval), 'minute') }
    return rtf.format(-Math.floor(interval), 'second')
}

export const canPlayerBeUpdated = (lastUpdate: number) => {
    const currentTime = Math.floor(Date.now() / 1000); // Convert current time to Unix timestamp (seconds)
    const oneHourInSeconds = 3600; // Number of seconds in an hour

    // Check if the difference between the current time and the last update time is greater than or equal to one hour
    return (currentTime - lastUpdate) >= oneHourInSeconds;
}