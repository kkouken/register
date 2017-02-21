webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(2);
	__webpack_require__(11);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);

	__webpack_require__(16);
	__webpack_require__(18);

	__webpack_require__(19);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);

	$(document).ready(function() {
		$('body').on('click', '.form-control', function() {
			$('.labelborder').removeClass('labelborder');
			$(this).closest('.form-group').find('.control-label').addClass('labelborder');
		});
		$('blockquote').next().fadeOut(2000,"swing");
		$('blockquote').css("background-color","rgba(255,255,255,0.5)");
		$('#registerForm button').addClass("register_form_buttom");
		$('#sign').popover();
		$('#phone').popover();
		$('#username').popover();
		$('#password').popover();
		$('#passwordconfirm').popover();
		$('#datePicker')
			.datepicker({
				format: 'yyyy-mm-dd'
			})
			.on('changeDate', function() {
				$('#registerForm').formValidation('revalidateField', 'date');
			});
		$('#registerForm').formValidation({
			framework: 'bootstrap',
			icon: {
				valid:'glyphicon glyphicon-ok',
				invalid:'glyphicon glyphicon-remove',
				validating:'glyphicon glyphicon-refresh'
			},
			fields:{
				username:{
					icon:false,
					message:'用户名无效',
					validators:{
						notEmpty:{  
							message:'用户名不能为空'
						},
						regexp:{
							regexp:/^[\w]{6,20}$/,
							message:'请输入6到20个字符'
						}
					}
				},
				phone:{
					icon:false,
					validators:{
						notEmpty:{
							message:'手机号不能为空'
						},
						regexp:{
							regexp:/^1[3|4|5|7|8]\d{9}$/,
							message:'请输入适当的手机号码'
						}
					}
				},
				password:{
					icon:false,
					validators:{
						notEmpty:{
							message:'密码不能为空'
						},
						regexp:{
							regexp:/^[\w]{6,18}$/,
							message:'密码由6到18位数字，字母或下划线组成'
						}
					}
				},
				passwordconfirm:{
					icon:false,
					validators:{
						identical:{
							field:'password',
							message:'与第一次密码不一致'
						}
					}
				},
				date:{
					icon:false,
					validators:{
						notEmpty:{
							message: '请选择日期或者填写日期'
						},
						date:{
							format:'YYYY-MM-DD',
							message: '格式不正确'
						}
					}
				}
			}
		});
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
])