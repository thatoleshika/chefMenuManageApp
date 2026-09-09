import { createContext, ReactNode, useContext, useState } from 'react';

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
};

type MenuContextType = {
  menuItems: MenuItem[];
  addMenuItem: (
    name: string,
    description: string,
    category: string,
    price: string
  ) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addMenuItem = (
    name: string,
    description: string,
    category: string,
    price: string
  ) => {
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name,
      description,
      category,
      price,
    };

    setMenuItems((currentItems) => [...currentItems, newItem]);
  };

  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('useMenu must be used inside MenuProvider');
  }

  return context;
}