export function parseRows(rows) {
  return rows.map((row) => {
    const key = row[0];

    return {
      key,
      selected: false,
      row: row.slice(1),
    };
  });
}
