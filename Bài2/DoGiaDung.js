import { hangHoa } from "./HangHoa.js";

export class dogiaDung extends hangHoa {
    doBen;
    constructor(đinhDanh, tenmatHang, giaThanh, nhasanXuat, giamGia, ngayNhap, doBen) {
        super(đinhDanh, tenmatHang, giaThanh, nhasanXuat, giamGia, ngayNhap);
        this.doBen = doBen;
    }
}