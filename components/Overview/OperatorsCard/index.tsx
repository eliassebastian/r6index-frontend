import { fetchPlayer } from "@/components/Player/fetchPlayer";
import { operatorsConfig } from "@/configs/Operators";
import { calculateBestOperator } from "@/utils/Ubisoft";
import Link from "next/link";
import Image from "next/image";
import styles from "./OperatorsCard.module.scss";
import { convertNumberToTwoDecimals } from "@/utils/Numbers";

interface OperatorsCardProps {
    uuid: string;
}

const OperatorsCard = async (props: OperatorsCardProps) => {
    const { data: { operators } } = await fetchPlayer(props.uuid, "uplay");

    //check if data is available, if not, throw error for error boundary to catch
    const isOperatorsNotAvailable = operators == null;
    if (isOperatorsNotAvailable) throw new Error("Operator Data Currently Not Available");

    //calculate top operator
    const topOperator = operators && calculateBestOperator([...operators.attacker, ...operators.defender])
    const operatorConfig = operatorsConfig[topOperator.statsDetail];

    return (
        <Link 
            href={`/player/${props.uuid}/operators`}
            className={styles.card}
        >
            <Image className={styles.img} src={operatorConfig.large} alt={`${ topOperator.statsDetail } banner image`} fill priority />
            <div className={styles.top_content}>
                <h2 className={styles.title}>TOP OPERATOR</h2>
                <span className={styles.operator}>{topOperator.statsDetail}</span>
            </div>
            <div className={styles.bottom_content}>
                <div>
                    <span className={styles.grid_text}>{ convertNumberToTwoDecimals(topOperator.killDeathRatio.value) }</span>
                    <h3 className={styles.grid_subtitle}>K/D</h3>
                </div>
                <div style={{marginTop: "1rem"}}>
                    <span className={styles.grid_text}>{ convertNumberToTwoDecimals( topOperator.roundsWon / topOperator.roundsPlayed * 100, 1) }%</span>
                    <h3 className={styles.grid_subtitle}>Win Rate</h3>
                </div>
                <div style={{marginTop: "1rem"}}>
                    <span className={styles.grid_text}>{ convertNumberToTwoDecimals( topOperator.roundsWithKOST.value * 100, 1) }%</span>
                    <h3 className={styles.grid_subtitle}>KOST</h3>
                </div>
            </div>
        </Link>
    )
}

export default OperatorsCard;