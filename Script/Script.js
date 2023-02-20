function chay(){
			var cc = document.getElementById('chieucao').value;
			var cn = document.getElementById('cannang').value;
			if (isNaN(cc) || isNaN(cn))
			{
				alert ("dữ liệu nhập ko phải là số");
			}
			else{
			var num=(cn)/((cc/100)*(cc/100));
			var BMI = num.toFixed(2);
				if(BMI<16){
					var ketqua="Chỉ số BMI ở trên cho thấy bạn bị gầy độ III !";
					document.getElementById('nhanxet').value = ketqua;
					document.getElementById('diem').value = BMI;
				}
				else if(BMI<17){
					var ketqua="Chỉ số BMI ở trên cho thấy bạn bị gầy độ II !";
					document.getElementById('nhanxet').value = ketqua;
					document.getElementById('diem').value = BMI;
				}
				else if(BMI<18.5){
					var ketqua="Chỉ số BMI ở trên cho thấy bạn bị gầy độ I !";
					document.getElementById('nhanxet').value = ketqua;
					document.getElementById('diem').value = BMI;
				}
				else if(BMI<25){
					var ketqua="Chúc mừng bạn ! Bạn có chỉ số BMI bình thường !";
					document.getElementById('nhanxet').value = ketqua;
					document.getElementById('diem').value = BMI;
				}
				else if(BMI<30){
					var ketqua="Chỉ số BMI ở trên cho thấy bạn bị thừa cân !";
					document.getElementById('nhanxet').value = ketqua;
					document.getElementById('diem').value = BMI;
				}
				else if(BMI<35){
					var ketqua="Chỉ số BMI ở trên cho thấy bạn bị béo phì độ I";
					document.getElementById('nhanxet').value = ketqua;
					document.getElementById('diem').value = BMI;
				}
				else if(BMI<40){
					var ketqua="Chỉ số BMI ở trên cho thấy bạn bị béo phì độ II !";
					document.getElementById('nhanxet').value = ketqua;
					document.getElementById('diem').value = BMI;
				}
				else if(BMI>40){
					var ketqua="Chỉ số BMI ở trên cho thấy bạn bị béo phì độ III !";
					document.getElementById('nhanxet').value = ketqua;
					document.getElementById('diem').value = BMI;
				}
				else{
					alert ("chưa nhập dữ liệu, bạn vui lòng nhập lại dữ liệu");
				}
			}
		}
window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("top").style.display = "block";
        } else {
            document.getElementById("top").style.display = "none";
        }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
