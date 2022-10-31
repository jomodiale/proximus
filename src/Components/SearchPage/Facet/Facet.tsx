import {
  FunctionComponent,
  useEffect,
  useState,
  useContext,
  memo,
} from "react";
import {
  Facet as HeadlessFacet,
  buildFacet,
  FacetValue,
} from "@coveo/headless";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemIcon from '@mui/material/ListItemIcon';
import "./Facet.css";
import {
  Collapse,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import EngineContext from "../../../common/engineContext";
import { FacetContext } from "./FacetContext";
import styled from "styled-components";
import { chevronDown } from "react-icons-kit/feather/chevronDown";
import { chevronUp } from "react-icons-kit/feather/chevronUp";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { Icon } from "react-icons-kit";


interface FacetProps {
  title: string | undefined;
  field: string;
}

interface FacetRendererProps extends FacetProps {
  controller: HeadlessFacet;
}

const FacetRenderer: FunctionComponent<FacetRendererProps> = (props) => {
  const { controller } = props;
  const [state, setState] = useState(controller.state);
  const [collapse, setCollapse] = useState(true);
  // const [isActive, setIsActive] = useState(false); //color change
  // const [col, setCol] = useState('white');

  useEffect(
    () => controller.subscribe(() => setState(controller.state)),
    [controller]
  );

  const toggleSelect = (value: FacetValue) => {
    controller.toggleSelect(value);
    // setIsActive(true);
  };

  const showMore = () => {
    controller.showMoreValues();
  };

  const showLess = () => {
    controller.showLessValues();
  };

  const listStyle = {
   padding: '5px',
   color: '#0a0a0a',
   "&:hover": {
    backgroundColor: '#aaaaaa'
    } 
  }

  return (
        <>
          {state.values.length > 0 ? (
            <Wrapper>
              <Box mb={0} mr={3} p={1}>
                <Box
                  pb={1}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: 'flex-end',
                    padding: '5px'
                  }}
                  style={{backgroundColor: '#f3f3f3'}}
                >
                  <Typography variant="h6" component="h6" style={{fontSize: '23px'}}>
                    {props.title}
                  </Typography>
                  <div
                    onClick={() => setCollapse(!collapse)}
                    style={{ cursor: "pointer" }}
                  >
                    
                  </div>
                </Box>
                {/* <Divider /> */}
                <Collapse in={collapse}>
                  <List dense>
                    {state.values.map((value: FacetValue) => {
                      const labelId = `checkbox-list-label-${value}`;

                      return (
                        <>
                        <ListItem
                          style={listStyle}
                          key={value.value}
                          role={undefined}
                          button
                          onClick={() => toggleSelect(value)}
                        >
                          {/* <Checkbox
                            size="small"
                            edge="start"
                            checked={controller.isValueSelected(value)}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          /> */}
                          <ListItemText
                            // style={{backgroundColor: isActive ? '#5c2d91' : 'col', color: isActive ? 'white' : 'black'}}
                            // style={{backgroundColor: `${col}`}}
                            // onMouseEnter={() => setCol("grey")}
                            className="truncate inline"
                            primary={`${value.value}`}
                            // secondary={`(${value.numberOfResults})`}
                          />
                            <Icon icon={chevronRight} size={30} style={{ color: '#5c2d91',fontFamily:'Proximus-Bold', fontWeight: 1000 }}/>
                        </ListItem>
                        <Divider />
                        </>
                      );
                    })}
                  </List>
                  {state.canShowLessValues && (
                    <Button size="small" onClick={() => showLess()}>
                      Show Less
                    </Button>
                  )}
                  {state.canShowMoreValues && (
                    <Button size="small" onClick={() => showMore()}>
                      Show More
                    </Button>
                  )}
                </Collapse>
              </Box>
            </Wrapper>
          ) : null}
        </>
  );
};

const Facet: FunctionComponent<FacetProps> = (props) => {
  const { facetController } = useContext(FacetContext)!;
  const engine = useContext(EngineContext)!;
  let controller: HeadlessFacet = facetController[props.field]
    ? facetController[props.field]
    : buildFacet(engine, {
        options: {
          numberOfValues: 5,
          field: props.field,
        },
      });

  return (
    <FacetRenderer
      {...props}
      controller={controller}
    />
  );
};

export default memo(Facet);

const Wrapper = styled.div`
  // border: 1px #e5e8e8 solid;
  border-radius: 16px;
  padding: 25px 0px;
  width: 80%;
  margin-left: 140px;
  margin-bottom: 20px;
  font-family: Proximus-Regular;
`;
