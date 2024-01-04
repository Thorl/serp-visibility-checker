import { SetStateAction, createContext, useContext, useState } from "react";

// @TODO: Modify the interface so that it works for both shopping and
// text ads. Make some of the properties optional, if needed.

interface DataInterface {
  image_url: string | null;
  title: string | null;
  shop_link: string | null;
  rank: number | null;
}

interface StateUpdatingInterface {
  setVisibilityData: React.Dispatch<SetStateAction<DataInterface>>;
}

interface VisibilityDataInterface
  extends DataInterface,
    StateUpdatingInterface {}

const VisibilityDataContext = createContext<VisibilityDataInterface | null>(
  null
);

export const VisibilityDataProvider = (children: React.ReactNode) => {
  const [visibilityData, setVisibilityData] = useState<DataInterface>({
    image_url: null,
    title: null,
    shop_link: null,
    rank: null,
  });

  const contextValue: VisibilityDataInterface = {
    ...visibilityData,
    setVisibilityData,
  };

  return (
    <VisibilityDataContext.Provider value={contextValue}>
      {children}
    </VisibilityDataContext.Provider>
  );
};

export const useVisibilityData = () => useContext(VisibilityDataContext);
