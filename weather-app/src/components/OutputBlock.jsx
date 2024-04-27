import { useSelector } from "react-redux";
import { IconType } from "../utilities/IconType";
import { WiCloud, WiCloudy, WiDayRain, WiDaySunny, WiRain, WiThunderstorm } from 'react-icons/wi';

function Icon ({iconType}) {

    let className = "w-full mt-1 text-[5rem]";

    switch(iconType) {
        case IconType.LIGHT_RAIN : return <WiDayRain  className={className}/>;
        case IconType.MODERATE_RAIN : return <WiRain className={className}/>;
        case IconType.HEAVY_RAIN : return <WiThunderstorm className={className}/>;
        case IconType.LIGHT_CLOUD : return <WiDaySunny className={className}/>;
        case IconType.MODERATE_CLOUD : return <WiCloud className={className}/>;
        case IconType.HEAVY_CLOUD : return <WiCloudy className={className}/>;
        default: break;
    }
    return <></>
}

function OutputBlock () {

    const data = useSelector(store => store.weather.data);

    return (
        <div className="flex justify-start gap-x-5">
            {data?.map(item => {
                return (
                    <div
                    className="shadow-xl rounded-lg text-center px-5 py-2 bg-white/50 h-[11rem] w-[8rem]"
                    key={item.id}>
                        <Icon iconType={item.iconType} />
                        <p className="text-xl">{item.temp}&#186;C</p>
                        <hr className="mt-2 border-purple-950"/>
                        <p className="mt-2 text-base font-size-1rem">{item.time}</p>
                    </div>
                )
            })}
        </div>
    );
} 

export default OutputBlock;