import { Table, TableHead, TableCell, TableRow, TableBody, TablePagination, Box } from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import type { Column, Row } from "../utils";

import { memo, useMemo, useState } from "react";

interface Props {
    columns: Column[];
    rows: Row[];
    maxWidth?: number | string;
    onClickEdit?: (id: number) => void;
    onClickDelete?: (id: number) => void;
}

const TableContainer = ({ columns, rows, maxWidth, onClickEdit, onClickDelete }: Props) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const onEdit = (id: number) => {
        onClickEdit?.(id);
    };

    const onDelete = (id: number) => {
        onClickDelete?.(id);
    };

    const paginatedRows = useMemo(() => {
        const start = page * rowsPerPage;
        const end = start + rowsPerPage;

        return rows.slice(start, end);
    }, [rows, page, rowsPerPage]);

    return (
        <Box>
            <Table sx={{ maxWidth, margin: "auto" }} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell style={column.style} key={column.value}>
                                {column.text}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {paginatedRows.map((row) => (
                        <TableRow key={row.id}>
                            {columns.map((column) => {
                                if (column.value === "action") {
                                    return (
                                        <TableCell key={column.value}>
                                            <EditOutlinedIcon
                                                sx={{
                                                    padding: "4px",
                                                    cursor: "pointer",
                                                }}
                                                color="success"
                                                onClick={() => onEdit(row.id)}
                                            />

                                            <DeleteIcon
                                                sx={{
                                                    padding: "4px",
                                                    cursor: "pointer",
                                                }}
                                                color="error"
                                                onClick={() => onDelete(row.id)}
                                            />
                                        </TableCell>
                                    );
                                }

                                return (
                                    <TableCell style={column.style} key={column.value}>
                                        {row[column.value]}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={rows.length}
                page={page}
                onPageChange={(_, newPage) => setPage(newPage)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(event) => {
                    setRowsPerPage(parseInt(event.target.value, 10));
                    setPage(0);
                }}
                rowsPerPageOptions={[5, 10, 20, 50]}
                labelRowsPerPage="Số dòng mỗi trang:"
            />
        </Box>
    );
};

export default memo(TableContainer);
