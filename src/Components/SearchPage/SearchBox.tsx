import {FunctionComponent, useEffect, useState, useContext} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {
  buildSearchBox,
  SearchBox as HeadlessSearchBox,
  SearchBoxOptions,
} from '@coveo/headless';
import EngineContext from '../../common/engineContext';
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import styled from 'styled-components';
import {Theme} from '../../theme';



interface SearchBoxProps {
  controller: HeadlessSearchBox;
}

const SearchBoxRenderer: FunctionComponent<SearchBoxProps> = (props) => {
  const {controller} = props;
  const [state, setState] = useState(controller.state);

  useEffect(
    () => controller.subscribe(() => setState(controller.state)),
    [controller]
  );


  return (
    <Autocomplete
      inputValue={state.value}
      onInputChange={(_, newInputValue) => {
        controller.updateText(newInputValue);
      }}
      onChange={() => {
        controller.submit();
      }}
      options={state.suggestions.map((suggestion) => suggestion.rawValue)}
      freeSolo
      style={{width: '75%', background: 'white', display: 'flex'}}
      renderInput={(params) => (
        <>
        <TextField {...params} placeholder="Search" size="small" className='search-box' style={{borderRadius: '25px'}} onKeyDown={e => {
          if (e.code === 'Enter' && controller.state.value === '') {
              controller.submit();
          }
        }}/><Button><Icon icon={search} size={25} /></Button>
        </>
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option, inputValue);
        const parts = parse(option, matches);
        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 400 : 300,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
};

const SearchBox = () => {
  const options: SearchBoxOptions = {numberOfSuggestions: 8};
  const engine = useContext(EngineContext)!;
  const controller = buildSearchBox(engine, {options});

// This is added to fix a bug which does not allow to see query suggestion on first click.  
  if(controller.state.value === ""){
    controller.updateText('');
  }
  
  return <SearchBoxRenderer controller={controller} />;
};

export default SearchBox;

const Button = styled.button`
display: flex;
padding: 8px 16px;
height: 43px;
background-color: ${Theme.primary};
box-shadow: 0px 7px 16px -4px rgb(92 45 145 / 16%);
border: 2px solid transparent;
border-radius: 0rem 0.3rem 2.3rem 0rem;
padding: 0.7rem 2.8rem;
font-family: Proximus-Bold;
font-style: normal;
font-size: 17px;
line-height: 24px;
color: #FFFFFF;
border: none;
cursor: pointer;
transition: 0.2s ease-in-out;
&:hover {
    background-color: ${Theme.button}CC;
}

`
