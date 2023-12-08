// BÀI 1 XÉT ĐIỂM TUYỂN SINH 
document.getElementById('btn2').onclick = diemThi
function diemThi() {
    var diemChuan = document.getElementById('diemChuan').value * 1;
    var monThuNhat = document.getElementById('monThuNhat').value * 1;
    var monThuHai = document.getElementById('monThuHai').value * 1;
    var monThuBa = document.getElementById('monThuBa').value * 1;
    // var khuVucA = document.getElementById('khuVucA').value * 1;
    // var khuVucB = document.getElementById('khuVucB').value * 1;
    // var khuVucC = document.getElementById('khuVucC').value * 1;
    // var doiTuong1 = document.getElementById('doiTuong1').value * 1;
    // var doiTuong2 = document.getElementById('doiTuong2').value * 1;
    // var doiTuong3 = document.getElementById('doiTuong3').value * 1;
    var chonKhuVuc = document.getElementById("chonKhuVuc").value
    var chonDoiTuong = document.getElementById("chonDoiTuong").value
    // chu y cho console nay nhe
    // select no tu lay ra dc value cua option dc ng dung chon, khong can phai dom toi tung cai option
    // tu du lieu do moi di su dung cau truc dieu kien de kiem tra
    console.log(chonDoiTuong)
    console.log(chonKhuVuc)

    var tongDiem = Number(monThuNhat + monThuHai + monThuBa);
    console.log(tongDiem)
    var ketQua = "";

    if (diemChuan <= 30) {
        if (chonKhuVuc == "khuVucA") {
            tongDiem += 2;
        } else if (chonKhuVuc == "khuVucB") {
            tongDiem += 1;
        } else if (chonKhuVuc == "khuVucC") {
            tongDiem += 0.5;
        }

        // doi tuong lam y chang nhe
        if (chonDoiTuong == 'doiTuong1') {
            tongDiem += 2.5;
        } else if (chonDoiTuong == 'doiTuong2') {
            tongDiem += 1.5;
        } else if (chonDoiTuong == 'doiTuong3') {
            tongDiem += 1;
        }

        if (tongDiem >= diemChuan) {
            ketQua = "Bạn đã đậu với số điểm: " + tongDiem;
        } else {
            ketQua = "Bạn đã rớt";
        }
    } if (monThuNhat == 0 || monThuHai == 0 || monThuBa == 0) {
        ketQua = "Bạn đã rớt vì có 1 môn bằng 0đ"
    }

    console.log(ketQua);
    document.getElementById('kq1').innerHTML = ketQua
}

// BÀI 2 TÍNH TIỀN ĐIỆN 
function donGia(soKw) {
    if (soKw <= 50) {
        return 500;
    } else if (soKw <= 100) {
        return 650;
    } else if (soKw <= 200) {
        return 850;
    } else if (soKw <= 350) {
        return 1100;
    } else {
        return 1300;
    }
}

function calculateTongTien(soKw) {
    var giaKwDauTien = donGia(50);
    var giaKwChang2 = donGia(100);
    var giaKwChang3 = donGia(200);
    var giaKwChang4 = donGia(350);
    var giaKwChang5 = donGia(soKw);

    if (soKw <= 50) {
        return tongTien = giaKwDauTien * soKw;
    } else if (soKw <= 100) {
        return tongTien = giaKwDauTien * 50 + giaKwChang2 * (soKw - 50);
    } else if (soKw <= 200) {
        return tongTien = giaKwChang2 * 100 + giaKwChang3 * (soKw - 100);
    } else if (soKw <= 350) {
        return tongTien = giaKwChang3 * 200 + giaKwChang4 * (soKw - 200);
    } else {
        return tongTien = giaKwChang4 * 350 + (soKw - 350);
    }
}

document.getElementById('btn').onclick = function () {
    var soKw = parseFloat(document.getElementById('soKw').value);
    console.log(soKw);
    var tongTien = calculateTongTien(soKw);
    console.log(tongTien);
    document.getElementById('kq2').innerHTML = tongTien.toLocaleString(
        "it-IT",
        {
            style: "currency",
            currency: "VND",
        }
    );
};

// BÀI 3 TÍNH THUẾ THU NHẬP CÁ NHÂN



document.getElementById("btn1").onclick = calculateTax;

function calculateTax() {
    var soNguoiPhuThuoc = parseFloat(document.getElementById('soNguoiPhuThuoc').value) || 0;
    var soTienTongThuNhap = parseFloat(document.getElementById('soTienTongThuNhap').value) || 0;
    var thuNhapChiuThue = soTienTongThuNhap - 4e+6 - soNguoiPhuThuoc * 1.6e+6;
    var thueSuat = calculateThueSuat(thuNhapChiuThue);
    var tienThuePhaiNop = thuNhapChiuThue * thueSuat / 100;

    console.log(tienThuePhaiNop);
    console.log(soNguoiPhuThuoc);
    console.log(soTienTongThuNhap);
    console.log(thuNhapChiuThue);

    function calculateThueSuat(thuNhapChiuThue) {
        if (thuNhapChiuThue <= 60e+6) {
            return 5;
        } else if (thuNhapChiuThue <= 120e+6) {
            return 10;
        } else if (thuNhapChiuThue <= 210e+6) {
            return 15;
        } else if (thuNhapChiuThue <= 384e+6) {
            return 20;
        } else if (thuNhapChiuThue <= 624e+6) {
            return 25;
        } else if (thuNhapChiuThue <= 960e+6) {
            return 30;
        } else {
            return 35;
        }
    }
    document.getElementById('kq3').innerHTML = tienThuePhaiNop.toLocaleString(
        "it-IT",
        {
            style: "currency",
            currency: "VND",
        }
    );
};



// BÀI 4 TÍNH TIỀN CƯỚC MẠNG 

document.getElementById('btn4').addEventListener('click', tinhHoaDon);
function tinhHoaDon() {
    var maKH = getValueById("maKH");
    var loaiKH = getSelectedValue("loaiKH");
    var soKetNoi = parseFloat(getValueById("soKetNoiThem"));
    var soKenhCaoCap = parseFloat(getValueById("soKenhCaoCap"));
    var phiXuLyHD = 0;
    var phiDichVuCB = 0;
    var phiThueKenhCC = 0;
    if (loaiKH === "nhaDan") {
        phiXuLyHD = 4.5;
        phiDichVuCB = 20.5;
        phiThueKenhCC = 7.5 * soKenhCaoCap;
        disableElement("soKetNoiThem");
    } else if (loaiKH === "doanhNghiep") {
        phiXuLyHD = 15;
        phiDichVuCB = 75 + Math.max(0, soKetNoi - 10) * 5;
        phiThueKenhCC = 50 * soKenhCaoCap;

        var tongTien = phiXuLyHD + phiDichVuCB + phiThueKenhCC;
        displayResult(maKH, tongTien);
    }

    function disableElement(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.disabled = true;
        }
    }
    function getValueById(elementId) {
        var element = document.getElementById(elementId);
        return element ? element.value : 0;
    }

    function getSelectedValue(elementId) {
        var element = document.getElementById(elementId);
        return element ? element.options[element.selectedIndex].value : "";
    }

    function displayResult(maKH, tongTien) {
        alert("Mã khách hàng: " + maKH + "\nTổng tiền phải trả: " + tongTien.toFixed(2) + "$");
        document.getElementById('kq4').innerHTML = tongTien.toFixed(2);
    }
}
