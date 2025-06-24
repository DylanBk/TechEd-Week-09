import { LoaderCircle } from "lucide-react";

const Loader = () => {
    return (
        <LoaderCircle
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-blue-500 animate-spin"
            size={32}
        />
    );
};

export default Loader;