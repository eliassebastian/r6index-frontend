'use client';

import { useCallback, useState } from "react";
import { UpdateDataContext } from "..";

interface UpdateDataProviderProps {
    children: React.ReactNode;
}

export const UpdateDataProvider: React.FC<UpdateDataProviderProps> = ({ children }) => {
    const [updateTimestamp, setUpdateTimestamp] = useState<number>(Date.now());
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [initiator, setInitiator] = useState<string | null>(null);
    const [canUpdate, setCanUpdate] = useState<boolean>(false);

    const initiateUpdate = useCallback(async (componentId: string, id: string, platform: string): Promise<number> => {
        setIsUpdating(true);
        setInitiator(componentId);

        let status = 500;

        try {
            const fetchIndex = await fetch('http://127.0.0.1:3000/api/revalidate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Connection': 'keep-alive',
                    'Accept': '*/*',
                    'Accept-Encoding': 'gzip, deflate, br',
                },
                body: JSON.stringify({ secret: "uB2IYD0CoLMgEuyr", id: id, platform: platform }),
            });

            status = fetchIndex.status;
        } catch (error) {
            console.error('Error updating data:', error);
        } finally {
            setIsUpdating(false);

            const update = status === 200 || status === 202;
            setCanUpdate(!update)
        }

        return status;
    }, []);

    return (
        <UpdateDataContext.Provider value={{ updateTimestamp, initiateUpdate, isUpdating, initiator, canUpdate, setCanUpdate }}>
            {children}
        </UpdateDataContext.Provider>
    );
};