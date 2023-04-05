import { createContext, type Dispatch, type SetStateAction, useContext } from "react";

interface UpdateDataContextType {
    updateTimestamp: number | null;
    initiateUpdate: (id: string, platform: string) => Promise<number>;
    isUpdating: boolean;
    canUpdate: boolean;
    setCanUpdate: Dispatch<SetStateAction<boolean>>;
}
  
export const UpdateDataContext = createContext<UpdateDataContextType | undefined>(undefined);

export const useUpdateDataContext = (): UpdateDataContextType => {
    const context = useContext(UpdateDataContext);
    if (context === undefined) {
        throw new Error('useUpdateData must be used within a UpdateDataProvider');
    }
    return context;
}