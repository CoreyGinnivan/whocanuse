import React, { Component } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { SmallText } from "./typography";
import { theme } from "./theme";
import { TwitterShareButton } from "react-twitter-embed";

import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const ActionsWrapper = styled("div")(props => ({
  gridArea: "3 / 3 / 4 / 4",
  display: "flex",
  alignItems: "center",
  marginLeft: "20px",
  input: {
    borderRadius: "3px",
    fontSize: "14px",
    color: theme.color.grey,
    fontFamily: theme.fontFamily,
    border: `1px solid ${theme.color.lightgrey}`,
    width: "300px",
    padding: "8px 4px",
    marginRight: "20px",
    transition: "all 0.2 ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#f9f9f9",
      transition: "all 0.2 ease"
    }
  },
  iframe: {
    marginLeft: "10px"
  },
  div: {
    display: "flex",
    alignItems: "center"
  },
  "@media screen and (max-width: 960px)": {
    display: "none"
  }
}));

/*----------------------------------------------------------
   Actions and Sharing Bar
----------------------------------------------------------*/

export class Actions extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  constructor() {
    super();
    this.copyRef = React.createRef();
  }
  render() {
    let { children, foreground, background, ...rest } = this.props;
    return (
      <ActionsWrapper {...rest}>
        <form>
          <SmallText style={{ marginRight: "10px" }}>Permalink</SmallText>
          <Tippy
            content="Click to copy"
            placement="bottom"
            animation="shift-away"
            arrow="true"
          >
            <input
              type="text"
              id="permalink"
              name="permalink"
              defaultValue={`http://whocanuse.com/#${background}#${foreground}`}
              readOnly="readonly"
              ref={this.copyRef}
              onClick={() => {
                this.copyRef.current.select();
                document.execCommand("copy");
              }}
            />
          </Tippy>
        </form>
        <TwitterShareButton
          url={"https://whocanuse.com"}
          options={{
            text: `An easy-to-use tool that delivers a breakdown of which vision types can see your color combination`,
            via: "CoreyGinnivan"
          }}
        />
        <iframe
          title="Github Star"
          src="https://ghbtns.com/github-btn.html?user=coreyginnivan&repo=whocanuse&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="100"
          height="20px"
        />
      </ActionsWrapper>
    );
  }
}
