import { fetchPlayer } from "@/components/Player/fetchPlayer";
import TrendsCardContent from "./TrendsCardContent";

interface MapsCardProps {
    uuid: string;
}

const TrendsCard = async (props: MapsCardProps) => {
    const { data: { trends } } = await fetchPlayer(props.uuid, "uplay");

    const isTrendsNotAvailable = trends == null;
    //const topOperator = maps && calculateBestOperator([...operators.attacker, ...operators.defender])

    //TODO: return empty div if data is not available
    if (isTrendsNotAvailable) throw new Error("Trends Data currently unavailable");

    return <TrendsCardContent uuid={props.uuid} />
}

export default TrendsCard;