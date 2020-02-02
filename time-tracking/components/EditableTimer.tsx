import React from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

interface P {
    id: number
    title: string
    project: string
    elapsed: number
    isRunning?: boolean
    editFormOpen?: boolean
}

// see: https://www.pluralsight.com/guides/typescript-building-react-components
const EditableTimer : React.FC<P> = (p) => {
    if (p.editFormOpen) {
        return <TimerForm id={p.id} title={p.title} project={p.project} />;
    }
    return (
        <Timer id={p.id}
               title={p.title}
               project={p.project}
               elapsed={p.elapsed}
               isRunning={p.isRunning} />
    );
};

export default EditableTimer;