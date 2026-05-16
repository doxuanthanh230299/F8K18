import { Box, Typography } from "@mui/material";
import { useTheme } from "../ThemeContext/useTheme";

const Content = () => {
    const { theme } = useTheme();
    return (
        <Box sx={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column", gap: 2, padding: 10, background: theme === "light" ? "#f9fafc" : "#0e172a" }}>
            <Typography variant="h4" sx={{ color: theme === "light" ? "#0e172a" : "#fff", fontWeight: 700 }}>
                Chương 1: Sự khởi nguồn của Context API
            </Typography>
            <Typography sx={{ color: theme === "light" ? "#576389" : "#f1f5f9" }} variant="body1">
                Trong những ngày đầu của React, việc truyền dữ liệu giữa các component chủ yếu được thực hiện bằng cách truyền props từ component cha xuống component con. Với các ứng dụng nhỏ, cách
                làm này khá đơn giản và dễ hiểu. Tuy nhiên, khi ứng dụng trở nên phức tạp hơn với nhiều tầng component lồng nhau (component tree sâu), việc truyền props liên tục qua nhiều lớp trung
                gian trở nên rất bất tiện. Hiện tượng này được gọi là Prop Drilling. Vấn đề của Prop Drilling Hãy tưởng tượng bạn có một trạng thái giao diện như theme được khởi tạo ở App, nhưng bạn
                muốn sử dụng nó trong một nút nằm sâu bên trong:
            </Typography>
            <Box sx={{ borderRadius: "8px", borderLeft: "4px solid #2663eb", background: theme === "light" ? "#f0f6ff" : "#1e293b", color: theme === "light" ? "#576389" : "#f1f5f9", padding: 2 }}>
                App → Sidebar → Menu → MenuItems → Button
            </Box>
            <Typography sx={{ color: theme === "light" ? "#576389" : "#f1f5f9" }} variant="body1">
                Bạn sẽ phải truyền theme qua tất cả các component trung gian, ngay cả khi chúng không cần dùng đến nó. Điều này khiến code trở nên: Khó đọc Khó bảo trì Dễ gây nhầm lẫn Khó mở rộng
            </Typography>
        </Box>
    );
};

export default Content;
