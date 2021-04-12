import { hangHoa } from "./HangHoa.js";

export class quanAo extends hangHoa {
    xuatXu;
    chatLieu;
    constructor(đinhDanh, tenmatHang, giaThanh, nhasanXuat, giamGia, ngayNhap, xuatXu, chatLieu) {
        super(đinhDanh, tenmatHang, giaThanh, nhasanXuat, giamGia, ngayNhap);
        this.xuatXu = xuatXu;
        this.chatLieu - chatLieu;
    }
}