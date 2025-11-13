import { createContext, useContext, useState, type ReactNode } from "react";

interface FilterContextType {
  search: string;
  selectedTeam: string;
  setSearch: (search: string) => void;
  setSelectedTeam: (team: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [selectedTeam, setSelectedTeam] = useState<string>("all");

  return (
    <FilterContext.Provider
      value={{
        search,
        selectedTeam,
        setSearch,
        setSelectedTeam,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
