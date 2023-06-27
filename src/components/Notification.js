function Notification(props) {
    return ( 
        <div className="not-panel" id={props.id} style={{
            opacity: props.solved ? 0 : 1
        }}>
            <div className="not-color-div" 
                style={props.solved ? {backgroundColor: 'green'} : {backgroundColor: 'red'}} 
                />
            <p className="not-text">
                {props.children}
            </p>
        </div>
    );
}

export default Notification;