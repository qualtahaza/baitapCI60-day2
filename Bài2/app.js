import { doAn } from "./DoAn.js";
import { dogiaDung } from "./DoGiaDung.js";
import { quanAo } from "./QuanAo.js";

// Nhập hàng hóa và lưu vào 1 array
let dogiaDung_1 = new dogiaDung("Nồi", "Đồ gia dụng", 200000, "Tiến Anh", "10%", "13/02/2020", "cao");
let quanAo_1 = new quanAo("áo phông", "Quần áo", 150000, "Tiến Anh", "5%", "13/03/2020", "HN", "luạ");
let doAn_1 = new doAn("Mì hộp", "Đồ ăn", 10000, "Tiến Anh", "2%", "13/01/2020", "chua cay");
dogiaDung_1.nhaphangHoa(dogiaDung_1);
quanAo_1.nhaphangHoa(quanAo_1);
doAn_1.nhaphangHoa(doAn_1);


// Bán hàng dựa theo tên định danh sản phẩm sẽ xóa sản phẩm trong listhangHoa và thêm sản phẩm đó vào listbanHang sau đó ỉna
doAn_1.banHang("Nồi")

doAn_1.banHang("Mì hộp")


// check doanh thu dựa theo các sản phẩm có trong listbanHang đã được bán
doAn_1.checkdoanhThu()