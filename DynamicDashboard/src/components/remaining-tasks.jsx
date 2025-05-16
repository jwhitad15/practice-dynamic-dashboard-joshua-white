const RemainingTasks = () => {
    
    if (sampleTasks.status === "completed ✅")
        return ( <div class="remaining"> </div>)
    else if (sampleTasks.status === "incomplete 🙅🏽‍♂️")
        return (<div class="remaining"> </div>)
};

export default RemainingTasks;