import React, { Component } from "react";
import PropTypes from "prop-types";
import { SmallText } from "../typography";
import {
  VisionTableWrapper,
  TableHeaderWrapper,
  TableHeadCellWrapper
} from "./styled";

export class VisionTableAlt extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    let { children } = this.props;
    return (
      <VisionTableWrapper>
        <TableHeaderWrapper>
          <TableHeadCellWrapper
            style={{ marginRight: "auto", paddingLeft: "12px" }}
          >
            <td>
              <SmallText>Situational Vision Events</SmallText>
            </td>
          </TableHeadCellWrapper>
          <TableHeadCellWrapper
            style={{
              width: "126px",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <td>
              <SmallText>Simulation</SmallText>
            </td>
          </TableHeadCellWrapper>
        </TableHeaderWrapper>
        <tbody>{children}</tbody>
      </VisionTableWrapper>
    );
  }
}
