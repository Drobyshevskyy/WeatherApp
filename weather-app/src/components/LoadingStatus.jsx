import { useSelector } from "react-redux";
import { AiOutlineLoading } from "react-icons/ai";

function LoadingStatus () {

    const isLoading = useSelector(store => store.weather.isLoading);
    const error = useSelector(store => store.weather.error);

    return (
        <div>
            {isLoading && <AiOutlineLoading className="animate-spin w-full py-10 h-60"/>}
        </div>
    );
}

export default LoadingStatus;