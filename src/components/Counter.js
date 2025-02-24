import useMainStore from "../store/mainStore.js";

function Counter() {
    const { count, inc } = useMainStore()
    return (
        <div>
            <span>{count}</span>
            <button onClick={inc}>one up</button>
        </div>
    )
}

export default Counter;