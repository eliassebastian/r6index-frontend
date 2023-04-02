'use client';

import { useCallback, useState } from "react";
import { UpdateDataContext } from "..";

interface UpdateDataProviderProps {
    children: React.ReactNode;
}

export const UpdateDataProvider: React.FC<UpdateDataProviderProps> = ({ children }) => {
    const [updateTimestamp, setUpdateTimestamp] = useState<number | null>(null);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [canUpdate, setCanUpdate] = useState<boolean>(false);

    const initiateUpdate = useCallback(async (id: string, platform: string): Promise<number> => {
        setIsUpdating(true);

        let status = 500;

        try {
            // call api to revalidate page data
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

            const response = await fetchIndex.json();
            response.updateTime && setUpdateTimestamp(response.updateTime);
            status = fetchIndex.status;
        } catch (error) {
            console.error('Error updating data:', error);
        } finally {
            setIsUpdating(false);
        }

        return status;
    }, []);

    return (
        <UpdateDataContext.Provider value={{ updateTimestamp, initiateUpdate, isUpdating, canUpdate, setCanUpdate }}>
            {children}
        </UpdateDataContext.Provider>
    );
};