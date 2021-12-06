
import { connect } from "react-redux";

function App(props)
{

    function handleTodo(event)
    {
        if (event.keyCode === 13 && event.target.value)
        {
            props.dispatch({ type: "add", todo: event.target.value });
            event.target.value = "";
        }
    }

    function handleRemove({ target })
    {
        let { id } = target.dataset;
        props.dispatch({ type: "remove", id: id });
    }

    function handleCompleted({ target })
    {
        let { id, completed } = target.dataset;
        props.dispatch({ type: "toggle", isCompleted: completed === "false" ? true : false, id: id })
    }

    console.log(props)
    return (
        <>
            <h1 className="text-center text-6xl font-bold mb-10 text-indigo-900">Todo List</h1>
            <div className="bg-indigo-300 p-8 flex flex-col items-center mt-12 w-1/2 mx-auto rounded shadow-lg">
                <input type="text" placeholder="What needs to  be done?" className="w-5/6 p-2 rounded-md shadow-lg" onKeyUp={handleTodo} />
                <div className="w-full flex justify-center mt-10">
                    <ul className="">
                        {
                            props.state && props.state.map((elm, index) => (
                                <li key={index}>
                                    <input type="checkbox" onChange={handleCompleted} data-id={index} checked={elm.isCompleted ? true : false} data-completed={elm.isCompleted} />
                                    <span>{elm.todo}</span>
                                    <span onClick={handleRemove} data-id={index}>❌</span>
                                </li>

                            ))
                        }
                        {/* <li>
                            <input type="checkbox" onClick={handleCompleted} data-id="1" />
                            <span>task of tod</span>
                            <span onClick={handleRemove} data-id="1">❌</span>
                        </li> */}
                        {/* <li key={index} className="flex justify-between w-96 bg-indigo-200 my-3 items-center text-2xl p-3 rounded shadow-lg">
                            <input type="checkbox" onClick={handleCompleted} data-id={index} data-completed={elm.isCompleted} className="text-2xl" checked={elm.isCompleted ? true : false} />
                            <h2 className={elm.isCompleted ? "capitalize line-through" : "capitalize"}>elm.todo</h2>
                            <span className="cursor-pointer" onClick={handleRemove} data-id={index} >❌</span>
                        </li> */}
                        {/* {
                            props.state && props.state.map((elm, index) =>
                            {
                                return <li key={index} className="flex justify-between w-96 bg-indigo-200 my-3 items-center text-2xl p-3 rounded shadow-lg">
                                    <input type="checkbox" onChange={handleCompleted} data-id={index} data-completed={elm.isCompleted} className="text-2xl" checked={elm.isCompleted ? true : false} />
                                    <h2 className={elm.isCompleted ? "capitalize line-through" : "capitalize"}>{elm.todo}</h2>
                                    <span className="cursor-pointer" onClick={handleRemove} data-id={index} >❌</span>
                                </li>
                            })
                        } */}
                    </ul>
                </div>
            </div>
        </>
    );
}
function mapStateToProps(state)
{
    console.log(state)
    return {
        state: [...state]
    }
}

export default connect(mapStateToProps)(App);