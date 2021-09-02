import React, { useEffect, useMemo, useRef } from "react";

import { Box } from "@components/index";
import { Body, Header, Table, Cell } from "./styled";

/**
 * Generalized Table
 *
 */
export default function AbstractTable({
  header,
  rows,
  bodyHeight,
  renderRow = (_, __, ___) => <></>,
  onBottom,
}) {
  const bodyRef = useRef(null);

  useEffect(() => {
    const element = bodyRef && bodyRef.current;
    if (element && onBottom) {
      const trackingPosition = (element) => {
        const isOnBottom =
          element.scrollHeight - element.scrollTop <= element.clientHeight;
        if (isOnBottom) {
          onBottom();
        }
      };

      const listener = (e) => trackingPosition(e.target);
      element.addEventListener("scroll", listener);
      return () => element.removeEventListener("scroll", listener);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyRef, onBottom]);

  // Get actual data from rows, item at index 0 is a key and the rest is actual data
  const actualRows = useMemo(
    () => rows.map((row) => row.filter((_, index) => index > 0)),
    [rows]
  );

  return (
    <Table width="100%" height="100%">
      <Header width="100%">{header}</Header>
      <Body ref={bodyRef} width="100%" height={bodyHeight}>
        {actualRows.map((row, index) => (
          <Box key={rows[0]}>{renderRow(rows[0], row, index)}</Box>
        ))}
      </Body>
    </Table>
  );
}

AbstractTable.Cell = Cell;
