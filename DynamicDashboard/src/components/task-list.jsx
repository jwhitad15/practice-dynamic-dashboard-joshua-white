const RenderList = () => {

    let sampleTasks = [
        { task: "Sweep", status: true },
        { task: "Mop", status: false },
        { task: "Dust", status: true },
        { task: "Scrub", status: true },
        { task: "Rinse", status: false }
    ];

    const renderTasks = sampleTasks.map(tasky => {

        return (
            // <ol>
                <li> {tasky.task}: {tasky.status}</li>
            /* </ol> */
        );
    });

    const ele = <ol>{renderTasks}</ol>;

    {sampleTasks.status ? "chore complete" : "chore not complete"}
    

    return ele;
}

export default RenderList;