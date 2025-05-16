const RenderList = () => {

    let sampleTasks = [
        { task: "SWEEP KITCHEN", status: "completed  ✅" },
        { task: "MOP KITCHEN", status: "incomplete 🙅🏽‍♂️" },
        { task: "DUST FURNITURE", status: "completed ✅" },
        { task: "SCRUB PATIO", status: "completed ✅" },
        { task: "RINSE MOP BUCKET", status: "incomplete 🙅🏽‍♂️" }
    ];

    const renderTasks = sampleTasks.map(tasky => {
        return (
                <li> {tasky.task} - {tasky.status} </li>
        );
    });

    const ele = <ol class="task-list">{renderTasks}</ol>;
    return ele;


    // let checkmark = &#x2705
    // let redX = &#x274C
    // sampleTasks.status ? checkmark : redX
    


}

export default RenderList;