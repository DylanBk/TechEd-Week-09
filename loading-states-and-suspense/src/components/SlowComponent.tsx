import delay from "@/utils/delay"

const SlowFC = async () => {
    await delay(2000)

    return (
        <div className="w-64 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 border-2 border-blue-500/40 rounded-lg bg-blue-500/5">
            <h3 className="text-white font-bold">Slow Component</h3>
            <p className="text-gray-300">This component takes a while to load.</p>
        </div>
    );
};

export default SlowFC;