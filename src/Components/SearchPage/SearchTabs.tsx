import React, { useEffect, useContext } from "react";
import { buildTab, Tab } from "@coveo/headless";
import EngineContext from "../../common/engineContext";
import styled from "styled-components";
import { Theme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { SearchPageTabConfig } from "../../config/SearchConfig";
import { SearchPageTabConfigType } from "../../config/Types/ConfigTypes";


const isRouteMatching  = (param : string, caption : string) => {
  if (!param && caption === SearchPageTabConfig[0].caption) {
    return true;
  }
  return (
    (param && caption.replace(/\s/g, "").toLowerCase() === param.toLowerCase())? true : false
  );
};


interface SearchTabType {
  item : SearchPageTabConfigType,
  controller : Tab,
  selected : boolean 
}


export const SearchTab: React.FC<SearchTabType> = ({ controller, item, selected }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (selected) {
      controller.select();
    }
  }, []);

  return (
    <TabTitle
      key={item.caption}
      onClick={() => {
        navigate(`/search/${item.caption.replace(/\s/g, "")}`);
        if (!selected) {
          controller.select();
        }
      }}
      isActive={selected}
    >
      {item.caption}
    </TabTitle> 
  );
};


interface SearchTabsType {
  filterSelected : string
}

const SearchTabs : React.FC<SearchTabsType> = ({ filterSelected }) => {
  const engine = useContext(EngineContext)!;

  return (
    <Wrapper>
      {SearchPageTabConfig.map((item) => {
        const controller = buildTab(engine, {
          options: {
            id: item.caption,
            expression: item.expression,
          },
        });

        return (
          <React.Fragment key = {item.caption}>
          <SearchTab
            item={item}
            controller={controller}
            selected={isRouteMatching(filterSelected, item.caption)}
          ></SearchTab>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: ${Theme.navbar};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const TabTitle = styled.a<{isActive : boolean }>`
  padding: 10px 15px;
  margin: 8px;
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.isActive ? Theme.navbar : Theme.primaryText)};
  cursor: pointer;
  font-family: Proximus-Regular;
  background: ${(props) => (props.isActive ? Theme.selection : Theme.unselected)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  transition: all .2s ease-out;
  transition: 0.2s ease-in-out all;
  &:hover {
    opacity: 1;
    background: ${Theme.navbar}
    color: ${Theme.primaryText}
    border-color: ${Theme.primaryText}
  }
`;

export default SearchTabs;
