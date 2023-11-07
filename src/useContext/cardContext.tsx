import React, { useContext, useState } from 'react';

type GoodContext = {
  phoneId: string;
  addGood: (newGoodId: string) => void,
};

export const GoodsContext = React.createContext<GoodContext>({
  phoneId: '',
  addGood: () => { },
});

type Props = {
  children: React.ReactNode;
};

export const GoodProvider: React.FC<Props> = ({ children }) => {
  const [phoneId, setPhoneId] = useState<string>('');
  const addGood = (newId: string) => {
    setPhoneId(newId);
  };

  return (
    <GoodsContext.Provider value={{ phoneId, addGood }}>
      {children}
    </GoodsContext.Provider>
  );
};

export function useGoodContext() {
  const id = useContext(GoodsContext);

  return id;
}
