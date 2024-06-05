import { ChangeEvent, createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const HomeContext = createContext({} as IHomeContext);

interface IState {
  id: number;
  name: string;
}

interface IHomeContext {
  statesList: IState[];
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputStateValue: string;
  listIsOpen: boolean;
  selectState: (name: string) => void;
}

interface IHomeProviderProps {
  children: React.ReactNode;
}

export const HomeProvider = ({ children }: IHomeProviderProps) => {
  const [statesList, setStatesList] = useState<IState[]>([]);
  const [inputStateValue, setInputStateValue] = useState<string>("");
  const [listIsOpen, setListIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchStates = async () => {
      setStatesList(await searchState());
    };
    fetchStates();
  }, []);

  const searchState = async (): Promise<IState[]> => {
    try {
      const { data } = await api.get("/states");
      const statesDecrypt = data.map((state: IState) => {
        const stateDecrypt = textDecrypt(state.name);
        return {
          ...state,
          name: stateDecrypt,
        };
      });
      console.log(statesDecrypt);
      return statesDecrypt;
    } catch (error) {
      return [];
    }
  };

  const textDecrypt = (text: string): string => {
    const shift = 7;
    return text
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        return String.fromCharCode(charCode - shift);
      })
      .join("");
  };

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const str = event.target.value;
    setInputStateValue(str);

    if (str.trim().length === 0) {
      const originalList = await searchState();
      setListIsOpen(false);
      setStatesList(originalList);
    } else if (str.length > 0) {
      setListIsOpen(true);
      const newData = await filterListState(str);
      setStatesList(newData);
    }
  };

  const filterListState = async (str: string): Promise<IState[]> => {
    const list = await searchState();
    const filterList = list.filter((state) =>
      state.name.toLowerCase().includes(str.toLowerCase())
    );
    return filterList;
  };

  const selectState = (name: string) => {
    setInputStateValue(name);
    setListIsOpen(false);
  };

  return (
    <HomeContext.Provider
      value={{
        statesList,
        handleInputChange,
        inputStateValue,
        listIsOpen,
        selectState,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
