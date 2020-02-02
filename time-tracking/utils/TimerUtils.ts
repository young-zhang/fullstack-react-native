import uuidv4 from 'uuid/v4';

export const millisecondsToHuman = ms => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    return [
        pad(hours.toString(), 2),
        pad(minutes.toString(), 2),
        pad(seconds.toString(), 2),
    ].join(':');
};

const pad = (numberString, size) => {
    let padded = numberString;
    while (padded.length < size) {
        padded = `0${padded}`;
    }
    return padded;
};

interface Timer {
    title: string
    project: string
    id: uuidv4
    elapsed: number
    isRunning: boolean
}

export const newTimer = (attrs: any = {}) : Timer => {
    return {
        title: attrs.title || 'Timer',
        project: attrs.project || 'Project',
        id: uuidv4(),
        elapsed: 0,
        isRunning: false,
    };
};
