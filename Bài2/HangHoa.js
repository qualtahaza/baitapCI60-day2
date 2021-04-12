let listhanghoa = []
let listbanhang = []
let doanhThu = 0
export class hangHoa {
    dinhDanh;
    tenmatHang;
    giaThanh;
    nhasanXuat;
    giamGia;
    ngayNhap;
    constructor(dinhDanh, tenmatHang, giaThanh, nhasanXuat, giamGia, ngayNhap) {
        this.dinhDanh = dinhDanh;
        this.tenmatHang = tenmatHang;
        this.giaThanh = giaThanh;
        this.nhasanXuat = nhasanXuat;
        this.giamGia = giamGia;
        this.ngayNhap = ngayNhap;
    }
    nhaphangHoa(data) {

        listhanghoa.push(data);
        console.log(listhanghoa);
    }
    banHang(data) {
        for (let i = 0; i < listhanghoa.length; i++) {
            if (listhanghoa[i].dinhDanh == data) {
                listbanhang.push(listhanghoa[i])
                listhanghoa.splice(i, 1);
                console.log(listbanhang);
                break;
            } else {
                continue;
            }
        }
    }
    checkdoanhThu() {
        for (let i = 0; i < listbanhang.length; i++) {

            doanhThu = doanhThu + listbanhang[i].giaThanh;

        }
        console.log(doanhThu);
    }
}