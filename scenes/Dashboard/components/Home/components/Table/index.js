import { useState, useCallback, useMemo, useEffect } from "react";

import { Box, Click, Text, CheckBox, AbstractTable } from "@components/index";
import { COLORS, FONT_WEIGHTS, SIZES } from "@constants/index";

const Cell = AbstractTable.Cell;

export default function Table({
  header = [],
  rows = [],
  onSelect = (_) => {},
  actions = [],
}) {
  const [innerRows, setInnerRows] = useState(
    rows.map((row) => {
      const key = row[0];

      return {
        key,
        selected: false,
        row: row.slice(1),
      };
    })
  );

  const isAllSelected = useMemo(
    () => innerRows.every((row) => row.selected),
    [innerRows]
  );

  const selectRow = useCallback(
    (index) => {
      innerRows[index].selected = !innerRows[index].selected;
      setInnerRows([...innerRows]);
    },
    [innerRows]
  );

  const selectAll = useCallback(() => {
    const newInnerRows = innerRows.map((innerRow) => ({
      ...innerRow,
      selected: !isAllSelected,
    }));

    setInnerRows(newInnerRows);
  }, [innerRows]);

  const actualRows = useMemo(
    () => innerRows.map((rowData) => [rowData.key, ...rowData.row]),
    [innerRows]
  );

  useEffect(() => {
    onSelect(
      innerRows
        .filter((rowData) => rowData.selected)
        .map((rowData) => rowData.key)
    );
  }, [...innerRows.map((row) => row.selected)]);

  return (
    <AbstractTable
      bodyHeight="calc(100% - 3rem)"
      rows={actualRows}
      header={
        <Box
          width="100%"
          borderBottom={`1px solid ${COLORS.LIGHT_BLUE}`}
          padding="0 3rem"
          background={COLORS.WHITE}
        >
          <Cell width="6rem" mainAxis="center" crossAxis="center">
            <Click padding="1.25rem 2rem" onClick={() => selectAll()}>
              <CheckBox size={20} isChecked={isAllSelected} />
            </Click>
          </Cell>
          {header.map((value, index) => (
            <Cell key={index} padding="1.25rem 2rem">
              <Text
                size={SIZES.REGULAR}
                weight={FONT_WEIGHTS.BOLD}
                color={COLORS.WARM_BLACK}
              >
                {value}
              </Text>
            </Cell>
          ))}
        </Box>
      }
      renderRow={(key, row, index) => (
        <Box
          padding="0 3rem"
          key={key}
          width="100%"
          background={
            index % 2 === 0 ? COLORS.WHITE : COLORS.BLUE_CLOSE_TO_WHITE
          }
        >
          <Cell width="6rem" mainAxis="center" crossAxis="center">
            <Click padding="1.5rem 2rem" onClick={() => selectRow(index)}>
              <CheckBox side={20} isChecked={innerRows[index].selected} />
            </Click>
          </Cell>
          {row.map((value, index) => (
            <Cell key={index} padding="1.5rem 2rem">
              <Text
                size={SIZES.REGULAR}
                weight={FONT_WEIGHTS.REGULAR}
                color={COLORS.WARM_BLACK}
              >
                {value}
              </Text>
            </Cell>
          ))}
          <Cell padding="1.25rem 2rem">
            {actions.map((action, index) => {
              let split = <></>;
              if (index > 0) {
                split = (
                  <Box
                    key={2 * index}
                    height="100%"
                    width="1px"
                    background={COLORS.BLUE}
                    margin="0 1rem"
                  />
                );
              }

              return (
                <>
                  {split}
                  <Click key={2 * index + 1} onClick={action.onClick}>
                    <Text
                      size={SIZES.REGULAR}
                      weight={FONT_WEIGHTS.REGULAR}
                      color={COLORS.BLUE}
                    >
                      {action.label}
                    </Text>
                  </Click>
                </>
              );
            })}
          </Cell>
        </Box>
      )}
    ></AbstractTable>
  );
}
