import OperatorsFilterButton from "@/components/Operators/OperatorsFilter/OperatorsFilterButton";
import OperatorsLayoutNavigation from "@/components/Operators/OperatorsLayoutNavigation";
import { fetchPlayer } from "@/lib/api/fetchPlayer";
import styles from "./OperatorPage.module.scss";

export default async function Layout({ children, params }: { children: React.ReactNode; params: { uuid: string } }) {
    const {data: { operators }} = await fetchPlayer(params.uuid, "uplay");
    
    // TODO: call notFound() if operators is null
    if (!operators) return null;

    const path = `/player/${params.uuid}/operators`

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <OperatorsLayoutNavigation path={path}/>
                <div>
                    <OperatorsFilterButton data={operators}/>
                    {/* <OperatorFilter/> */}
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}