import { fetchPlayer } from "@/components/Player/fetchPlayer";
import Link from "next/link";
import styles from "./SummaryCard.module.scss";
import SummaryCardContent from "./SummaryCardContent";

interface SummaryCardProps {
    uuid: string;
}

const SummaryCard = async (props: SummaryCardProps) => {

    const { data: { ranked, summary } } = await fetchPlayer(props.uuid, "uplay");

    const isRankedNotAvailable = ranked == null; 
    const isSummaryNotAvailable = summary == null;

    //TODO: return empty div if data is not available

    return <SummaryCardContent uuid={props.uuid} ranked={ranked[0]} summary={summary}  />
}

export default SummaryCard;