import { hangHoa } from "./HangHoa.js";

export class doAn extends hangHoa {
    vi;

    constructor(đinhDanh, tenmatHang, giaThanh, nhasanXuat, giamGia, ngayNhap, vi) {
        super(đinhDanh, tenmatHang, giaThanh, nhasanXuat, giamGia, ngayNhap);
        this.vi = vi;

    }
}