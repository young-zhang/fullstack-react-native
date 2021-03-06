import React from 'react';

import TimerProperties from './TimerForm';
import TimerForm from './TimerForm';
import Timer from './Timer';

interface P {
    id: string
    title: string
    project: string
    elapsed: number
    isRunning?: boolean
    onFormSubmit: (timer: TimerProperties) => void
    onRemovePress: (id: string) => void
    onStartPress: (id: string) => void
    onStopPress: (id: string) => void
}

export default class EditableTimer extends React.Component<P, { editFormOpen: boolean }> {
    state = {
        editFormOpen: false
    };

    handleEditPress = () => {
        this.openForm();
    };

    handleFormClose = () => {
        this.closeForm();
    };

    handleSubmit = timer => {
        const {onFormSubmit} = this.props;

        onFormSubmit(timer);
        this.closeForm();
    };

    closeForm = () => {
        this.setState({editFormOpen: false});
    };

    openForm = () => {
        this.setState({editFormOpen: true});
    };

    render() {
        const {id, title, project, elapsed, isRunning, onRemovePress, onStartPress, onStopPress} = this.props;
        const {editFormOpen} = this.state;

        if (editFormOpen) {
            return <TimerForm id={id} title={title} project={project}
                              onFormSubmit={this.handleSubmit}
                              onFormClose={this.handleFormClose} />;
        }
        return (
            <Timer id={id}
                   title={title}
                   project={project}
                   elapsed={elapsed}
                   isRunning={isRunning}
                   onEditPress={this.handleEditPress}
                   onRemovePress={onRemovePress}
                   onStartPress={onStartPress}
                   onStopPress={onStopPress} />
        );
    }
}