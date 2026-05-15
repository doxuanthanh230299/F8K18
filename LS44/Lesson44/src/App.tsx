import { Box, Button } from "@mui/material";
import TableContainer from "./components/TableContainer";
import type { Column } from "./utils";
import { useMemo, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CssBaseline } from "@mui/material";

const productNames = ["Quần áo", "Giày dép", "Điện thoại", "Laptop", "Tai nghe", "Balo"];

const customerNames = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Thị D", "Hoàng Văn E", "Vũ Thị F", "Đặng Văn G", "Bùi Thị H", "Đỗ Văn I", "Phan Thị K"];

const tmpOrders = Array.from({ length: 100000 }, (_, i) => {
    const randomDate = new Date(2026, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);

    return {
        id: i + 1,
        customerName: customerNames[Math.floor(Math.random() * customerNames.length)],
        productName: productNames[Math.floor(Math.random() * productNames.length)],
        price: Math.floor(Math.random() * 5000000) + 100000, // 100k -> 5tr
        orderDate: randomDate.toISOString().split("T")[0],
        quantity: Math.floor(Math.random() * 10) + 1,
    };
});

const columns: Column[] = [
    { text: "Mã đơn", value: "id" },
    { text: "Tên khách hàng", value: "customerName" },
    { text: "Tên sản phẩm", value: "productName" },
    { text: "Giá", value: "price" },
    { text: "Ngày đặt hàng", value: "orderDate" },
    { text: "Số lượng", value: "quantity" },
];

const cards = [
    {
        id: 1,
        title: "Số lượng đơn hàng",
        description: tmpOrders.length + ' đơn',
        color: "#03a9f4",
    },
    {
        id: 2,
        title: "Tổng doanh thu (hoàn thành)",
        description: "Chưa tính",
        color: "#4caf50",
    },
];

const orders = tmpOrders;

export default function App() {
    const [fromDate, setFromDate] = useState<Dayjs | null>(null);
    const [toDate, setToDate] = useState<Dayjs | null>(null);
    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const orderDate = dayjs(order.orderDate);

            if (fromDate && orderDate.isBefore(fromDate, "day")) {
                return false;
            }

            if (toDate && orderDate.isAfter(toDate, "day")) {
                return false;
            }

            return true;
        });
    }, [fromDate, toDate]);

    return (
        <div style={{ background: '#e1e1e1'}}>
            <CssBaseline />
            <Box sx={{ maxWidth: 800, margin: "auto", padding: 4 }}>
                <Box
                    sx={{
                        width: "100%",
                        background: '#fff',
                        borderRadius: 2,
                        padding: 2, 
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 2,
                        marginBottom: 4,
                    }}
                >
                    {cards.map((card) => (
                        <Card key={card.id}>
                            <CardActionArea
                                sx={{
                                    height: "100%",
                                    "&[data-active]": {
                                        backgroundColor: "action.selected",
                                        "&:hover": {
                                            backgroundColor: "action.selectedHover",
                                        },
                                    },
                                    borderLeft: `4px solid ${card.color}`,
                                }}
                            >
                                <CardContent sx={{ height: "100%" }}>
                                    <Typography variant="h6" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        background: '#fff',
                        borderRadius: 2,
                        padding: 2, 
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: 2,
                        marginBottom: 4,
                    }}
                >
                    <Typography variant="h6" component="div">
                        Bộ lọc theo ngày
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                gap: 2,
                                marginBottom: 4,
                            }}
                        >
                            <DatePicker value={fromDate} onChange={(newValue) => setFromDate(newValue)} label="Từ ngày" defaultValue={dayjs("2022-04-17")} />
                            <DatePicker label="Đến ngày" value={toDate} onChange={(newValue) => setToDate(newValue)} />
                            <Button
                                onClick={() => {
                                    setFromDate(null);
                                    setToDate(null);
                                }}
                            >
                                Xóa bộ lọc
                            </Button>
                        </Box>
                    </LocalizationProvider>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        background: '#fff',
                        borderRadius: 2,
                        padding: 2, 
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: 2,
                    }}
                >
                    <Typography variant="h6" component="div">
                        Danh sách đơn hàng
                    </Typography>
                    <TableContainer columns={columns} rows={filteredOrders} maxWidth={800} />
                </Box>
            </Box>
        </div>
    );
}
